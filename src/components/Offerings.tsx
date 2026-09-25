import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface OfferingsProps {
  onOpenBooking: () => void;
}

export const Offerings: React.FC<OfferingsProps> = ({ onOpenBooking }) => {
  const focusAreas = [
    {
      number: '01',
      title: 'Emotional Wellbeing',
      subtitle: 'Awareness & Stability',
      description:
        'Understanding your emotions, patterns and responses so you can navigate life with greater awareness, resilience and stability.',
    },
    {
      number: '02',
      title: 'Career & Life Direction',
      subtitle: 'Clarity on Next Steps',
      description:
        'For moments when you’re reconsidering your work, identity, goals or next chapter — making sense of what aligns with where you are now.',
    },
    {
      number: '03',
      title: 'Relationships & Communication',
      subtitle: 'Boundaries & Honest Dialogue',
      description:
        'Developing healthier communication, personal boundaries and emotional awareness in partnerships, family, and professional relationships.',
    },
    {
      number: '04',
      title: 'Leadership & People Development',
      subtitle: 'Executive & Team Impact',
      description:
        'Building self-confidence, emotional intelligence and leadership capability for professional growth and workplace challenges.',
    },
  ];

  return (
    <section id="offerings" className="py-20 md:py-28 bg-[#EEF6F7] border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#DCE9EB]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-[#5797A6] uppercase mb-2">
              Practice Focus
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight">
              What we can work on
            </h2>
          </div>
          <p className="text-sm text-[#607277] max-w-md font-normal leading-relaxed">
            Coaching offers a confidential, structured space to examine where you are, gain objective perspective, and decide deliberate steps forward.
          </p>
        </div>

        {/* Editorial Numbered Rows */}
        <div className="divide-y divide-[#DCE9EB] border-b border-[#DCE9EB] mb-16">
          {focusAreas.map((item) => (
            <div
              key={item.number}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              {/* Oversized Number */}
              <div className="md:col-span-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#5797A6] font-normal">
                  {item.number}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="md:col-span-4">
                <h3 className="text-2xl font-serif text-[#183238] font-normal mb-1">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-[#607277] uppercase tracking-wider">
                  {item.subtitle}
                </span>
              </div>

              {/* Description & Action */}
              <div className="md:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-[#607277] leading-relaxed max-w-lg font-normal">
                  {item.description}
                </p>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#183238] hover:text-[#5797A6] transition-colors shrink-0 group-hover:translate-x-0.5 duration-150"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Section for Students & Young Adults */}
        <div className="bg-white border border-[#DCE9EB] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5797A6] block mb-1">
              Mentoring &amp; Career Guidance
            </span>
            <h3 className="text-2xl font-serif text-[#183238] font-normal mb-2">
              For students and young adults
            </h3>
            <p className="text-sm text-[#607277] leading-relaxed">
              Career guidance, 1-on-1 mentoring, and psychometric assessments to help students and early-career professionals make informed, grounded decisions about educational pathways and next steps.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-3 text-xs font-medium text-white bg-[#183238] hover:bg-[#2C3E45] rounded-[4px] transition-colors whitespace-nowrap shrink-0"
          >
            Inquire for Youth Mentoring
          </button>
        </div>

      </div>
    </section>
  );
};
