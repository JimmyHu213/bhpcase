"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    mineSites: "",
    labourHireCompany: "",
    employmentPeriod: "",
    summary: "",
  });
  const [website, setWebsite] = useState(""); // honeypot
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok) {
        setError(data.error || "An error occurred. Please try again.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-success" size={32} />
        </div>
        <h2 className="font-serif text-2xl font-bold text-primary">
          Registration Received
        </h2>
        <p className="text-slate-body mt-4 max-w-md mx-auto text-center">
          Thank you for registering your interest. Your details are held in
          strict confidence. A member of our team will be in touch within 48
          hours to discuss your case.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-border rounded-lg px-4 py-3 text-sm text-primary bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors placeholder:text-slate-400";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Full Name */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Mine Sites */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          Mine Site(s)
        </label>
        <input
          type="text"
          name="mineSites"
          placeholder="e.g. Mt Arthur, Peak Downs"
          value={formData.mineSites}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Labour Hire Company */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          Labour Hire Company
        </label>
        <input
          type="text"
          name="labourHireCompany"
          placeholder="e.g. Chandler Macleod, WorkPac"
          value={formData.labourHireCompany}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Employment Period */}
      <div>
        <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          Employment Period
        </label>
        <input
          type="text"
          name="employmentPeriod"
          placeholder="e.g. 2012 – 2018"
          value={formData.employmentPeriod}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Brief Summary — full width */}
      <div className="md:col-span-2">
        <label className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          Brief Summary
        </label>
        <textarea
          name="summary"
          placeholder="Describe how you were affected — underpayment, casual classification, injury, lack of entitlements, etc."
          value={formData.summary}
          onChange={handleChange}
          className={`${inputClass} min-h-[120px] resize-vertical`}
        />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute opacity-0 -z-10 h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Consent checkbox — full width */}
      <div className="md:col-span-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="accent-accent mt-1"
          />
          <span className="text-sm text-slate-body leading-relaxed">
            I consent to Nationlink Solutions Pty Ltd and Unhappy Banking storing
            my details for the purpose of investigating and pursuing compensation
            claims against BHP and associated entities. My information will be
            held in strict confidence and will not be shared with third parties
            without my written consent.
          </span>
        </label>
      </div>

      {/* Error display */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 md:col-span-2">
          {error}
        </div>
      )}

      {/* Submit button — full width, centered */}
      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          disabled={loading || !consent || !formData.fullName || !formData.email}
          className={`${
            loading || !consent || !formData.fullName || !formData.email
              ? "bg-slate-300 cursor-not-allowed"
              : "bg-accent hover:bg-accent-dark"
          } text-white px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors`}
        >
          {loading ? "Submitting..." : "Register My Interest"}
        </button>
      </div>
    </form>
  );
}
