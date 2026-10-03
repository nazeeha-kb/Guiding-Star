import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/*
  Palette (same as Testimonials, so the two sections feel like one page):
  ink     #1F3A44  headings + questions
  muted   #5F7780  answers + secondary text
  accent  #3E8A99  soft teal
  tint    #E3F0F2  pale teal for pills + icon circles
  blush   #EBAE95  warm peach accent
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
    question: "Who is Aliya Patel?",
    answer:
      "Aliya Patel is the founder of Guiding Star Life Coaching & Mentoring Consultancy. She is a Professional Certified Coach (PCC) with the International Coaching Federation. She works privately with women at a crossroads in work, family, and self.",
  },
  {
    category: "About Aliya",
    question: "What are Aliya's qualifications and credentials?",
    answer:
      "She holds a PCC credential with the ICF, has post-graduate counselling psychology training, a diploma in integrated counselling psychology, certified Islamic marriage counselling, KHDA educator certification, and NLP coaching. In total she holds 24 professional certifications, memberships, and qualifications.",
  },
  {
    category: "Coaching",
    question: "What is coaching?",
    answer:
      "Coaching is a private, practical conversation. You look at what is happening, you get clearer, and you decide what to do next. It is not diagnosis, and it is not a script.",
  },
  {
    category: "Coaching",
    question: "How is coaching different from therapy?",
    answer:
      "Coaching does not treat mental-health conditions, and it does not diagnose. Therapy is clinical care. Coaching is for people who want clarity and a next step in life, work, or relationships. If something beyond coaching is needed, Aliya will say so.",
  },
  {
    category: "Coaching",
    question: "How does Aliya's coaching approach work?",
    answer:
      "Sessions are one-to-one. The work moves through awareness, reflection, responsibility, and change. It is a confidential conversation, not a programme of techniques.",
  },
  {
    category: "Coaching",
    question: "Can coaching help me with career or life transitions?",
    answer:
      "Yes. Career guidance, career transition, and life transitions are part of the practice, along with relationships, student mentoring, and personal growth.",
  },
  {
    category: "Coaching",
    question: "Is coaching faith-based?",
    answer:
      "Coaching is not a religious programme. If faith is part of how you make sense of life, it can be in the conversation.",
  },
  {
    category: "Sessions",
    question: "How long is a coaching session?",
    answer:
      "A discovery call is twenty minutes. The length of ongoing sessions is agreed when you begin.",
  },
  {
    category: "Sessions",
    question: "How frequently do sessions take place?",
    answer:
      "You decide together. There is no fixed package announced in advance.",
  },
  {
    category: "Sessions",
    question: "How many sessions will I need?",
    answer:
      "It depends on what you bring. Some people need a short stretch of clarity. Others stay for a longer season. You decide as you go.",
  },
  {
    category: "Sessions",
    question: "Are sessions conducted online?",
    answer:
      "Yes. Sessions are held online, including across GST, IST, GMT, and EST.",
  },
  {
    category: "Sessions",
    question: "Are coaching sessions confidential?",
    answer:
      "Yes. Sessions stay confidential, except where there is a risk of harm or a legal duty to disclose. The work follows the ICF Code of Ethics.",
  },
];

const AskCard: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`bg-[#E3F0F2] p-6 sm:p-8 ${className}`}
  >
    <p className="font-serif text-xl leading-snug text-[#1F3A44]">
      Can&rsquo;t find your question?
    </p>
    <p className="mt-2 text-sm leading-relaxed text-[#5F7780]">
      Bring it to the discovery call. It is a twenty-minute, no-pressure
      conversation to see if we are a good fit.
    </p>
    <a
      href="#contact"
      className="mt-5 inline-flex items-center bg-[#1F3A44] px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99]"
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
      className="bg-white border-b border-[#1F3A44]/10 px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Left: heading (sticks while the list scrolls on desktop) */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-lg italic text-[#3E8A99]">Questions</p>
          <h2 className="mt-3 font-serif text-[2.15rem] font-normal leading-[1.08] tracking-[-0.02em] text-[#1F3A44] sm:text-[2.7rem] md:text-[3.1rem]">
            If you are wondering.
          </h2>
          <p className="mt-5 max-w-[38ch] text-base leading-[1.7] text-[#5F7780] sm:text-lg">
            Short, honest answers. Nothing here is a sales pitch.
          </p>
          <AskCard className="mt-10 hidden lg:block" />
        </div>

        {/* Right: filters + accordion */}
        <div>
          <div
            role="tablist"
            aria-label="Filter questions by topic"
            className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          >
            {CATEGORIES.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectCategory(c)}
                  className={`shrink-0 border px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99] ${
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

          <ul className="space-y-3">
            {visible.map((item) => {
              const isOpen = openQuestion === item.question;
              const slug = item.question.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
              const panelId = `faq-panel-${slug}`;
              const buttonId = `faq-button-${slug}`;

              return (
                <li
                  key={item.question}
                  className={`border transition-all duration-200 motion-reduce:transition-none ${
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
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99] sm:px-6 sm:py-5"
                    >
                      <span className="font-serif text-[1.15rem] font-normal leading-snug text-[#1F3A44] md:text-[1.3rem]">
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center transition-colors ${
                          isOpen
                            ? "bg-[#3E8A99] text-white"
                            : "bg-[#E3F0F2] text-[#3E8A99]"
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
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
                    <div className="overflow-hidden">
                      <p className="max-w-[58ch] px-5 pb-6 text-base leading-[1.75] text-[#5F7780] sm:px-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <AskCard className="mt-10 lg:hidden" />
        </div>
      </div>
    </section>
  );
};