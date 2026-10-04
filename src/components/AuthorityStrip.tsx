import React, { useEffect, useRef, useState } from "react";

/*
  Palette (shared with the other sections):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · hairline = ink at 15%
*/

function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration, prefersReducedMotion]);

  return value;
}

interface StatItem {
  numeric: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { numeric: 12, suffix: "+ years", label: "in people development and mentoring" },
  { numeric: 1500, suffix: "+", label: "private one-to-one sessions" },
  { numeric: 300, suffix: "+", label: "people supported during the pandemic" },
  { numeric: 24, suffix: "+", label: "certifications, memberships, and qualifications" },
];

const StatFigure: React.FC<{ item: StatItem; start: boolean }> = ({ item, start }) => {
  const count = useCountUp(item.numeric, start);

  return (
    <p className="whitespace-nowrap font-serif leading-none text-[#1F3A44] tabular-nums">
      <span className="text-[2.3rem] tracking-[-0.03em] sm:text-[3.2rem] lg:text-[3.6rem]">
        {count.toLocaleString()}
      </span>
      <span className="ml-1 text-[1.1rem] text-[#3E8A99] sm:text-[1.6rem]">
        {item.suffix}
      </span>
    </p>
  );
};

export const AuthorityStrip: React.FC = () => {
  const { ref, inView } = useInView<HTMLUListElement>();

  return (
    <section
      id="metrics"
      className="bg-paper px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          <h2 className="max-w-[18ch] font-serif text-[2.2rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[2.9rem] md:text-[3.4rem]">
            Years of sitting with people at the hard bits.
          </h2>
          <p className="max-w-[38ch] text-base leading-[1.75] text-[#5F7780]">
            Aliya Patel brings 12+ years of experience in people development
            and mentoring, alongside her PCC credential with the International
            Coaching Federation.
          </p>
        </div>

        {/* Stats */}
        <ul
          ref={ref}
          className="mt-12 grid grid-cols-2 border-t border-[#1F3A44] lg:mt-16 lg:grid-cols-4"
        >
          {stats.map((item, i) => (
            <li
              key={item.label}
              className={`py-7 sm:py-10 ${
                i < 2 ? "border-b border-[#1F3A44]/15" : ""
              } ${
                i % 2 === 1
                  ? "border-l border-[#1F3A44]/15 pl-5 sm:pl-8"
                  : "pr-5 sm:pr-8"
              } lg:border-b-0 lg:border-l lg:border-[#1F3A44]/15 lg:px-8 lg:py-12 lg:first:border-l-0 lg:first:pl-0`}
            >
              <StatFigure item={item} start={inView} />
              <p className="mt-3 max-w-[22ch] text-[0.8rem] leading-[1.55] text-[#5F7780] sm:mt-4 sm:text-base">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="hidden border-t border-[#1F3A44]/15 lg:block" aria-hidden="true" />
      </div>
    </section>
  );
};