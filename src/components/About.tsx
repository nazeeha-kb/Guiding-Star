import React from "react";

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="bg-paper px-5 py-14 sm:px-8 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-12 md:gap-12 lg:gap-20">

        {/* Portrait column */}
        {/* Portrait column */}
<div className="md:col-span-5 md:pt-1">
  <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem] md:mx-0 md:w-full md:max-w-[22rem] lg:max-w-[26rem]">
    {/* Offset panel — same device as the hero, for consistency */}
    <div
      className="absolute -bottom-4 -right-4 h-full w-full bg-[#3D7A88] hidden sm:block"
      aria-hidden="true"
    />

    <img
      src="/coach-portrait.jpeg"
      alt="Portrait of Aliya, Guiding Star coach"
      className="relative aspect-[4/5] w-full border border-[#DCE9EB] bg-white object-cover object-top"
    />

    {/* Stat as a typographic moment — qualitative, not numeric, since
        AuthorityStrip immediately follows and owns the figures */}
    <div className="absolute -bottom-6 -left-5 sm:-bottom-7 sm:-left-7 max-w-[9.5rem] border border-[#DCE9EB] bg-paper px-4 py-3 sm:px-5 sm:py-4">
      <p className="font-serif text-2xl leading-none text-ink sm:text-3xl">PCC</p>
      <p className="mt-1.5 text-xs leading-snug text-slate">
        ICF-credentialed coach
      </p>
    </div>
  </div>
</div>

        {/* Text column */}
        <div className="mt-10 md:col-span-7 md:mt-0 md:pt-0 lg:pt-2">
          <h2 className="max-w-[13ch] font-serif text-[1.85rem] font-normal leading-[1.1] text-ink sm:text-[2.35rem] md:text-4xl lg:text-5xl">
            The coach who has lived the questions.
          </h2>

          {/* Lead line pulled out as a quote-weight statement */}
          <div className="mt-6 flex gap-3 sm:mt-8">
            <span className="mt-1 w-px shrink-0 self-stretch bg-[#5797A6]" aria-hidden="true" />
            <p className="max-w-[38ch] font-serif text-lg italic leading-[1.6] text-ink sm:text-xl">
              Aliya helps women decide what comes next when the familiar way
              forward no longer fits.
            </p>
          </div>

          <div className="mt-6 max-w-[42ch] space-y-4 text-base leading-[1.7] text-slate sm:mt-7 sm:text-lg">
            <p>
              Marriage, motherhood, and supporting her specially-abled sister
              taught her how much careful guidance can change a life. At 46,
              she became a student again.
            </p>
            <p>
              The work is accredited coaching, held with counselling
              psychology — a confidential conversation, not a script.
            </p>
          </div>

          <div className="mt-8 border-t border-[#DCE9EB] pt-5 sm:mt-10 sm:pt-6">
            <p className="mb-2 text-sm text-slate">Trusted by teams at</p>
            <p className="max-w-[46ch] text-sm leading-relaxed text-slate">
              BetterUp, TaskHuman, My Muslim Mentor and Mindtales UAE — plus
              pro-bono coaching for 300+ people during COVID-19.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="btn-cta mt-8 w-full sm:mt-10 sm:w-auto"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};