import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EngagementThemesProps {
  onOpenBooking?: () => void;
}

export const EngagementThemes: React.FC<EngagementThemesProps> = ({ onOpenBooking }) => {
  const themes = [
    {
      title: 'Career Uncertainty',
      context: 'Professional Direction',
      description: 'Navigating plateaus, career shifts, burnout, or rethinking ambition after years on autopilot.',
    },
    {
      title: 'Emotional Equilibrium',
      context: 'Self-Awareness',
      description: 'Understanding emotional triggers, calming internal noise, and learning to respond rather than react.',
    },
    {
      title: 'Confidence & Voice',
      context: 'Personal Agency',
      description: 'Overcoming imposter anxiety, speaking with conviction in high-stakes settings, and ceasing to minimize yourself.',
    },
    {
      title: 'Leadership Capability',
      context: 'Organizational Impact',
      description: 'Developing emotional intelligence, decision-making clarity, and team leadership without losing personal integrity.',
    },
    {
      title: 'Relationship Dynamics',
      context: 'Communication & Boundaries',
      description: 'Establishing firm, respectful boundaries and having honest conversations with partners, family, or colleagues.',
    },
    {
      title: 'Major Life Transitions',
      context: 'Life Changes',
      description: 'Children leaving home, relocation across countries, retirement planning, or starting anew at any age.',
    },
    {
      title: 'Student & Academic Pathways',
      context: 'Youth Mentoring',
      description: 'Guiding adolescents and young adults through academic choices and early career questions with clarity.',
    },
  ];

  return (
    <section id="themes" className="py-20 md:py-28 bg-white border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#5797A6] uppercase mb-2">
            Engagement Themes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight mb-4">
            What people come here to work through
          </h2>
          <p className="text-base text-[#607277] font-normal leading-relaxed">
            People rarely schedule coaching when things are simple. They reach out when a situation requires objective examination, clarity, and thoughtful decisions.
          </p>
        </div>

        {/* Clean Editorial Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {themes.map((item, idx) => (
            <div
              key={idx}
              className="p-7 border border-[#DCE9EB] bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5797A6]">
                    {item.context}
                  </span>
                  <span className="text-xs font-mono text-[#607277]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#183238] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#607277] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#DCE9EB] text-[11px] text-[#607277]">
                Confidential 1-on-1 sessions
              </div>
            </div>
          ))}

          {/* Discovery Card */}
          <div className="p-7 bg-[#EEF6F7] border border-[#DCE9EB] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#183238] block mb-3">
                First Step
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#183238] mb-2">
                Unsure where your situation fits?
              </h3>
              <p className="text-xs text-[#607277] leading-relaxed">
                You do not need to diagnose or label your challenge before booking. A brief discovery call determines whether coaching is the appropriate next step.
              </p>
            </div>

            {onOpenBooking && (
              <div className="pt-4 mt-6 border-t border-[#DCE9EB]">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 text-center text-xs font-medium text-white bg-[#5797A6] hover:bg-[#467d8a] rounded-[4px] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Discretion Note */}
        <div className="p-4 border-l-2 border-[#5797A6] bg-[#EEF6F7] text-xs text-[#607277]">
          All client work is held with complete professional discretion. Client references and verified case studies are shared privately upon mutual consent.
        </div>

      </div>
    </section>
  );
};
