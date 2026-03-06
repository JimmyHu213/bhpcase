import { ArrowRight } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata = {
  title: "Register as a Victim | BHP Wage Theft Case | Unhappy Banking",
  description:
    "Register your interest if you were employed as a casual coal miner through labour hire at a BHP mine. Confidential and without obligation.",
};

export default function RegisterPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-primary py-20 sm:py-28 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-accent text-xs uppercase tracking-widest font-semibold">
            Take Action
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-3">
            Register as a{" "}
            <span className="text-amber">BHP Victim</span>
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-lg">
            If you were employed as a &apos;casual&apos; coal miner through a
            labour hire company at any BHP-operated mine and believe you were
            underpaid, we want to hear from you. Your registration is
            confidential and without obligation.
          </p>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-20 sm:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <RegistrationForm />
      </section>

      {/* ── Who Should Register ── */}
      <section className="bg-light py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-bold text-primary mb-6">
            You Should Register If:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "You worked at a BHP mine through a labour hire company",
              "You were classified as a 'casual' despite working regular, full-time rosters",
              "You were employed by Chandler Macleod, WorkPac, TESA, OneKey, or similar",
              "You were denied leave entitlements, long service leave, or proper superannuation",
              "Your workers' compensation claim was processed under incorrect employment terms",
              "You worked at Mt Arthur, Hunter Valley, Peak Downs, Saraji, Goonyella or other BHP mines",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <ArrowRight
                  className="text-accent flex-shrink-0 mt-0.5"
                  size={16}
                />
                <p className="text-sm text-slate-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
