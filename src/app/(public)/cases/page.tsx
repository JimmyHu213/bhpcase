import Link from "next/link";
import { Scale, Banknote, HeartPulse, ShieldOff } from "lucide-react";
import Timeline from "@/components/Timeline";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "The Case Against BHP — Allegations & Timeline",
  description:
    "A decade of alleged systematic underpayment: timeline of BHP's casual classification of coal miners and the fight for justice.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "The Case Against BHP — Allegations & Timeline",
    description:
      "A decade of alleged systematic underpayment: timeline of BHP's casual classification of coal miners and the fight for justice.",
  },
};

const evidenceCards = [
  {
    icon: Scale,
    title: "The Labour Hire Rort",
    text: "It is alleged that BHP and its labour hire associates — Chandler Macleod, WorkPac, and others — systematically classified coal miners as 'casuals' through complex corporate structures, despite full-time rosters set 12 months in advance. Under the Black Coal Award, casual employment of coal miners is prohibited.",
  },
  {
    icon: Banknote,
    title: "The Wage Theft",
    text: "Workers entitled to $137,000/year under the Black Coal Mining Industry Award were paid as little as $400/week. BHP paid labour hire firms ~$2,500 per worker per week — the firms kept roughly $1,000 and passed only a fraction to the actual miners.",
  },
  {
    icon: HeartPulse,
    title: "Injured & Abandoned",
    text: "Lead claimant Simon Turner broke his back at Mt Arthur coal mine in December 2015. He alleges he was told not to report it. His employer terminated him two days later. His separation certificate was recorded as a 'resignation', and he was classified as an office worker for insurance purposes.",
  },
  {
    icon: ShieldOff,
    title: "Suppression & Cover-Up",
    text: "BHP has obtained suppression orders limiting public access to evidence. Court transcripts cost nearly $2,000. Five major law firms have been engaged to manage litigation. Documents requested by the Fair Work Commission have not been made publicly available.",
  },
];

export default function CasesPage() {
  return (
    <>
      {/* ── Header Section ── */}
      <section className="bg-primary py-20 sm:py-28 text-center px-6 section-glow">
        <ScrollReveal>
          <p className="text-accent text-xs uppercase tracking-widest">
            Evidence Trail
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-4">
            A Decade of <span className="text-amber">Alleged Underpayment</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* ── Timeline Section ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-serif text-2xl font-bold text-primary text-center mb-14">
            Timeline of Events
          </h2>
          <div className="w-12 h-0.5 shimmer-line mx-auto mb-14 rounded-full" />
        </ScrollReveal>
        <Timeline />
      </section>

      {/* ── Evidence Deep Dive ── */}
      <section className="bg-light py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-4">
              Key Claims
            </h2>
            <div className="w-12 h-0.5 shimmer-line mx-auto mb-12 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evidenceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={index * 0.1}>
                  <div className="bg-white border border-border rounded-lg p-8 card-interactive h-full">
                    <div className="card-icon inline-block">
                      <Icon className="text-accent mb-4" size={28} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-body text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 sm:py-28 text-center px-6">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-bold text-primary">
            Join the Fight for Justice
          </h2>
          <p className="text-slate-body mt-4">
            Register your interest and help hold BHP accountable.
          </p>
          <Link
            href="/register"
            className="bg-accent text-white px-8 py-4 rounded font-semibold inline-block mt-8 hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Register as a Victim &rarr;
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
