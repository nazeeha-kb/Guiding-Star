import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  context: string;
  category: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        "I came to this workshop expecting a checklist for marriage. I left with a mirror. I learned to pause instead of react, to choose connection over correction. This wasn't pre-marriage counseling — it was pre-life counseling.",
      author: "Rumaisa Nazir",
      context: "Pre-Marital Coaching Participant",
      category: "Relationships & Self-Awareness",
    },
    {
      id: 2,
      quote:
        "I'm feeling really great, happy, and having fun in life. Even my health improved within days. Your words when we spoke made me really change my way — it was deep and impactful, though it hurt me at first to hear.",
      author: "Zohra Altaf",
      context: "Mississauga, Ontario · 1:1 Coaching",
      category: "Emotional Wellbeing",
    },
    {
      id: 3,
      quote:
        "Your polite nature, and the way you coordinated with different professionals to guide us through health and wellbeing during Ramzan — I'm 60 plus, and this still reached me. May Allah reward all of you.",
      author: "Rehana Khan",
      context: "Pune · Ramadan Wellness Blueprint",
      category: "Wellness & Life Stage Coaching",
    },
    {
      id: 4,
      quote:
        "I am so grateful for the Ramadan Wellness Blueprint session. It was exactly what I needed — your guidance on balancing spiritual and physical wellness was completely on point.",
      author: "Farzana Khan",
      context: "Ramadan Wellness Blueprint 2026",
      category: "Wellness & Balance",
    },
    {
      id: 5,
      quote:
        "I would like to sincerely thank you for such a meaningful and insightful session. The way you explained how our intentions and consistency shape everything we do was especially inspiring.",
      author: "Fazzilat Shah",
      context: "Workshop Participant",
      category: "Mindset & Intention",
    },
    {
      id: 6,
      quote:
        "It was really nice talking to you. What you are doing is so appreciated — it will help many people. Talking to you, I felt genuinely happy and good afterward.",
      author: "Farida Doctor",
      context: "Career Coaching Session",
      category: "Career Clarity",
    },
    {
      id: 7,
      quote:
        "You cleared all my doubts like a friend, and I understood your way of explaining things so well. What stood out most is that you truly understand what young people are going through.",
      author: "Arisha Fatima",
      context: "Youth Mentoring Session",
      category: "Confidence & Direction",
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
        "After a lot of apprehension, I finally gathered the courage to reach out — and you are truly a blessing. Your words are like an invisible hug that made me feel like someone finally has my back.",
      author: "Anonymous",
      context: "Private Coaching Client",
      category: "Emotional Support",
    },
  ];

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

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white border-b border-[#DCE9EB]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18 pb-6 border-b border-[#DCE9EB]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-[#5797A6] uppercase mb-2">
              Client Reflections
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight">
              Testimonials
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#607277] max-w-sm font-normal leading-relaxed">
            Shared with permission. Client names are initialed to maintain
            strict personal and professional confidentiality.
          </p>
        </div>

        {/* Horizontal Editorial Carousel Container */}
        <div className="border border-[#DCE9EB] bg-[#EEF6F7]/50 p-8 sm:p-12 md:p-16 relative">
          {/* Subtle Decorative Quote Icon */}
          <div className="mb-6 sm:mb-8 text-[#5797A6]/30">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          {/* Active Testimonial Quote */}
          <div className="min-h-[180px] sm:min-h-[160px] md:min-h-[140px] flex flex-col justify-between mb-8 sm:mb-12">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#183238] font-normal leading-relaxed tracking-tight transition-opacity duration-300">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Client Details & Controls Strip */}
          <div className="pt-6 border-t border-[#DCE9EB] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {/* Author Attribution */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-serif text-lg sm:text-xl text-[#183238] font-medium">
                  {current.author}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5797A6] bg-white border border-[#DCE9EB] px-2.5 py-0.5 rounded-[3px]">
                  {current.category}
                </span>
              </div>
              <p className="text-xs text-[#607277]">{current.context}</p>
            </div>

            {/* Navigation Controls & Slide Index */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Subtle Slide Indicator */}
              <div className="text-xs font-mono text-[#607277] select-none tracking-wider">
                <span className="font-medium text-[#183238]">
                  0{currentIndex + 1}
                </span>
                <span className="mx-1 text-[#DCE9EB]">/</span>
                <span>0{testimonials.length}</span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-2.5 bg-white border border-[#DCE9EB] hover:border-[#5797A6] text-[#183238] hover:text-[#5797A6] rounded-[4px] transition-colors active:bg-[#EEF6F7]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 bg-white border border-[#DCE9EB] hover:border-[#5797A6] text-[#183238] hover:text-[#5797A6] rounded-[4px] transition-colors active:bg-[#EEF6F7]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicator Bar at bottom of card */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DCE9EB]">
            <div
              className="h-full bg-[#5797A6] transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Ethical Confidentiality Notice */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#607277]">
          <p>
            Coaching sessions are 1-on-1 and strictly confidential. References
            are available upon mutual agreement.
          </p>
          <a
            href="#contact"
            className="text-[#5797A6] hover:underline font-medium inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Inquire about sessions</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
