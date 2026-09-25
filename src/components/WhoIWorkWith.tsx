import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WhoIWorkWithProps {
  onOpenBooking: () => void;
}

export const WhoIWorkWith: React.FC<WhoIWorkWithProps> = ({ onOpenBooking }) => {
  const groups = [
    {
      title: 'Women navigating change',
      context: 'Transitions & Personal Priorities',
      description:
        'When life looks fine from the outside but something inside feels unsettled. Making deliberate room for your own identity, goals, and voice after years of tending to everyone else.',
    },
    {
      title: 'Professionals & leaders',
      context: 'Workplace & Executive Focus',
      description:
        'For confidence, emotional intelligence, leadership style, imposter anxiety, and managing high-stakes organizational and career decisions.',
    },
    {
      title: 'Students & young adults',
      context: 'Education & Career Direction',
      description:
        'For career direction, mentoring, psychometric assessment, and making informed, confident choices about higher education and entering the workforce.',
    },
    {
      title: 'People at a crossroads',
      context: 'Pivots & Key Decisions',
      description:
        'Career transitions, relationship dynamics, identity shifts, or simply figuring out what comes next when past routines no longer serve where you are going.',
    },
  ];

  return (
    <section id="who-i-work-with" className="py-20 md:py-28 bg-white border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#5797A6] uppercase mb-2">
            Client Practice
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight mb-4">
            Different seasons. Different questions.
          </h2>
          <p className="text-base text-[#607277] font-normal leading-relaxed">
            Coaching is tailored to where you currently stand. Engagements are focused, confidential, and structured around your specific situation.
          </p>
        </div>

        {/* 2x2 Clean Architectural Grid with thin dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#DCE9EB] pt-10 mb-12">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="p-8 border border-[#DCE9EB] bg-white flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5797A6] block mb-2">
                  {group.context}
                </span>

                <h3 className="text-2xl font-serif font-normal text-[#183238] mb-3">
                  {group.title}
                </h3>

                <p className="text-sm text-[#607277] leading-relaxed mb-6 font-normal">
                  {group.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE9EB] flex items-center justify-between">
                <span className="text-xs text-[#607277]">1-on-1 engagement</span>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#183238] hover:text-[#5797A6] transition-colors"
                >
                  <span>Discuss fit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
