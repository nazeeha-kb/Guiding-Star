import React from "react";

/*
  Palette (shared with Testimonials + FAQ):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · hairline = ink at 15%
*/

interface OfferingsProps {
  onOpenBooking: () => void;
}

interface FocusGroup {
  label: string;
  items: { title: string; description: string }[];
}

const groups: FocusGroup[] = [
  {
    label: "Relationships",
    items: [
      {
        title: "Premarital Coaching",
        description:
          "Prepare for marriage with clearer talk, realistic expectations, and a shared sense of what actually matters.",
      },
      {
        title: "Couple / Relationship Coaching",
        description:
          "Look at the repeating patterns, the boundaries, and the conversations you keep putting off.",
      },
    ],
  },
  {
    label: "Work and direction",
    items: [
      {
        title: "Career Guidance",
        description:
          "Find your feet when work, ambition, or identity is shifting and the next step is not yet clear.",
      },
      {
        title: "Career Transition",
        description:
          "Move through a change of role, industry, or chapter without rushing, and without abandoning what still matters.",
      },
    ],
  },
  {
    label: "Mentoring",
    items: [
      {
        title: "Student Mentoring",
        description:
          "Help with educational choices, confidence, and early professional decisions when the next step feels too large.",
      },
      {
        title: "Women Mentoring",
        description:
          "A private space for women holding family, work, identity, and change, and wanting a bit more steadiness.",
      },
    ],
  },
];

export const Offerings: React.FC<OfferingsProps> = ({ onOpenBooking }) => {
  return (
    <section id="offerings" className="bg-paper px-5 py-20 sm:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-12">
          <p className="text-sm text-[#3E8A99]">What we can work on</p>
          <h2 className="max-w-[20ch] font-serif text-[2.3rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[3rem] md:text-[3.5rem]">
            The chapters people actually bring.
          </h2>
        </div>

        {/* Bands */}
        <div className="mt-14 border-t border-[#1F3A44] md:mt-20">
          {groups.map((group) => (
            <div
              key={group.label}
              className="grid gap-8 border-b border-[#1F3A44]/15 py-10 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-12 lg:py-14"
            >
              <h3 className="font-serif text-2xl font-normal text-[#1F3A44] lg:text-[1.75rem]">
                {group.label}
              </h3>

              <div className="grid gap-10 sm:grid-cols-2 sm:gap-0">
                {group.items.map((item, i) => (
                  <article
                    key={item.title}
                    className={
                      i === 1
                        ? "sm:border-l sm:border-[#1F3A44]/15 sm:pl-10"
                        : "sm:pr-10"
                    }
                  >
                    <h4 className="font-serif text-[1.4rem] font-normal leading-snug text-[#1F3A44] md:text-[1.55rem]">
                      {item.title}
                    </h4>
                    <p className="mt-3 max-w-[38ch] text-base leading-[1.75] text-[#5F7780]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking */}
        <div className="mt-16 grid gap-8 bg-[#1F3A44] px-7 py-10 text-white sm:px-10 md:mt-20 md:grid-cols-[1fr_auto] md:items-center md:px-14 md:py-14">
          <div>
            <p className="max-w-[24ch] font-serif text-[1.75rem] font-normal leading-[1.15] sm:text-[2.1rem]">
              Not sure where your question fits?
            </p>
            <p className="mt-4 max-w-[44ch] text-base leading-[1.7] text-white/70">
              A discovery call is twenty minutes. If we continue, we decide the
              shape of the work together.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="self-start bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-[#1F3A44] transition-colors hover:bg-[#BFE0E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:self-auto"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};