import Link from "next/link";
import { ExternalLink, Newspaper } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Media Coverage",
  description:
    "Independent journalism and media coverage of BHP labour hire wage theft allegations. Investigative reporting by Michael West Media and others.",
  alternates: { canonical: "/media" },
  openGraph: {
    title: "Media Coverage | BHP Wage Theft Allegations",
    description:
      "Independent journalism covering BHP labour hire practices and wage theft allegations against coal miners.",
  },
};

const mediaArticles = [
  {
    title: "Case Muzzled. Court Strikes Out Injured Coal Miner, Backs BHP",
    source: "Michael West Media",
    author: "Stephanie Tran",
    date: "27 Feb 2026",
    url: "https://michaelwest.com.au/case-muzzled-court-strikes-out-injured-coal-miner-backs-bhp/",
    summary:
      "BHP obtains sweeping suppression orders following a court's dismissal of injured coal miner Simon Turner's case, raising concerns about access to justice for workers pursuing claims against major mining companies.",
    tag: "Court Proceedings",
  },
  {
    title: "Judge Takes Pity on BHP in Case Against Injured Coal Miner",
    source: "Michael West Media",
    author: "Stephanie Tran",
    date: "3 Mar 2026",
    url: "https://michaelwest.com.au/judge-takes-pity-on-bhp-in-case-against-injured-coal-miner/",
    summary:
      "An injured coal miner's legal action against BHP is dismissed without the company filing a formal defence. Significant portions of the proceedings are restricted from public view.",
    tag: "Court Proceedings",
  },
  {
    title:
      "David v The Goliaths: Lone Coal Miner Tackles BHP & Co in Court Over Massive Wage Theft",
    source: "Michael West Media",
    author: "Michael West",
    date: "10 Nov 2025",
    url: "https://michaelwest.com.au/david-v-the-goliaths-lone-coal-miner-tackles-bhp-co-in-court-over-massive-wage-theft/",
    summary:
      "Injured coal miner Simon Turner pursues legal action against BHP and four other defendants in the NSW Supreme Court without legal representation, in a David-versus-Goliaths battle over employment compensation.",
    tag: "Legal Action",
  },
  {
    title:
      "Fair Work Commission Rules Against BHP, But Ignores Wage Theft",
    source: "Michael West Media",
    author: "Stephanie Tran",
    date: "10 Jul 2025",
    url: "https://michaelwest.com.au/fair-works-commission-rules-against-bhp-but-ignore-wage-theft/",
    summary:
      "The Fair Work Commission issues a landmark ruling ordering BHP to pay 2,200 Queensland miners more under Same Job Same Pay laws, but the decision does not address historical wage theft or provide remedies for past affected workers.",
    tag: "FWC Ruling",
  },
  {
    title:
      "BHP\u2019s Big Wage Theft Unveiled \u2014 The Whistleblower and the Coal Miner",
    source: "Michael West Media",
    author: "Michael West",
    date: "19 Jan 2025",
    url: "https://michaelwest.com.au/bhp-buries-wage-theft-as-fair-work-commission-showdown-kicks-off/",
    summary:
      "Investigative reporting examines allegations of wage theft at BHP, featuring accounts from a whistleblower and a coal miner, connected to the ongoing Fair Work Commission case involving approximately $2.5 billion in disputed wages.",
    tag: "Investigation",
  },
  {
    title: "Same Job, Lame Pay: BHP and the Black Coal Wage Swindle",
    source: "Michael West Media",
    author: "Michael West",
    date: "29 Sep 2024",
    url: "https://michaelwest.com.au/same-job-lame-pay-bhp-and-the-black-coal-wage-swindle/",
    summary:
      "Coal miner Simon Turner alleges a billion-dollar wage reduction scheme orchestrated by BHP in collaboration with labour hire firms, where workers performing identical roles received substantially lower compensation.",
    tag: "Investigation",
  },
  {
    title:
      "Black Hole: CFMEU, Governments, BHP \u2014 $2.5B Worker Wage Swindle",
    source: "Michael West Media",
    author: "Michael West",
    date: "16 Jul 2024",
    url: "https://michaelwest.com.au/black-hole-cfmeu-governments-bhp-black-coal-giants-collude-in-2-5b-worker-wage-swindle/",
    summary:
      "Investigative piece examines allegations of a $2.5 billion wage theft and corruption scandal involving governments, major coal companies, and unions \u2014 an issue that has largely escaped mainstream media attention.",
    tag: "Investigation",
  },
];

const tagColors: Record<string, string> = {
  "Court Proceedings": "bg-red-50 text-red-700 border-red-200",
  "Legal Action": "bg-amber-50 text-amber-700 border-amber-200",
  "FWC Ruling": "bg-blue-50 text-blue-700 border-blue-200",
  Investigation: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function MediaPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-primary py-20 sm:py-28 text-center text-white px-6 section-glow">
        <ScrollReveal>
          <p className="text-accent text-xs uppercase tracking-widest font-semibold">
            Independent Journalism
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-4">
            Media <span className="text-amber">Coverage</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Investigative reporting on BHP labour hire practices and alleged
            wage theft against Australian coal miners.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Articles Grid ── */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Newspaper className="text-accent" size={20} />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary">
                  Michael West Media
                </h2>
                <p className="text-xs text-slate-body mt-0.5">
                  Independent investigative journalism
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {mediaArticles.map((article, index) => (
              <ScrollReveal key={article.url} delay={index * 0.06}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border border-border rounded-lg p-6 sm:p-8 card-interactive"
                >
                  {/* Top row: tag + date */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        tagColors[article.tag] || "bg-slate-50 text-slate-600 border-slate-200"
                      }`}
                    >
                      {article.tag}
                    </span>
                    <span className="text-xs text-slate-400 tabular-nums">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                    <ExternalLink
                      size={16}
                      className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                    />
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-body mt-3 leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Author */}
                  <p className="text-xs text-slate-400 mt-4">
                    By{" "}
                    <span className="font-medium text-slate-500">
                      {article.author}
                    </span>{" "}
                    &middot; {article.source}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Court document callout */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 bg-light border border-border border-l-4 border-l-accent rounded-lg p-6 sm:p-8">
              <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-3">
                Court Documents
              </p>
              <p className="text-sm text-slate-body leading-relaxed mb-4">
                Court orders and legal filings related to the BHP labour hire
                class action are available through public records.
              </p>
              <a
                href="https://www.aderolaw.com.au/wp-content/uploads/2022/02/Order-1722022-163137653-pages-3-4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                View Court Order (PDF)
                <ExternalLink size={14} />
              </a>
            </div>
          </ScrollReveal>

          {/* LinkedIn source */}
          <ScrollReveal delay={0.15}>
            <div className="mt-5 bg-white border border-border rounded-lg p-6 sm:p-8 card-interactive">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200">
                  Union Statement
                </span>
              </div>
              <a
                href="https://www.linkedin.com/posts/mining-and-energy-union_breaking-activity-7371436989210038272-jIkB"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link"
              >
                <h3 className="font-serif text-lg font-bold text-primary group-hover/link:text-accent transition-colors">
                  CFMEU Mining &amp; Energy Union Statement
                  <ExternalLink
                    size={16}
                    className="inline-block ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity -translate-y-0.5"
                  />
                </h3>
                <p className="text-sm text-slate-body mt-2 leading-relaxed">
                  The Mining and Energy Union&apos;s public statement regarding
                  the Altobelli ruling and Chandler Macleod employer
                  identification.
                </p>
                <p className="text-xs text-slate-400 mt-3">
                  LinkedIn &middot; Mining &amp; Energy Union
                </p>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-primary py-20 sm:py-28 text-center px-6 section-glow">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-bold text-white">
            Have Your Story Heard
          </h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">
            If you were affected by BHP&apos;s labour hire practices, your
            experience matters. Register confidentially.
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
