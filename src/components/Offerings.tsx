import React from "react";

interface OfferingsProps {
  onOpenBooking: () => void;
}

export const Offerings: React.FC<OfferingsProps> = ({ onOpenBooking }) => {
  const focusAreas = [
    {
      title: "Emotional wellbeing",
      description:
        "Make sense of what you feel — anxiety, numbness, or a quiet unrest you cannot yet name — and learn to respond with more choice instead of the same well-worn reaction.",
    },
    {
      title: "Career and life direction",
      description:
        "Find perspective when work, ambition, or identity is changing, so the next step is a decision you can stand behind rather than a guess made under pressure.",
    },
    {
      title: "Relationships and communication",
      description:
        "Build clearer boundaries and have the conversations that matter, whether you are navigating marriage, family, or the patterns that keep repeating between you and the people you love.",
    },
    {
      title: "Leadership and people development",
      description:
        "Strengthen confidence, emotional intelligence, and professional impact when the role asks more of you than a title can carry on its own.",
    },
  ];

  return (
    <section id="offerings" className="bg-white md:bg-paper px-5 py-20 sm:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-serif text-4xl font-normal leading-[1.05] text-ink md:text-5xl">
          What we can work on
        </h2>
        <p className="mt-4 max-w-[42ch] text-lg leading-[1.65] text-slate">
          Coaching with Aliya is a focused, confidential conversation:
          understand what is happening, then decide what to do next.
        </p>

        <ul className="mt-14 md:mt-16">
          {focusAreas.map((item, idx) => (
            <li
              key={item.title}
              className={`group grid gap-4 border-t border-line py-10 transition-colors md:grid-cols-12 md:gap-10 md:py-12 ${
                idx === focusAreas.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="md:col-span-4">
                {/* Short accent rule — echoes the vertical rule used in About */}
                <span className="mb-4 block h-px w-8 bg-[#5797A6] transition-[width] duration-300 group-hover:w-14" />
                <h3 className="font-serif text-[1.85rem] font-normal leading-[1.15] text-ink md:text-[2rem]">
                  {item.title}
                </h3>
              </div>
              <p className="max-w-[48ch] text-lg leading-[1.65] text-slate md:col-span-8">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[44ch] text-base leading-[1.65] text-slate">
            She also offers career guidance and mentoring for students and
            young adults facing educational choices, adjustment, and early
            professional decisions.
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="btn-cta shrink-0 self-start sm:self-auto"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};