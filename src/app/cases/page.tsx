import Link from "next/link";
import { Scale, Banknote, HeartPulse, ShieldOff } from "lucide-react";
import Timeline from "@/components/Timeline";

export const metadata = {
  title: "The Case Against BHP — Evidence & Timeline | Unhappy Banking",
  description:
    "A decade of systematic fraud: timeline of BHP's illegal casual classification of coal miners and the fight for justice.",
};

const evidenceCards = [
  {
    icon: Scale,
    title: "The Labour Hire Rort",
    text: "BHP and its labour hire associates — Chandler Macleod, WorkPac, and others — systematically classified coal miners as 'casuals' through shell structures, despite full-time rosters set 12 months in advance. Under the Black Coal Award, casual employment of coal miners is illegal.",
  },
  {
    icon: Banknote,
    title: "The Wage Theft",
    text: "Workers entitled to $137,000/year under the Black Coal Mining Industry Award were paid as little as $400/week. BHP paid labour hire firms ~$2,500 per worker per week — the firms kept roughly $1,000 and passed only a fraction to the actual miners.",
  },
  {
    icon: HeartPulse,
    title: "Injured & Abandoned",
    text: "Lead claimant Simon Turner broke his back at Mt Arthur coal mine in December 2015. He was told not to report it. His employer sacked him two days later, falsified his separation certificate as a 'resignation', and classified him as an office worker for insurance purposes.",
  },
  {
    icon: ShieldOff,
    title: "Suppression & Cover-Up",
    text: "BHP has obtained suppression orders to hide evidence. Court transcripts cost nearly $2,000. Five blue-chip law firms have been deployed to bury public visibility of the contracts that expose the fraud. Documents requested by the Fair Work Commission have been kept secret.",
  },
];

export default function CasesPage() {
  return (
    <>
      {/* ── Header Section ── */}
      <section className="bg-primary py-20 sm:py-28 text-center px-6">
        <p className="text-accent text-xs uppercase tracking-widest">
          Evidence Trail
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-4">
          A Decade of <span className="text-amber">Systematic Fraud</span>
        </h1>
      </section>

      {/* ── Timeline Section ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Timeline />
      </section>

      {/* ── Evidence Deep Dive ── */}
      <section className="bg-light py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">
            The Evidence
          </h2>

          {evidenceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white border border-border rounded-lg p-8 mb-6"
              >
                <Icon className="text-accent mb-4" size={28} />
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-body text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 sm:py-28 text-center px-6">
        <h2 className="font-serif text-3xl font-bold text-primary">
          Join the Fight for Justice
        </h2>
        <p className="text-slate-body mt-4">
          Register your interest and help hold BHP accountable.
        </p>
        <Link
          href="/register"
          className="bg-accent text-white px-8 py-4 rounded font-semibold inline-block mt-8 hover:bg-accent-dark transition-colors"
        >
          Register as a Victim &rarr;
        </Link>
      </section>
    </>
  );
}
