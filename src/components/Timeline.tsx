"use client";

import { useEffect, useRef } from "react";

const timelineEvents = [
  {
    year: "2010+",
    title: "Casual Classification Begins",
    desc: "BHP and labour hire firms begin systematically classifying coal miners as 'casuals' in breach of the Black Coal Award, which prohibits casual employment of coal miners.",
  },
  {
    year: "2014–2015",
    title: "CFMEU Files Against Chandler Macleod",
    desc: "The CFMEU files in the Fair Work Commission against Chandler Macleod for illegal casual employment under the Black Coal Award. A side deal is struck. Enterprise Agreements that failed the Better Off Overall Test (BOOT) are approved.",
  },
  {
    year: "Dec 2015",
    title: "Simon Turner's Injury",
    desc: "Turner breaks his back at BHP's Mt Arthur coal mine. He is told not to report it. BHP sacks him two days later, marking his separation as a 'resignation'. He discovers he was classified as an office worker and paid a fraction of his entitlements.",
  },
  {
    year: "2017",
    title: "Altobelli Ruling: True Employer Identified",
    desc: "Judge Altobelli rules in the Federal Court that Chandler Macleod (ABN 052) — not Ready Workforce — was the true employer. This ruling is later concealed from subsequent proceedings.",
  },
  {
    year: "2018",
    title: "Class Action Filed",
    desc: "Turner leads a class action against BHP and Chandler Macleod on behalf of 1,200+ workers at Mt Arthur mine. Multiple additional class actions are in the pipeline covering Queensland mines.",
  },
  {
    year: "2020–2022",
    title: "Class Action Derailed",
    desc: "The Altobelli ruling is not submitted to Justice Michael Lee. Turner's own lawyers insert Ready Workforce as first defendant — a company that never paid his wages or super. The class action is discontinued in 2022.",
  },
  {
    year: "Jan 2025",
    title: "Same Job Same Pay Hearings Begin",
    desc: "The Fair Work Commission begins hearing BHP's challenge to the Same Job Same Pay laws. BHP deploys five major law firms. Documents are suppressed from public view.",
  },
  {
    year: "Jul 2025",
    title: "Landmark FWC Ruling",
    desc: "The FWC orders BHP to pay 2,200 Queensland miners ~$30,000 more annually — confirming the labour hire model was a rort. But the laws are not retrospective. Past victims remain uncompensated.",
  },
  {
    year: "2025–Now",
    title: "Turner Returns to Court",
    desc: "Simon Turner, self-represented, takes on BHP in the Federal Court. BHP obtains suppression orders to hide evidence. The fight for historical justice continues.",
    isActive: true,
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
                  className={`bg-white border rounded-lg p-6 shadow-sm max-w-md card-interactive ${
                    isActive
                      ? "border-amber/40 shadow-amber/10"
                      : "border-border"
                  }`}
                >
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
