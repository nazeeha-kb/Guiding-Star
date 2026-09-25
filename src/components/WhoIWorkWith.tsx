import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WhoIWorkWithProps {
  onOpenBooking: () => void;
}

export const WhoIWorkWith: React.FC<WhoIWorkWithProps> = ({ onOpenBooking }) => {
  const groups = [
    {
      title: 'Women navigating change',
      context: 'When life looks fine, but feels unsettled',
      description: 'Make room for your own identity, goals, and voice.',
    },
    {
      title: 'Professionals & leaders',
      context: 'When work asks more of you',
      description: 'Build confidence and perspective for high-stakes decisions.',
    },
    {
      title: 'Students & young adults',
      context: 'When the next choice feels important',
      description: 'Find grounded direction for education and early career decisions.',
    },
    {
      title: 'People at a crossroads',
      context: 'When the old way no longer fits',
      description: 'Work through a transition, a relationship shift, or a new beginning.',
    },
    {
      title: 'Individuals & couples',
      context: 'When a relationship needs attention',
      description: 'Explore communication, boundaries, and recurring patterns with care.',
    },
  ];

  return (
    <section id="who-i-work-with" className="py-24 md:py-32 bg-white border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-[#5797A6] mb-2">
            Is this for you?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight mb-4">
            Different seasons. Different questions.
          </h2>
          <p className="text-lg text-[#4d6267] font-normal leading-[1.7]">
            You do not need a perfect question. You only need a situation you are ready to look at honestly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 border-t border-[#DCE9EB] pt-2 mb-12">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="py-8 border-b border-[#DCE9EB] flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-semibold text-[#5797A6] block mb-2">
                  {group.context}
                </span>

                <h3 className="text-2xl font-serif font-normal text-[#183238] mb-3">
                  {group.title}
                </h3>

                <p className="text-base text-[#4d6267] leading-[1.7] mb-6 font-normal">
                  {group.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE9EB] flex items-center justify-between">
                <span className="text-sm text-[#607277]">Private 1-on-1 work</span>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#183238] hover:text-[#5797A6] transition-colors"
                >
                  <span>Start a conversation</span>
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
