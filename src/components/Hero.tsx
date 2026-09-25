import React from "react";

interface HeroProps {
  onBeginJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBeginJourney }) => {
  return (
    <section id="hero-section" className="bg-paper">
      <div className="relative md:min-h-[calc(100svh-4.25rem)]">
        <div className="relative h-[min(42svh,20rem)] overflow-hidden bg-mist sm:h-[min(46svh,24rem)] md:absolute md:inset-0 md:h-auto">
          <img
            src="/two-girls.jpg"
            alt="Aliya, Guiding Star coach, photographed in natural light"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_12%] md:object-[center_18%]"
          />
        </div>

        <div className="relative md:flex md:min-h-[calc(100svh-4.25rem)] md:items-end md:px-8 md:pb-10 lg:px-12 lg:pb-14 xl:px-16">
          <div className="border-t-[3px] border-teal bg-paper px-5 py-8 shadow-[0_-6px_16px_-12px_rgba(24,50,56,0.18)] sm:px-8 sm:py-10 md:mb-2 md:w-[min(100%,26.5rem)] md:border-l-[5px] md:border-t-0 md:px-8 md:py-10 md:shadow-none lg:mb-4 lg:w-[min(100%,29rem)] lg:px-10 lg:py-12">
            <div className="hero-settle">
              <p className="mb-3 font-serif text-base leading-none text-ink sm:mb-4 sm:text-[1.2rem] md:mb-5 md:text-[1.35rem]">
                Guiding Star
              </p>
              <h1 className="max-w-[12ch] font-serif text-[2.15rem] font-normal leading-[0.98] tracking-[-0.02em] text-ink sm:text-[2.55rem] md:text-[2.85rem] lg:text-[3.35rem]">
                Clarity for what comes next.
              </h1>
              <p className="mt-4 max-w-[34ch] text-[0.9875rem] leading-[1.65] text-slate sm:mt-5 sm:text-base md:mt-6 md:text-lg">
                Private coaching for women at a crossroads in work, family, or self.
              </p>
              <button
                type="button"
                onClick={onBeginJourney}
                className="btn-cta mt-6 w-full sm:mt-8 sm:w-auto"
              >
                Book a Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-settle {
          opacity: 0;
          animation: heroTextFade 700ms ease-out 250ms forwards;
        }

        @keyframes heroTextFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-settle {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};