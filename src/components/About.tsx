import React from 'react';
import coachPortrait from '../assets/images/coach_portrait_aliya_1790352858193.jpg';

export const About: React.FC = () => {
  const platforms = [
    { name: 'BetterUp', role: 'Executive & Wellbeing Coaching' },
    { name: 'TaskHuman', role: 'Global 1-on-1 Specialist' },
    { name: 'My Muslim Mentor', role: 'Values-Aligned Mentoring' },
    { name: 'Mindtales UAE', role: 'Regional Wellbeing Initiatives' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <p className="text-xs font-semibold tracking-widest text-[#5797A6] uppercase mb-3">
            About Aliya &amp; The Practice
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight mb-4">
            12 years of helping people find clarity, confidence and direction.
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#5797A6]">
            My work is professional. My understanding is personal.
          </p>
        </div>

        {/* Asymmetric 40/60 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-[#DCE9EB] bg-white p-2">
              <div className="aspect-[3/4] overflow-hidden bg-[#EEF6F7]">
                <img
                  src={coachPortrait}
                  alt="Portrait of Aliya — Guiding Star Coach & People Development Professional"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top contrast-[1.01]"
                />
              </div>
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-[#607277]">
                <span className="font-serif text-[#183238]">Aliya</span>
                <span>PCC (ICF) · AIM Certified Mentor</span>
              </div>
            </div>

            {/* COVID Pro-Bono Trust Note */}
            <div className="mt-6 p-5 border-l-2 border-[#5797A6] bg-[#EEF6F7]">
              <span className="text-xs font-semibold text-[#183238] block mb-1">
                COVID-19 Pro-Bono Support
              </span>
              <p className="text-xs text-[#607277] leading-relaxed">
                Provided pro-bono coaching and mentoring to <strong>300+ people</strong> during COVID-19, supporting individuals with mental wellbeing and career clarity through an unprecedented period of uncertainty.
              </p>
            </div>
          </div>

          {/* Editorial Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-[#607277] text-base leading-relaxed">
            
            <p className="text-lg text-[#183238] font-normal leading-relaxed">
              With over 12 years of experience in people development, coaching, mentoring, and counselling psychology-informed practice, Aliya works with individuals navigating major moments of change — whether career crossroads, relationship dynamics, leadership challenges, or personal realignment.
            </p>

            {/* The 46-Year-Old Human Story */}
            <div className="py-6 px-6 sm:px-8 border-y border-[#DCE9EB] bg-white space-y-3">
              <h3 className="font-serif text-2xl font-normal text-[#183238]">
                At 46, I became a student again.
              </h3>
              <p className="text-[15px] leading-relaxed">
                For years, my life revolved around my family, my work and the people who depended on me. I was grateful for that life, but I eventually had to ask myself a difficult question: <em className="text-[#183238] font-serif">what about the parts of me I hadn&apos;t explored yet?</em>
              </p>
              <p className="text-[15px] leading-relaxed">
                So at 46, I went back to studying.
              </p>
              <p className="text-[15px] leading-relaxed">
                That experience changed the way I understand transitions. Starting again doesn&apos;t always mean leaving your old life behind. Sometimes, it means finally making room for yourself within it.
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5797A6] pt-1">
                That understanding now shapes the way I work with clients.
              </p>
            </div>

            <p>
              Her approach integrates ICF-accredited coaching methodology with transactional analysis, counselling psychology principles, and neuro-linguistic programming (NLP) — grounded in clear inquiry, objective awareness, and confidential dialogue.
            </p>

            {/* Platform Experience (Typographic, no fake logos) */}
            <div className="pt-4 border-t border-[#DCE9EB]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#183238] block mb-3">
                Experience across coaching platforms &amp; wellbeing initiatives
              </span>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {platforms.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 border border-[#DCE9EB] bg-white"
                  >
                    <span className="block text-xs font-semibold text-[#183238]">
                      {p.name}
                    </span>
                    <span className="block text-[11px] text-[#607277]">
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#607277] leading-relaxed">
                Alongside her independent practice, Aliya has worked with international coaching platforms and regional wellbeing initiatives, delivering virtual coaching and mentoring across diverse cultures and professional contexts.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
