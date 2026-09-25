import React, { useEffect, useRef, useState } from "react";

// Fires once when the element enters the viewport, then stops observing.
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
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// Animates 0 → target once `start` is true. Respects reduced motion.
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
  numeric: number | null;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
}

const stats: StatItem[] = [
  {
    numeric: null,
    display: "PCC (ICF)",
    label: "Professional Certified Coach, International Coaching Federation.",
  },
  {
    numeric: 12,
    suffix: "+ years",
    label: "People development — facilitation, mentoring, and guidance.",
  },
  {
    numeric: 1500,
    suffix: "+",
    label: "Confidential coaching and mentoring sessions.",
  },
  {
    numeric: null,
    display: "Global Practice",
    label: "India, the USA, the UK, and the UAE.",
  },
];

const StatFigure: React.FC<{ item: StatItem; start: boolean }> = ({ item, start }) => {
  const count = useCountUp(item.numeric ?? 0, start && item.numeric !== null);

  if (item.numeric === null) {
    return (
      <p className="font-serif text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2rem] sm:leading-none sm:tracking-[-0.03em] md:text-[2.35rem] lg:text-[2.75rem]">
        {item.display}
      </p>
    );
  }

  return (
    <p className="font-serif text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-ink tabular-nums sm:text-[2rem] sm:leading-none sm:tracking-[-0.03em] md:text-[2.35rem] lg:text-[2.75rem]">
      {item.prefix}
      {count.toLocaleString()}
      {item.suffix}
    </p>
  );
};

export const AuthorityStrip: React.FC = () => {
  const { ref, inView } = useInView<HTMLUListElement>();

  return (
    <section id="metrics" className="bg-mist px-5 py-14 sm:px-8 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="max-w-[14ch] font-serif text-[1.85rem] font-normal leading-[1.1] text-ink sm:text-4xl md:text-5xl">
          Metrics and certifications
        </h2>
        <p className="mt-3 max-w-[38ch] text-base leading-[1.6] text-slate sm:mt-4 sm:text-lg">
          The credentials behind a private practice — not a brochure of badges.
        </p>

        <ul
          ref={ref}
          className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:mt-14 sm:gap-x-16 sm:gap-y-12"
        >
          {stats.map((item) => (
            <li key={item.label} className="max-w-[16rem] sm:max-w-[28rem]">
              <StatFigure item={item} start={inView} />
              <p className="mt-2 max-w-[22ch] text-sm leading-[1.55] text-slate sm:mt-3 sm:max-w-[32ch] sm:text-base sm:leading-[1.65]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};