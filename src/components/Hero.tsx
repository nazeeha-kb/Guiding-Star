import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import heroMoment from '../assets/images/hero_editorial_moment_1790346987641.jpg';

interface HeroProps {
  onBeginJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBeginJourney }) => {
  return (
    <section id="hero-section" className="relative pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 bg-white border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 w-full">
        
        {/* Asymmetric 60/40 Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Focus (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Subtle Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#5797A6] rounded-full" />
              <p className="text-xs font-semibold tracking-widest uppercase text-[#5797A6]">
                Be with the change
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-normal text-[#183238] leading-[1.08] tracking-tight mb-5 text-balance">
              It&apos;s not too late to{' '}
              <span className="italic text-[#5797A6] font-normal block sm:inline">
                choose yourself.
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-[#607277] leading-relaxed max-w-xl mb-8 font-normal">
              A private space to understand where you are, make sense of what you need, and move forward with greater clarity.
            </p>

            {/* Action Group: Crisp moderate radius */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onBeginJourney}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium text-white bg-[#5797A6] hover:bg-[#467d8a] active:bg-[#3d6d78] rounded-[4px] transition-colors"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#offerings"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-xs font-medium text-[#183238] hover:text-[#5797A6] border border-[#DCE9EB] hover:border-[#5797A6] rounded-[4px] transition-colors"
              >
                <span>Explore the work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#607277]" />
              </a>
            </div>

            {/* Thin Horizontal Divider & Credibility Strip */}
            <div className="pt-6 border-t border-[#DCE9EB] w-full">
              <p className="text-xs font-semibold text-[#183238] tracking-wide mb-1">
                PCC (ICF) · 12+ Years Experience · 1,500+ Sessions · India &amp; International
              </p>
              <p className="text-xs text-[#607277]">
                People Development &amp; Counselling Psychology Professional · Confidential 1-on-1 sessions
              </p>
            </div>

          </div>

          {/* Right Column: Architectural Photography (5 cols) */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative border border-[#DCE9EB] bg-white p-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EEF6F7]">
                <img
                  src={heroMoment}
                  alt="A contemplative client seated in quiet natural light"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[1.02]"
                />
              </div>

              {/* Minimal Editorial Caption */}
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-[#607277]">
                <span className="font-serif italic text-sm text-[#183238]">
                  &ldquo;Seen before you are advised.&rdquo;
                </span>
                <span className="text-[11px] tracking-wider uppercase text-[#5797A6]">
                  Guiding Star Practice
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
