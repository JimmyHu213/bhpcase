import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Nationlink Solutions & Unhappy Banking",
  description:
    "Specialist advocacy and advisory firm focused on empowering individuals wronged by corporate Australia. 30+ years in financial services and advocacy.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nationlink Solutions & Unhappy Banking",
    description:
      "Specialist advocacy and advisory firm focused on empowering individuals wronged by corporate Australia.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Header Section ── */}
      <section className="bg-primary py-20 sm:py-28 text-center text-white px-6 section-glow">
        <ScrollReveal>
          <p className="text-accent text-xs uppercase tracking-widest font-semibold">
            Who We Are
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-4">
            Proven <span className="text-amber">David vs Goliath</span> Advocates
          </h1>
        </ScrollReveal>
      </section>

      {/* ── Unhappy Banking Profile ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">
            <a
              href="https://www.unhappybanking.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Unhappy Banking
            </a>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="text-slate-body leading-relaxed mb-4">
            Founded by Geoff Shannon, Unhappy Banking has been at the forefront
            of holding financial institutions and corporations accountable since
            the GFC. The advocates behind Unhappy Banking know full well the
            issues caused by financial distress. Geoff has been through it all,
            including suffering from depression. Through all the adversity, he
            has managed to turn it into positivity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-slate-body leading-relaxed mb-4">
            In his own battle against the biggest bank, Geoff caused the
            bank&apos;s claims to be either struck out or amended 7 times over 5
            years. This comes at a massive expense &mdash; the banks have deep,
            deep pockets. In the end, Geoff faced off the bank&apos;s
            high-priced lawyers and barristers as he represented himself for
            over 20 days in the NSW Supreme Court. No lawyers or barristers
            representing Geoff &mdash; just determination and first-hand
            knowledge.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-slate-body leading-relaxed mb-4">
            Through all the litigation Geoff has faced &mdash; mainly due to his
            public stance against the major banks for others &mdash; he has
            continued to assist and provide service to anybody who has reached
            out. This dedication has led to him being nominated for Australian
            of the Year 3 times to date.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-slate-body leading-relaxed mb-4">
            This is what makes Unhappy Banking different from anything else seen
            in Australia. It is the first-hand experience in dealing with issues
            when facing hard times. The team behind Unhappy Banking are in the
            fight &mdash; they are bruised and battered but not beat. New skills
            are being adopted on a daily basis, relationships are being built,
            partners are being sought, and with all this, solutions are being
            found.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-slate-body leading-relaxed mb-4">
            In the last 3 years, over $300 million was saved in reduced or wiped
            loans for mainly farmers and commercial borrowers. These bank clients
            were caught up in the major banks&apos; cleansing of their commercial
            loan books to assist with complying with Basel III banking
            regulations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-slate-body leading-relaxed mb-6 font-medium text-primary">
            Importantly &mdash; you are NOT alone. Tell us your story.
          </p>
          <a
            href="https://www.unhappybanking.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dark text-sm font-semibold transition-colors"
          >
            Visit unhappybanking.com.au &rarr;
          </a>
        </ScrollReveal>
      </section>

      {/* ── Nationlink Solutions Profile ── */}
      <section className="bg-light py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
              <a
                href="https://www.nationlinksolutions.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Nationlink Solutions Pty Ltd
              </a>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-slate-body leading-relaxed mb-4">
              Nationlink Solutions are passionate about standing up for everyday
              people being treated poorly by Australia&apos;s banks, lenders
              and/or creditors which may instigate possession of your property
              and assets. We support you to help you fight for your right! If
              you have a lending or creditor issue please make contact with us
              to see how we may be able to assist.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-slate-body leading-relaxed mb-4">
              It is possible that both parties may choose to walk away happy due
              to the excellent negotiation and mediation skills at Nationlink
              Solutions. We aim to find the best solution possible!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-body leading-relaxed mb-6">
              Under the leadership of Geoffrey Shannon as Leading Consultant,
              Nationlink brings decades of financial services, regulatory and
              corporate governance expertise to complex disputes.
            </p>
            <a
              href="https://www.nationlinksolutions.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dark text-sm font-semibold transition-colors"
            >
              Visit nationlinksolutions.com.au &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Geoff Shannon Profile ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
              Geoffrey Shannon
            </h2>
            <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-6">
              Founder, Unhappy Banking &bull; Leading Consultant, Nationlink
              Solutions
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-slate-body leading-relaxed mb-4">
              Geoff&apos;s advocacy comes from first-hand experience. In his
              own battle against the Commonwealth Bank of Australia (CBA), he
              caused the bank&apos;s claims to be either struck out or amended
              7 times over 5 years. The banks have deep, deep pockets &mdash;
              but Geoff faced off against CBA&apos;s high-priced lawyers and
              barristers as he represented himself for over 20 days in the NSW
              Supreme Court. No lawyers or barristers representing him &mdash;
              just determination and first-hand knowledge.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-slate-body leading-relaxed mb-4">
              Through all the litigation Geoff has faced &mdash; mainly due to
              his public stance against the banks for others &mdash; he has
              continued to assist anyone who reached out. This dedication has
              led to him being nominated for Australian of the Year 3 times to
              date. Whilst Geoff was and still is up against the CBA, he
              continues to assist others in need.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-slate-body leading-relaxed">
              All replies and guidance come from first-hand experience &mdash;
              not something learned at a normal university. The team have learnt
              their skills from the school of hard knocks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Track Record ── */}
      <section className="bg-light py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-bold text-primary text-center mb-10">
              Our Track Record
            </h2>
          </ScrollReveal>
          <div className="flex justify-center gap-12 sm:gap-20 flex-wrap">
            {[
              { value: "30+", label: "Years in Financial Services & Advocacy" },
              { value: "$300M+", label: "Saved for Farmers & Borrowers" },
              { value: "3x", label: "Australian of the Year Nominations" },
              { value: "20+", label: "Days Self-Represented in Supreme Court" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-amber">
                    {stat.value}
                  </div>
                  <p className="text-xs text-slate-body mt-1 text-center max-w-[180px]">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-serif text-2xl font-bold text-primary mb-8">
            What We Provide to BHP Victims
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Strategic litigation coordination and evidence gathering",
            "Media exposure campaigns to maximise public awareness",
            "Victim registration and secure data room management",
            "Connection with experienced class action law firms",
            "Regulatory complaint coordination (FWC, ATO, ASIC)",
            "Parliamentary and Senate inquiry advocacy",
            "Workers' compensation review and backpay calculations",
            "Ongoing case updates and victim communication",
          ].map((service, index) => (
            <ScrollReveal key={service} delay={index * 0.05}>
              <div className="flex items-start gap-3 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 transition-transform group-hover:scale-150" />
                <p className="text-sm text-slate-body group-hover:text-primary transition-colors">
                  {service}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-primary py-20 sm:py-28 text-center px-6 section-glow">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-bold text-white">
            Ready to Join the Fight?
          </h2>
          <p className="text-slate-300 mt-4">
            Register your interest today. Confidential. No obligation.
          </p>
          <Link
            href="/register"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded font-semibold inline-block mt-8 transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Register as a Victim &rarr;
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
