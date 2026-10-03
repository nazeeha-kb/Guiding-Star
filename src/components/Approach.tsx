import React from "react";

/*
  Palette (shared with Testimonials, FAQ, Offerings + WhoIWorkWith):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · hairline = ink at 15%
*/

const points = [
  {
    title: "Confidential",
    description:
      "A private, one-to-one conversation, held to the International Coaching Federation Code of Ethics.",
  },
  {
    title: "Collaborative and practical",
    description:
      "We look at what is happening together, then you decide what to do next.",
  },
  {
    title: "Grounded in training",
    description:
      "The work draws on accredited coaching and counselling psychology.",
  },
  {
    title: "Coaching, not therapy",
    description:
      "No diagnosis and no clinical treatment. If something beyond coaching is needed, Aliya will say so.",
  },
];

export const Approach: React.FC = () => {
  return (
    <section
      id="approach"
      className="border-t border-[#1F3A44]/10 bg-mist px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* Left: brief */}
        <div className="lg:sticky lg:top-28">
          <p className="font-serif text-lg italic text-[#3E8A99]">Approach</p>
          <h2 className="mt-4 max-w-[12ch] font-serif text-[2.4rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[3rem] md:text-[3.5rem]">
            How the work happens
          </h2>
          <div className="mt-8 h-px w-12 bg-[#3E8A99]" aria-hidden="true" />
          <p className="mt-8 max-w-[32ch] text-base leading-[1.75] text-[#5F7780] sm:text-lg">
            A focused conversation to understand what is happening, then decide
            what to do next.
          </p>
        </div>

        {/* Right: cards on a single thin line */}
        <ol className="relative space-y-5 pl-9 sm:pl-12">
          <span
            className="absolute bottom-0 left-[4px] top-0 w-px bg-gradient-to-b from-transparent via-[#1F3A44]/25 to-transparent"
            aria-hidden="true"
          />
          {points.map((item) => (
            <li key={item.title} className="relative">
              <span
                className="absolute -left-9 top-[2.5rem] h-[9px] w-[9px] bg-[#3E8A99] ring-[6px] ring-mist sm:-left-12"
                aria-hidden="true"
              />
              <span
                className="absolute -left-[1.6rem] top-[2.75rem] h-px w-6 bg-[#3E8A99]/50 sm:-left-[2.6rem] sm:w-9"
                aria-hidden="true"
              />
              <div className="border border-white bg-white px-6 py-7 transition-colors duration-200 hover:border-[#3E8A99]/40 motion-reduce:transition-none sm:px-8">
                <h3 className="font-serif text-[1.45rem] font-normal leading-snug tracking-[-0.01em] text-[#1F3A44] md:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-base leading-[1.75] text-[#5F7780]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};