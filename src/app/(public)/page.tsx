import Link from "next/link";
import { Scale, Banknote, HeartPulse, ShieldOff, ArrowRight } from "lucide-react";
import StatCounter from "@/components/StatCounter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-primary min-h-[85vh] flex items-center justify-center text-center px-6 py-24 section-glow">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-accent uppercase tracking-widest text-xs mb-6">
              Nationlink Solutions &bull; Unhappy Banking
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Australia&apos;s Biggest
              <br />
              <span className="text-amber">Wage Theft Allegations</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-16 h-0.5 shimmer-line mx-auto my-6 rounded-full" />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Thousands of coal miners were allegedly classified as casuals and
              systematically underpaid by BHP and its labour hire associates. The
              evidence is mounting. The reckoning is coming.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/register"
                className="bg-accent text-white px-8 py-3.5 rounded font-semibold hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Register as a Victim
              </Link>
              <Link
                href="/cases"
                className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-white/60 hover:bg-white/5 transition-all"
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <div className="mt-16 flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-amber">
                  <StatCounter target={2.5} prefix="$" suffix="B" decimals={1} />
                </div>
                <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                  Estimated Underpayment
                </p>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-amber">
                  <StatCounter target={1200} suffix="+" />
                </div>
                <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                  Affected Workers at Mt Arthur Alone
                </p>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-amber">
                  <StatCounter target={10} suffix="+" />
                </div>
                <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                  Years of Alleged Underpayment
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Case Overview Section ── */}
      <section className="bg-white py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-accent text-xs uppercase tracking-widest font-semibold">
              The Case Against BHP
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3">
              Same Job. <span className="text-accent">Different Pay.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Card 1 */}
            <ScrollReveal delay={0.05}>
              <div className="bg-light border border-border rounded-lg p-8 card-interactive h-full">
                <div className="card-icon inline-block">
                  <Scale className="text-accent mb-4" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  The Labour Hire Rort
                </h3>
                <p className="text-slate-body text-sm leading-relaxed">
                  It is alleged that BHP and its labour hire associates —
                  Chandler Macleod, WorkPac, and others — systematically
                  classified coal miners as &apos;casuals&apos; through complex
                  corporate structures, despite full-time rosters set 12 months
                  in advance. Under the Black Coal Award, casual employment of
                  coal miners is prohibited.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-light border border-border rounded-lg p-8 card-interactive h-full">
                <div className="card-icon inline-block">
                  <Banknote className="text-accent mb-4" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  The Wage Theft
                </h3>
                <p className="text-slate-body text-sm leading-relaxed">
                  Workers entitled to $137,000/year under the Black Coal Mining
                  Industry Award were paid as little as $400/week. BHP paid labour
                  hire firms ~$2,500 per worker per week — the firms kept roughly
                  $1,000 and passed only a fraction to the actual miners.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={0.15}>
              <div className="bg-light border border-border rounded-lg p-8 card-interactive h-full">
                <div className="card-icon inline-block">
                  <HeartPulse className="text-accent mb-4" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  Injured &amp; Abandoned
                </h3>
                <p className="text-slate-body text-sm leading-relaxed">
                  Lead claimant Simon Turner broke his back at Mt Arthur coal mine
                  in December 2015. He alleges he was told not to report it. His
                  employer terminated him two days later. His separation
                  certificate was recorded as a &apos;resignation&apos;, and he
                  was classified as an office worker for insurance purposes.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-light border border-border rounded-lg p-8 card-interactive h-full">
                <div className="card-icon inline-block">
                  <ShieldOff className="text-accent mb-4" size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  Suppression &amp; Cover-Up
                </h3>
                <p className="text-slate-body text-sm leading-relaxed">
                  BHP has obtained suppression orders limiting public access to
                  evidence. Court transcripts cost nearly $2,000. Five major law
                  firms have been engaged to manage litigation. Documents
                  requested by the Fair Work Commission have not been made
                  publicly available.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Landmark Ruling Callout ── */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 bg-light border border-border border-l-4 border-l-amber rounded-lg p-8 card-interactive">
              <p className="text-amber text-xs uppercase tracking-widest font-semibold mb-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
                </span>
                Landmark Ruling — July 2025
              </p>
              <p className="text-slate-body text-sm leading-relaxed">
                The Fair Work Commission ordered BHP to pay 2,200 Queensland coal
                miners an average of{" "}
                <span className="font-semibold text-primary">
                  $30,000 more per year
                </span>{" "}
                under Same Job Same Pay laws — finding that labour hire workers
                were being paid significantly less than direct employees.
                BHP&apos;s compliance costs could reach{" "}
                <span className="font-semibold text-primary">
                  $1.3 billion annually
                </span>
                . But these laws are not retrospective.{" "}
                <em>Thousands of past victims remain uncompensated.</em>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Brand Damage Banner ── */}
      <section className="bg-primary py-20 sm:py-28 px-6 text-center section-glow">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              <span className="text-amber">$250 Billion Company.</span>
              <br />
              <span className="text-white">Still No Answers.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-slate-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              BHP has engaged multiple major law firms and obtained suppression
              orders in proceedings related to its labour hire practices.
              Meanwhile, affected workers continue to seek the entitlements
              they believe they are owed. Public accountability and
              transparency remain essential to achieving justice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Who Should Register Section ── */}
      <section className="bg-light py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-accent text-xs uppercase tracking-widest font-semibold">
              Take Action
            </p>
            <h2 className="font-serif text-3xl font-bold text-primary mt-3">
              You Should Register If...
            </h2>
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {[
            "You worked at a BHP mine through a labour hire company",
            "You were classified as a 'casual' despite working regular, full-time rosters",
            "You were employed by Chandler Macleod, WorkPac, TESA, OneKey, or similar",
            "You were denied leave entitlements, long service leave, or proper superannuation",
            "Your workers' compensation claim was processed under incorrect employment terms",
            "You worked at Mt Arthur, Hunter Valley, Peak Downs, Saraji, Goonyella or other BHP mines",
          ].map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.06}>
              <div className="flex items-start gap-3 group">
                <ArrowRight
                  className="text-accent flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1"
                  size={18}
                />
                <p className="text-sm text-slate-body group-hover:text-primary transition-colors">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-20 sm:py-28 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-bold text-primary">
            Ready to Take Action?
          </h2>
          <p className="text-slate-body mt-4">
            Your registration is confidential and without obligation.
          </p>
          <Link
            href="/register"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded font-semibold text-lg mt-8 inline-block transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Register as a Victim &rarr;
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
