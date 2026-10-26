import React from "react";

/*
  Palette (shared with Testimonials, FAQ, Approach + Offerings):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · tint #F3F9FA · hairline = ink at 15%
*/

const groups = [
  {
    title: "Personal",
    description:
      "Understand your emotions, navigate them with greater care, and create space for personal growth, clarity, and more intentional choices.",
  },
  {
    title: "Relationships",
    description:
      "Build resilience and emotional clarity, respond with intention, and strengthen the relationships that matter to you.",
  },
  {
    title: "Family and life changes",
    description:
      "Navigate family roles, relationship shifts, and life transitions while adapting emotionally and growing through change.",
  },
];

export const WhoIWorkWith: React.FC = () => {
  return (
    <section
      id="who-this-is-for"
      className="overflow-hidden border-t border-[#1F3A44]/10 bg-white px-5 py-16 sm:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:items-stretch xl:gap-16">
        {/* Left: statement + image */}
        <div>
          <p className="font-serif text-lg italic text-[#3E8A99]">
            Who this is for
          </p>
          <h2 className="mt-3 max-w-[14ch] font-serif text-[2.4rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[3rem] xl:max-w-none xl:text-[3.25rem]">
            Youth and women
          </h2>
          <p className="mt-5 max-w-[44ch] text-base leading-[1.7] text-[#5F7780] sm:text-lg">
            For youth and women navigating relationships, identity, family,
            career, work, and self-development. You do not need a tidy question
            before you write.
          </p>

          <div className="relative mt-10 max-w-[22rem] sm:max-w-[26rem] xl:max-w-none">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 border border-[#3E8A99]/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] bg-[#E8EEF0] xl:aspect-[4/3]">
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
        <div className="xl:flex xl:flex-col">
          <ul className="border-t border-[#1F3A44] xl:flex xl:flex-1 xl:flex-col">
            {groups.map((item) => (
              <li
                key={item.title}
                className="-mx-4 grid gap-2 border-b border-[#1F3A44]/15 px-4 py-6 transition-colors duration-200 hover:bg-[#F3F9FA] motion-reduce:transition-none md:grid-cols-[12rem_1fr] md:gap-8 md:py-7 xl:flex-1 xl:content-center"
              >
                <h3 className="font-serif text-[1.5rem] font-normal leading-tight text-[#1F3A44] md:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="max-w-[46ch] text-base leading-[1.7] text-[#5F7780] sm:pt-1.5">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};