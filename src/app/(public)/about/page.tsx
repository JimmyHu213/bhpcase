import Link from "next/link";

export const metadata = {
  title: "About Nationlink Solutions & Unhappy Banking | BHP Victims",
  description:
    "Specialist advocacy and advisory firm focused on empowering individuals wronged by corporate Australia.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Header Section ── */}
      <section className="bg-primary py-20 sm:py-28 text-center text-white px-6">
        <p className="text-accent text-xs uppercase tracking-widest font-semibold">
          Who We Are
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-4">
          Proven <span className="text-amber">David vs Goliath</span> Advocates
        </h1>
      </section>

      {/* ── Organization Profiles ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nationlink Solutions */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Nationlink Solutions Pty Ltd
            </h2>
            <p className="text-slate-body leading-relaxed mb-4">
              A specialist advocacy and advisory firm focused on empowering
              individuals and groups who have been wronged by corporate
              Australia. We provide strategic litigation support, media campaign
              management, evidence gathering, and victim coordination services.
            </p>
            <p className="text-slate-body leading-relaxed mb-4">
              Under the direction of Geoffrey Shannon, Director of Prism Global
              Group PLC (UK) and PZM Pty Ltd (Australia), AFSL 518180, we bring
              decades of financial services, regulatory and corporate governance
              expertise to complex disputes.
            </p>
          </div>

          {/* Unhappy Banking */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Unhappy Banking
            </h2>
            <p className="text-slate-body leading-relaxed mb-4">
              Founded by Geoff Shannon as a bank victim advocacy platform,
              Unhappy Banking has been at the forefront of holding financial
              institutions and corporations accountable since the GFC. With a
              proven track record in litigation strategy and media exposure
              campaigns that force corporate accountability.
            </p>
            <p className="text-slate-body leading-relaxed mb-4">
              Our approach is built on a simple truth: the only thing
              corporations like BHP fear more than a lawsuit is sustained,
              well-documented public scrutiny of their conduct. Brand damage
              changes behaviour. We make that happen.
            </p>
          </div>
        </div>
      </section>

      {/* ── Track Record ── */}
      <section className="bg-light py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-primary text-center mb-10">
            Our Track Record
          </h2>
          <div className="flex justify-center gap-12 sm:gap-20 flex-wrap">
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-amber">
                30+
              </div>
              <p className="text-xs text-slate-body mt-1 text-center max-w-[180px]">
                Years in Financial Services &amp; Advocacy
              </p>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-amber">
                $100M+
              </div>
              <p className="text-xs text-slate-body mt-1 text-center max-w-[180px]">
                Annual Trade Exchange Volume (1990&ndash;2008)
              </p>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-amber">
                Complete
              </div>
              <p className="text-xs text-slate-body mt-1 text-center max-w-[180px]">
                Vindication in CBA Legal Battle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-primary mb-8">
          What We Provide to BHP Victims
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Strategic litigation coordination and evidence gathering",
            "Media exposure campaigns to maximise brand damage pressure",
            "Victim registration and secure data room management",
            "Connection with experienced class action law firms",
            "Regulatory complaint coordination (FWC, ATO, ASIC)",
            "Parliamentary and Senate inquiry advocacy",
            "Workers' compensation review and backpay calculations",
            "Ongoing case updates and victim communication",
          ].map((service) => (
            <div key={service} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-sm text-slate-body">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-primary py-20 sm:py-28 text-center px-6">
        <h2 className="font-serif text-3xl font-bold text-white">
          Ready to Join the Fight?
        </h2>
        <p className="text-slate-300 mt-4">
          Register your interest today. Confidential. No obligation.
        </p>
        <Link
          href="/register"
          className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded font-semibold inline-block mt-8"
        >
          Register as a Victim &rarr;
        </Link>
      </section>
    </>
  );
}
