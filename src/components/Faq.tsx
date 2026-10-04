import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/*
  Palette (shared with Approach, Offerings, Credentials, Testimonials + WhoIWorkWith):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · tint #E3F0F2 · wash #F3F9FA
  hairline = ink at 10-15%
*/

const CATEGORIES = ["All", "About Aliya", "Coaching", "Sessions"] as const;
type Category = (typeof CATEGORIES)[number];

interface FaqItem {
  question: string;
  answer: string;
  category: Exclude<Category, "All">;
}

const faqs: FaqItem[] = [
  {
    category: "About Aliya",
    question: "Who am I?",
    answer:
      "Aliya Patel is the founder of Guiding Star Life Coaching & Mentoring Consultancy. She holds a PCC credential through the International Coaching Federation and supports youth and women navigating change in work, family, relationships, and personal development.",
  },
  {
    category: "About Aliya",
    question: "What are your credentials?",
    answer:
      "Aliya holds a PCC credential through the ICF and a PG in Counselling Psychology, along with a Diploma in Integrated Counselling Psychology. Her certifications include Certified Islamic Counselor (Levels 1 & 2), Certified Islamic Marriage Counselor (Level 1), Certified NLP Practitioner, and Certified Transactional Analysis 101. She supports youth and women navigating change.",
  },
  {
    category: "Coaching",
    question: "What is coaching?",
    answer:
      "Coaching is a focused, collaborative process that helps you gain clarity, notice patterns, and move forward with more intention. It is practical, personal, and shaped around your context.",
  },
  {
    category: "Coaching",
    question: "How is coaching different from therapy?",
    answer:
      "Coaching is not therapy or diagnosis. It is a reflective space for clarity, direction, and action. Therapy is clinical support. Coaching is for growth, decision-making, and personal development.",
  },
  {
    category: "Coaching",
    question: "What is your approach to coaching?",
    answer:
      "The process is focused and collaborative. We begin with awareness, then reflect on what is happening, and move into practical choices that feel aligned to your life. Faith can be part of the conversation when it feels relevant.",
  },
  {
    category: "Coaching",
    question: "What methods may inform your work?",
    answer:
      "Depending on your goals, sessions may draw on CBT, REBT, Transactional Analysis, and basic NLP. These frameworks can support reflection on thought patterns, communication, and practical next steps; the methods used are shaped around your needs.",
  },
  {
    category: "Coaching",
    question: "Do you offer faith-based coaching?",
    answer:
      "Yes. Faith can be woven into the process naturally, especially when it supports your decision-making, values, and sense of purpose. The work remains practical and grounded in your real life.",
  },
  {
    category: "Sessions",
    question: "How long is a session?",
    answer:
      "Sessions are online and are typically one hour long.",
  },
  {
    category: "Sessions",
    question: "Do you offer packages?",
    answer:
      "Yes, flexible packages are available. The structure is tailored to your goals, your season of life, and the pace that feels sustainable for you.",
  },
  {
    category: "Sessions",
    question: "Are online sessions available?",
    answer:
      "Yes. Sessions are offered online, one to one, so the work can be consistent and accessible no matter where you are based.",
  },
  {
    category: "Sessions",
    question: "Is coaching confidential?",
    answer:
      "Yes, absolutely. Sessions are confidential and held in a respectful space. The only exceptions are situations involving risk or legal obligations, which are explained clearly at the start.",
  },
];

const AskCard: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`border border-[#3E8A99]/20 bg-[#E3F0F2] p-6 sm:p-8 ${className}`}>
    <p className="font-serif text-[1.35rem] leading-snug text-[#1F3A44]">
      Can&rsquo;t find your question?
    </p>
    <p className="mt-2.5 text-[0.95rem] leading-[1.7] text-[#5F7780]">
      Bring it to the discovery call. It is a twenty-minute, no-pressure
      conversation to see if we are a good fit.
    </p>
    <a
      href="#contact"
      className="mt-6 inline-flex w-full items-center justify-center bg-[#1F3A44] px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99] sm:w-auto"
    >
      Book a discovery call
    </a>
  </div>
);

export const Faq: React.FC = () => {
  const [category, setCategory] = useState<Category>("All");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqs[0].question,
  );

  const visible =
    category === "All" ? faqs : faqs.filter((f) => f.category === category);

  const selectCategory = (c: Category) => {
    setCategory(c);
    const first = (c === "All" ? faqs : faqs.filter((f) => f.category === c))[0];
    setOpenQuestion(first ? first.question : null);
  };

  return (
    <section
      id="faq"
      className="border-b border-[#1F3A44]/10 bg-white px-5 py-16 sm:px-8 md:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Left: heading (sticks while the list scrolls on desktop) */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-lg italic text-[#3E8A99]">Questions</p>
          <h2 className="mt-3 font-serif text-[2.2rem] font-normal leading-[1.08] tracking-[-0.02em] text-[#1F3A44] sm:text-[2.7rem] md:text-[3.1rem]">
            If you are wondering.
          </h2>
          <p className="mt-4 max-w-[38ch] text-base leading-[1.7] text-[#5F7780] sm:mt-5 sm:text-lg">
            Short, honest answers. Nothing here is a sales pitch.
          </p>
          <AskCard className="mt-10 hidden lg:block" />
        </div>

        {/* Right: filters + accordion */}
        <div>
          {/* Filters wrap onto a second line on small screens, so nothing scrolls sideways */}
          <div
            role="group"
            aria-label="Filter questions by topic"
            className="mb-7 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectCategory(c)}
                  className={`border px-4 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99] ${
                    active
                      ? "border-[#3E8A99] bg-[#3E8A99] text-white"
                      : "border-[#1F3A44]/15 bg-white text-[#1F3A44] hover:border-[#3E8A99] hover:bg-[#E3F0F2]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <ul className="space-y-3 sm:space-y-3.5">
            {visible.map((item) => {
              const isOpen = openQuestion === item.question;
              const slug = item.question.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
              const panelId = `faq-panel-${slug}`;
              const buttonId = `faq-button-${slug}`;

              return (
                <li
                  key={item.question}
                  className={`border transition-colors duration-200 motion-reduce:transition-none ${
                    isOpen
                      ? "border-[#3E8A99]/40 border-l-2 border-l-[#3E8A99] bg-[#F3F9FA]"
                      : "border-[#1F3A44]/10 bg-white hover:border-[#3E8A99]/40"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-[1.125rem] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99] sm:gap-5 sm:px-6 sm:py-5"
                    >
                      <span className="font-serif text-[1.1rem] font-normal leading-[1.35] text-[#1F3A44] md:text-[1.3rem]">
                        {item.question}
                      </span>
                      {/* Plain chevron on phones, square tile from sm up */}
                      <span
                        className={`flex shrink-0 items-center justify-center text-[#3E8A99] transition-colors sm:h-8 sm:w-8 ${
                          isOpen ? "sm:bg-[#3E8A99] sm:text-white" : "sm:bg-[#E3F0F2]"
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 motion-reduce:transition-none sm:h-4 sm:w-4 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div
                      className={`overflow-hidden transition-[visibility] duration-200 ${
                        isOpen ? "visible" : "invisible"
                      }`}
                    >
                      <p className="max-w-[58ch] px-5 pb-6 text-[0.95rem] leading-[1.8] text-[#5F7780] sm:px-6 sm:pb-7 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <AskCard className="mt-12 lg:hidden" />
        </div>
      </div>
    </section>
  );
};