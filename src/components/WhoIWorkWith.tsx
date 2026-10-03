import React from "react";

/*
  Palette (shared with Testimonials, FAQ, Approach + Offerings):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · tint #F3F9FA · hairline = ink at 15%
*/

interface WhoIWorkWithProps {
  onOpenBooking: () => void;
}

const groups = [
  { title: "Career", description: "When work asks a new question of you, or the path you are on no longer fits." },
  { title: "Family", description: "When the roles you hold at home leave little room for your own voice." },
  { title: "Relationships", description: "When a partnership, marriage, or a repeating pattern needs honest attention." },
  { title: "Identity", description: "When who you have been and who you are becoming no longer line up." },
  { title: "Personal growth", description: "When you want to feel steadier, clearer, and more able to choose." },
  { title: "Life transitions", description: "When a chapter is ending, or waiting to begin, and the next step is unclear." },
];

export const WhoIWorkWith: React.FC<WhoIWorkWithProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="who-this-is-for"
      className="overflow-hidden border-t border-[#1F3A44]/10 bg-white px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* Left: statement + image */}
        <div>
          <p className="font-serif text-lg italic text-[#3E8A99]">Who this is for</p>
          <h2 className="mt-4 max-w-[14ch] font-serif text-[2.4rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[3rem] md:text-[3.5rem]">
            When life looks fine from the outside.
          </h2>
          <p className="mt-6 max-w-[36ch] text-base leading-[1.75] text-[#5F7780] sm:text-lg">
            And something in you knows it is not. Women in the middle of
            career, family, relationships, identity, study, and change. You do
            not need a tidy question before you write.
          </p>

          <div className="relative mt-12 max-w-[22rem] sm:max-w-[26rem] lg:mt-14 lg:max-w-none">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 border border-[#3E8A99]/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] bg-[#E8EEF0]">
              <img
                src="/hijabi-coach-with-client.jpg"
                alt="A coach and a client in quiet conversation"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </div>
          </div>
        </div>

        {/* Right: list */}
        <div>
          <ul className="border-t border-[#1F3A44]">
            {groups.map((item) => (
              <li
                key={item.title}
                className="-mx-4 grid gap-2 border-b border-[#1F3A44]/15 px-4 py-6 transition-colors duration-200 hover:bg-[#F3F9FA] motion-reduce:transition-none sm:grid-cols-[11rem_1fr] sm:gap-8 sm:py-8"
              >
                <h3 className="font-serif text-[1.5rem] font-normal leading-tight text-[#1F3A44] md:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="max-w-[40ch] text-base leading-[1.75] text-[#5F7780] sm:pt-1.5">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onOpenBooking}
            className="mt-10 w-full bg-[#1F3A44] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8A99] sm:w-auto"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};