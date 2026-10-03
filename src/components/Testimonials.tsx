import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  context: string;
  category: string;
}

/*
  Palette (shared with the other sections):
  ink     #1F3A44  headings + quotes
  muted   #5F7780  secondary text
  accent  #3E8A99  soft teal: label, dots, links, buttons
  tint    #E3F0F2  pale teal for the avatar
  blush   #EBAE95  warm peach for the quote mark
*/

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        "I came to this workshop expecting a checklist for marriage. I left with a mirror. I learned to pause instead of react, to choose connection over correction. This wasn't pre-marriage counseling, it was pre-life counseling.",
      author: "Rumaisa Nazir",
      context: "Pre-Marital Coaching Participant",
      category: "Relationships & Self-Awareness",
    },
    {
      id: 2,
      quote:
        "I'm feeling really great, happy, and having fun in life. Even my health improved within days. Your words when we spoke made me really change my way. It was deep and impactful, though it hurt me at first to hear.",
      author: "Zohra Altaf",
      context: "Mississauga, Ontario · 1:1 Coaching",
      category: "Emotional Wellbeing",
    },
    {
      id: 8,
      quote:
        "I learnt so much about emotional patterns, communication, compatibility, and breaking unrealistic expectations. It gave me real direction and self-awareness I didn't have before.",
      author: "Anonymous",
      context: "Pre-Marital Workshop Participant",
      category: "Relationships & Communication",
    },
    {
      id: 9,
      quote:
        "She was the one who helped me get out of the trauma I was in. She's empathetic enough to truly understand what you're going through. By the grace of God, I started healing within weeks.",
      author: "Anonymous",
      context: "Instagram Community Member",
      category: "Healing & Emotional Recovery",
    },
    {
      id: 10,
      quote:
        "After a lot of apprehension, I finally gathered the courage to reach out, and you are truly a blessing. Your words are like an invisible hug that made me feel like someone finally has my back.",
      author: "Anonymous",
      context: "Private Coaching Client",
      category: "Emotional Support",
    },
    {
      id: 11,
      quote:
        "She has a rare ability to see potential in people before they see it in themselves. Aliya helped me navigate academic pressure, career decisions, and figuring out my next step. She listened, understood where I was coming from, and helped me find my own answers.",
      author: "Umme Atiya",
      context: "Client · June 2026",
      category: "Mentoring & Career Direction",
    },
    {
      id: 12,
      quote:
        "Aliya excels in creating a supportive and empowering environment. Her ability to ask the right questions and provide actionable feedback has been instrumental in helping me overcome challenges and reach my goals.",
      author: "Anosha Aasif",
      context: "Client · August 2024",
      category: "Personal Growth",
    },
    {
      id: 13,
      quote:
        "Aliya has been an invaluable member of the AIM community. Her passion and enthusiasm for supporting others, especially young people, on their life and career journey through mentoring and coaching shines through.",
      author: "Yen-Lu Chow",
      context: "Executive Chairman, WholeTree Foundation · AIM Community",
      category: "Mentoring & Professional Impact",
    },
    {
      id: 14,
      quote:
        "The coaching I received from Mrs Patel has benefited me well. She has helped me reflect and realise where I must make improvements. Life coaching is something everyone must at least try.",
      author: "Hamzah Ali Khan",
      context: "Client · August 2021",
      category: "Reflection & Personal Growth",
    },
  ];

  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta < 0) handleNext();
    else handlePrev();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const current = testimonials[currentIndex];
  const initial = current.author === "Anonymous" ? "♡" : current.author.charAt(0);

  return (
    <section
      id="testimonials"
      className="border-b border-[#1F3A44]/10 bg-paper px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 font-serif text-lg italic text-[#3E8A99]">
            In their own words
          </p>
          <h2 className="mb-5 font-serif text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-[#1F3A44] sm:text-4xl md:text-5xl">
            Kind words from people I&rsquo;ve had the honour of guiding
          </h2>
          <p className="text-sm leading-relaxed text-[#5F7780]">
            Shared with permission. Some names are kept private to protect
            confidentiality.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative border border-[#1F3A44]/15 border-t-2 border-t-[#1F3A44] bg-white/80 px-6 py-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8A99] sm:px-12 sm:py-14 md:px-16"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <Quote
            className="mb-5 h-8 w-8 text-[#EBAE95] sm:mb-6 sm:h-10 sm:w-10"
            strokeWidth={1.5}
            aria-hidden="true"
          />

          {/* All quotes share one grid cell, so the card keeps the height of
              the longest one and nothing jumps when you change slides. */}
          <div className="mb-8 grid sm:mb-10" aria-live="polite">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.id}
                aria-hidden={i !== currentIndex}
                className={`col-start-1 row-start-1 font-serif text-[1.15rem] italic leading-[1.65] text-[#1F3A44] transition-opacity duration-300 motion-reduce:transition-none sm:text-2xl sm:leading-[1.6] md:text-[1.7rem] ${
                  i === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {t.quote}
              </blockquote>
            ))}
          </div>

          {/* Author + controls */}
          <div className="flex items-center justify-between gap-4 border-t border-[#1F3A44]/10 pt-6">
            <div className="flex min-w-0 items-center gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#E3F0F2] font-serif text-lg text-[#3E8A99] sm:h-12 sm:w-12"
                aria-hidden="true"
              >
                {initial}
              </div>
              <div className="min-w-0">
                <p className="font-serif text-lg leading-tight text-[#1F3A44]">
                  {current.author}
                </p>
                <p className="mt-0.5 text-xs text-[#5F7780]">
                  {current.context}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center border border-[#1F3A44]/20 text-[#1F3A44] transition-colors hover:border-[#1F3A44] hover:bg-[#1F3A44] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center border border-[#1F3A44] bg-[#1F3A44] text-white transition-colors hover:border-[#3E8A99] hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Theme of this story */}
          <p className="mt-6 text-xs text-[#3E8A99]">
            <span className="border border-[#3E8A99]/30 bg-[#E3F0F2] px-3 py-1 font-medium">
              {current.category}
            </span>
          </p>
        </div>

        {/* Progress bars (tall tap targets, thin visuals) */}
        <div className="mt-6 flex items-center justify-center">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
              aria-current={i === currentIndex}
              className="group flex h-8 items-center px-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3E8A99]"
            >
              <span
                className={`block h-[3px] transition-all duration-300 motion-reduce:transition-none ${
                  i === currentIndex
                    ? "w-8 bg-[#3E8A99]"
                    : "w-4 bg-[#1F3A44]/20 group-hover:bg-[#3E8A99]/50 sm:w-5"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Confidentiality note */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#1F3A44]/15 pt-6 text-xs text-[#5F7780] sm:flex-row sm:items-center">
          <p className="max-w-[60ch]">
            Coaching sessions are 1-on-1 and strictly confidential. References
            are available upon mutual agreement.
          </p>
          <a
            href="#contact"
            className="self-start font-medium text-[#3E8A99] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99] sm:self-auto"
          >
            Book a conversation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};