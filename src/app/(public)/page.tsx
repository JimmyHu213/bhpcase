import Link from "next/link";
import { Scale, Banknote, HeartPulse, ShieldOff, ArrowRight } from "lucide-react";
import StatCounter from "@/components/StatCounter";

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-primary min-h-[85vh] flex items-center justify-center text-center px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent uppercase tracking-widest text-xs mb-6">
            Nationlink Solutions &bull; Unhappy Banking
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Australia&apos;s Biggest
            <br />
            <span className="text-amber">Wage Theft Scandal</span>
          </h1>

          <div className="w-16 h-0.5 bg-amber mx-auto my-6" />

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Thousands of coal miners were illegally classified as casuals and
            systematically underpaid by BHP and its labour hire associates. The
            evidence is mounting. The reckoning is coming.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/register"
              className="bg-accent text-white px-8 py-3.5 rounded font-semibold hover:bg-accent-dark transition-colors"
            >
              Register as a Victim
            </Link>
            <Link
              href="/cases"
              className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-white/60 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-amber">
                <StatCounter target={2.5} prefix="$" suffix="B" decimals={1} />
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                Estimated Wage Theft
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
                Years of Systematic Fraud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Overview Section ── */}
      <section className="bg-white py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-widest font-semibold">
            The Case Against BHP
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3">
            Same Job. <span className="text-accent">Stolen Pay.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-light border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Scale className="text-accent mb-4" size={28} />
              <h3 className="font-serif text-lg font-bold text-primary mb-3">
                The Labour Hire Rort
              </h3>
              <p className="text-slate-body text-sm leading-relaxed">
                BHP and its labour hire associates — Chandler Macleod, WorkPac,
                and others — systematically classified coal miners as
                &apos;casuals&apos; through shell structures, despite full-time
                rosters set 12 months in advance. Under the Black Coal Award,
                casual employment of coal miners is illegal.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-light border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Banknote className="text-accent mb-4" size={28} />
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

            {/* Card 3 */}
            <div className="bg-light border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <HeartPulse className="text-accent mb-4" size={28} />
              <h3 className="font-serif text-lg font-bold text-primary mb-3">
                Injured &amp; Abandoned
              </h3>
              <p className="text-slate-body text-sm leading-relaxed">
                Lead claimant Simon Turner broke his back at Mt Arthur coal mine
                in December 2015. He was told not to report it. His employer
                sacked him two days later, falsified his separation certificate
                as a &apos;resignation&apos;, and classified him as an office
                worker for insurance purposes.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-light border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <ShieldOff className="text-accent mb-4" size={28} />
              <h3 className="font-serif text-lg font-bold text-primary mb-3">
                Suppression &amp; Cover-Up
              </h3>
              <p className="text-slate-body text-sm leading-relaxed">
                BHP has obtained suppression orders to hide evidence. Court
                transcripts cost nearly $2,000. Five blue-chip law firms have
                been deployed to bury public visibility of the contracts that
                expose the fraud. Documents requested by the Fair Work Commission
                have been kept secret.
              </p>
            </div>
          </div>

          {/* ── Landmark Ruling Callout ── */}
          <div className="mt-12 bg-light border border-border border-l-4 border-l-amber rounded-lg p-8">
            <p className="text-amber text-xs uppercase tracking-widest font-semibold mb-3">
              Landmark Ruling — July 2025
            </p>
            <p className="text-slate-body text-sm leading-relaxed">
              The Fair Work Commission ordered BHP to pay 2,200 Queensland coal
              miners an average of{" "}
              <span className="font-semibold text-primary">
                $30,000 more per year
              </span>{" "}
              under Same Job Same Pay laws — confirming the labour hire model was
              a wage-cutting rort. BHP&apos;s compliance costs could reach{" "}
              <span className="font-semibold text-primary">
                $1.3 billion annually
              </span>
              . But these laws are not retrospective.{" "}
              <em>Thousands of past victims remain uncompensated.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── Brand Damage Banner ── */}
      <section className="bg-primary py-20 sm:py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            <span className="text-amber">$250 Billion Company.</span>
            <br />
            <span className="text-white">Zero Accountability.</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            BHP deploys armies of lawyers and suppression orders to hide its
            labour hire fraud. They&apos;ve spent millions fighting Same Job Same
            Pay while injured workers sleep on garage floors. The only language
            BHP understands is reputational risk. Together, we speak that
            language.
          </p>
        </div>
      </section>

      {/* ── Who Should Register Section ── */}
      <section className="bg-light py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-xs uppercase tracking-widest font-semibold">
            Take Action
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary mt-3">
            You Should Register If...
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {[
            "You worked at a BHP mine through a labour hire company",
            "You were classified as a 'casual' despite working regular, full-time rosters",
            "You were employed by Chandler Macleod, WorkPac, TESA, OneKey, or similar",
            "You were denied leave entitlements, long service leave, or proper superannuation",
            "Your workers' compensation claim was processed under incorrect employment terms",
            "You worked at Mt Arthur, Hunter Valley, Peak Downs, Saraji, Goonyella or other BHP mines",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <ArrowRight
                className="text-accent flex-shrink-0 mt-0.5"
                size={18}
              />
              <p className="text-sm text-slate-body">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-20 sm:py-28 px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary">
          Ready to Take Action?
        </h2>
        <p className="text-slate-body mt-4">
          Your registration is confidential and without obligation.
        </p>
        <Link
          href="/register"
          className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded font-semibold text-lg mt-8 inline-block transition-colors"
        >
          Register as a Victim &rarr;
        </Link>
      </section>
    </>
  );
}
