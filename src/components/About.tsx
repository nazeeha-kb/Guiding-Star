import React from "react";

/*
  Palette (shared with the other sections):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · hairline = ink at 15%
  Background uses your existing `bg-mist` token, same blue as the Approach section.
*/

interface AboutProps {
  onOpenBooking: () => void;
}

const ICF_LOGO = "/ICF-logo.png";

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="about"
      className="bg-mist px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Portrait (stays in view on desktop while the story scrolls) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative mx-auto max-w-[22rem] lg:mx-0 lg:max-w-[26rem]">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 border border-[#1F3A44]/25"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] bg-white/60">
              <img
                src="/coach-portrait.jpeg"
                alt="Portrait of Aliya Patel, founder of Guiding Star"
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-[0.2rem] border border-[#1F3A44]/10 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_-18px_rgba(31,58,68,0.5)] backdrop-blur-[1px] sm:left-5 sm:right-5 sm:gap-4 sm:px-4 sm:py-3 lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-[19rem] xl:-translate-x-20 lg:translate-x-10 md:-translate-x-20 lg:translate-y-[-0.25rem]">
                {ICF_LOGO && (
                  <img
                    src={ICF_LOGO}
                    alt="International Coaching Federation"
                    className="h-9 w-auto shrink-0 rounded-sm object-contain sm:h-10"
                  />
                )}
                <p className="text-[0.6rem] font-medium leading-snug tracking-[0.12em] text-[#5F7780] uppercase sm:text-[0.65rem] lg:text-[0.68rem]">
                  PCC, International Coaching Federation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="lg:col-span-7 lg:pl-4">
          <p className="font-serif text-lg italic text-[#3E8A99]">Who I am</p>
          <h2 className="mt-3 max-w-[14ch] font-serif text-[2.3rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[3rem] md:text-[3.6rem]">
            At 38, she became a student again.
          </h2>

          <div className="mt-10 max-w-[46ch] space-y-5 text-base leading-[1.8] text-[#5F7780] sm:text-lg">
            <p className="text-[#1F3A44]">
              Aliya Patel is the founder of Guiding Star Life Coaching &amp;
              Mentoring Consultancy.
            </p>
            <p>
              She married young, became a mother early, and spent nearly two
              decades holding home, caregiving, and family business together.
            </p>
            <p>
              Somewhere in the middle of that, she started looking more closely
              at her own life. She went back to study. At 38, she became a
              student again. That decision is what opened the door to coaching
              and mentoring.
            </p>
            <p>
              She now works with youth, women, and people moving through
              personal development, relationship challenges, and life
              transitions. She has coached through BetterUp and currently works
              with My Muslim Mentors, TaskHuman, and Mindtales.
            </p>
          </div>

          <blockquote className="mt-12 max-w-[34ch] border-l-2 border-[#3E8A99] pl-6">
            <p className="mb-3 text-sm font-medium text-[#5F7780]">
              Aliya believes in:
            </p>
            <p className="font-serif text-[1.5rem] italic leading-[1.35] text-[#1F3A44] sm:text-[1.75rem]">
              &ldquo;One can edit a page, one cannot edit a blank.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-[#5F7780]">Jody Becault</footer>
          </blockquote>

          <button
            type="button"
            onClick={onOpenBooking}
            className="mt-12 w-full bg-[#1F3A44] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8A99] sm:w-auto"
          >
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};