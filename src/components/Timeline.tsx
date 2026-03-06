"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const timelineEvents = [
  {
    year: "2010+",
    title: "Casual Classification Begins",
    desc: "BHP and labour hire firms begin systematically classifying coal miners as 'casuals' in breach of the Black Coal Award, which prohibits casual employment of coal miners.",
    sources: [
      { label: "Michael West Media", url: "https://michaelwest.com.au/fair-works-commission-rules-against-bhp-but-ignore-wage-theft/" },
      { label: "Black Coal Wage Swindle", url: "https://michaelwest.com.au/black-hole-cfmeu-governments-bhp-black-coal-giants-collude-in-2-5b-worker-wage-swindle/" },
    ],
  },
  {
    year: "2014–2015",
    title: "CFMEU Files Against Chandler Macleod",
    desc: "The CFMEU files in the Fair Work Commission against Chandler Macleod for illegal casual employment under the Black Coal Award. A side deal is struck. Enterprise Agreements that failed the Better Off Overall Test (BOOT) are approved.",
    sources: [
      { label: "Michael West Media", url: "https://michaelwest.com.au/fair-works-commission-rules-against-bhp-but-ignore-wage-theft/" },
    ],
  },
  {
    year: "Dec 2015",
    title: "Simon Turner's Injury",
    desc: "Turner breaks his back at BHP's Mt Arthur coal mine. He is told not to report it. BHP sacks him two days later, marking his separation as a 'resignation'. He discovers he was classified as an office worker and paid a fraction of his entitlements.",
    sources: [
      { label: "Same Job Lame Pay", url: "https://michaelwest.com.au/same-job-lame-pay-bhp-and-the-black-coal-wage-swindle/" },
      { label: "Judge Takes Pity on BHP", url: "https://michaelwest.com.au/judge-takes-pity-on-bhp-in-case-against-injured-coal-miner/" },
    ],
  },
  {
    year: "2017",
    title: "Altobelli Ruling: True Employer Identified",
    desc: "Judge Altobelli rules in the Federal Court that Chandler Macleod (ABN 052) — not Ready Workforce — was the true employer. This ruling is later concealed from subsequent proceedings.",
    sources: [
      { label: "BHP Buries Wage Theft", url: "https://michaelwest.com.au/bhp-buries-wage-theft-as-fair-work-commission-showdown-kicks-off/" },
      { label: "CFMEU on LinkedIn", url: "https://www.linkedin.com/posts/mining-and-energy-union_breaking-activity-7371436989210038272-jIkB" },
    ],
  },
  {
    year: "2018",
    title: "Class Action Filed",
    desc: "Turner leads a class action against BHP and Chandler Macleod on behalf of 1,200+ workers at Mt Arthur mine. Multiple additional class actions are in the pipeline covering Queensland mines.",
    sources: [
      { label: "David v The Goliaths", url: "https://michaelwest.com.au/david-v-the-goliaths-lone-coal-miner-tackles-bhp-co-in-court-over-massive-wage-theft/" },
    ],
  },
  {
    year: "2020–2022",
    title: "Class Action Derailed",
    desc: "The Altobelli ruling is not submitted to Justice Michael Lee. Turner's own lawyers insert Ready Workforce as first defendant — a company that never paid his wages or super. The class action is discontinued in 2022.",
    sources: [
      { label: "Case Muzzled", url: "https://michaelwest.com.au/case-muzzled-court-strikes-out-injured-coal-miner-backs-bhp/" },
      { label: "Court Order (PDF)", url: "https://www.aderolaw.com.au/wp-content/uploads/2022/02/Order-1722022-163137653-pages-3-4.pdf" },
    ],
  },
  {
    year: "Jan 2025",
    title: "Same Job Same Pay Hearings Begin",
    desc: "The Fair Work Commission begins hearing BHP's challenge to the Same Job Same Pay laws. BHP deploys five major law firms. Documents are suppressed from public view.",
    sources: [
      { label: "Michael West Media", url: "https://michaelwest.com.au/fair-works-commission-rules-against-bhp-but-ignore-wage-theft/" },
    ],
  },
  {
    year: "Jul 2025",
    title: "Landmark FWC Ruling",
    desc: "The FWC orders BHP to pay 2,200 Queensland miners ~$30,000 more annually — confirming the labour hire model was a rort. But the laws are not retrospective. Past victims remain uncompensated.",
    sources: [
      { label: "FWC Rules Against BHP", url: "https://michaelwest.com.au/fair-works-commission-rules-against-bhp-but-ignore-wage-theft/" },
    ],
  },
  {
    year: "2025–Now",
    title: "Turner Returns to Court",
    desc: "Simon Turner, self-represented, takes on BHP in the Federal Court. BHP obtains suppression orders to hide evidence. The fight for historical justice continues.",
    isActive: true,
    sources: [
      { label: "Judge Takes Pity on BHP", url: "https://michaelwest.com.au/judge-takes-pity-on-bhp-in-case-against-injured-coal-miner/" },
      { label: "Case Muzzled", url: "https://michaelwest.com.au/case-muzzled-court-strikes-out-injured-coal-miner-backs-bhp/" },
    ],
  },
];

export default function Timeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Vertical line — left on mobile, center on desktop */}
      <div
        ref={lineRef}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border"
      />

      <div className="flex flex-col gap-14">
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          const isActive = "isActive" in event && event.isActive;

          return (
            <div
              key={event.year}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`reveal relative flex items-start ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              {/* Dot on the line */}
              <div
                className={`absolute left-4 md:left-1/2 top-2 w-3.5 h-3.5 rounded-full border-2 border-white -translate-x-1/2 z-10 ${
                  isActive
                    ? "bg-amber timeline-dot"
                    : "bg-accent"
                }`}
              />

              {/* Spacer for the opposite side (desktop only) */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${
                  isEven ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <div
                  className={`bg-white border rounded-lg p-6 shadow-sm max-w-md card-interactive relative ${
                    isActive
                      ? "border-amber/40 shadow-amber/10"
                      : "border-border"
                  }`}
                >
                  {/* Source links — top right */}
                  {event.sources && event.sources.length > 0 && (
                    <div className="absolute top-4 right-4 flex gap-1.5">
                      {event.sources.map((source) => (
                        <a
                          key={source.url}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={source.label}
                          className="text-slate-300 hover:text-accent transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  )}

                  <p
                    className={`font-serif text-sm font-bold ${
                      isActive ? "text-amber" : "text-accent"
                    }`}
                  >
                    {event.year}
                    {isActive && (
                      <span className="inline-flex items-center ml-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
                        </span>
                      </span>
                    )}
                  </p>
                  <h3 className="font-serif text-base font-bold text-primary mt-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-body mt-2 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
