import React from "react";
import { Compass, Heart, Sprout, type LucideIcon } from "lucide-react";

/*
  Palette (shared with Approach, FAQ, Credentials, Testimonials + WhoIWorkWith):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · deep teal #2F7381
  tint #E3F0F2 · wash #F3F9FA · hairline = ink at 15%
*/

interface OfferingsProps {
  onOpenBooking: () => void;
}

interface FocusGroup {
  label: string;
  icon: LucideIcon;
  items: { title: string; description: string }[];
}

const groups: FocusGroup[] = [
  {
    label: "Relationships",
    icon: Heart,
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
    icon: Compass,
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
    icon: Sprout,
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
    <section
      id="offerings"
      className="border-t border-[#1F3A44]/10 bg-white px-5 py-16 sm:px-8 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid items-end gap-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <div>
            <p className="font-serif text-lg italic text-[#3E8A99]">What we can work on</p>
            <h2 className="mt-3 max-w-[18ch] font-serif text-[2.2rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[3rem] md:text-[3.5rem]">
              The chapters people actually bring.
            </h2>
          </div>
          <p className="max-w-[36ch] text-base leading-[1.75] text-[#5F7780] sm:text-lg lg:pb-2">
            Six places to begin. If yours is not here, bring it anyway.
          </p>
        </div>

        {/* Group cards */}
        <div className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-3 lg:gap-6">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.label}
                className="flex flex-col border border-[#1F3A44]/20 bg-white shadow-[0_1px_2px_rgba(31,58,68,0.06),0_14px_30px_-18px_rgba(31,58,68,0.28)]"
              >
                <div className="flex items-center gap-3.5 border-b border-[#3E8A99]/20 bg-[#E3F0F2] px-6 py-5 sm:px-7">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-[#2F7381]"
                    aria-hidden="true"
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif text-[1.5rem] font-normal leading-tight text-[#1F3A44]">
                    {group.label}
                  </h3>
                </div>

                <ul className="flex flex-1 flex-col divide-y divide-[#1F3A44]/10 px-6 sm:px-7">
                  {group.items.map((item) => (
                    <li key={item.title} className="flex-1 py-6 sm:py-7">
                      <h4 className="font-serif text-[1.3rem] font-normal leading-snug text-[#1F3A44] md:text-[1.4rem]">
                        {item.title}
                      </h4>
                      <p className="mt-2.5 text-[0.95rem] leading-[1.75] text-[#5F7780] sm:text-base">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Booking */}
        <div className="mt-10 grid gap-7 border-t-2 border-t-[#3E8A99] bg-[#1F3A44] px-6 py-9 text-white sm:px-10 md:mt-14 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:px-14 md:py-12">
          <div>
            <p className="max-w-[24ch] font-serif text-[1.65rem] font-normal leading-[1.15] sm:text-[2.1rem]">
              Not sure where your question fits?
            </p>
            <p className="mt-4 max-w-[44ch] text-base leading-[1.7] text-white/75">
              A discovery call is twenty minutes. If we continue, we decide the
              shape of the work together.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-[#1F3A44] transition-colors hover:bg-[#BFE0E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:w-auto"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};