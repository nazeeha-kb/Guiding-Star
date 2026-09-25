import React from 'react';

export const AuthorityStrip: React.FC = () => {
  const stats = [
    {
      figure: 'PCC (ICF)',
      label: 'Professional Certified Coach',
      context: 'International Coaching Federation',
    },
    {
      figure: '12+ Years',
      label: 'People Development Experience',
      context: 'Facilitation, mentoring & guidance',
    },
    {
      figure: '1,500+',
      label: 'Coaching & Mentoring Sessions',
      context: 'Confidential 1-on-1 practice',
    },
    {
      figure: 'Global Practice',
      label: 'India · USA · UK · UAE',
      context: 'Cross-cultural advisory',
    },
  ];

  return (
    <section className="bg-[#EEF6F7] border-b border-[#DCE9EB] py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#DCE9EB]">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col text-left ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0' : idx % 2 === 1 ? 'pt-6 sm:pt-0' : ''
              } lg:px-6`}
            >
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#183238] tracking-tight mb-1">
                {item.figure}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#183238] mb-0.5">
                {item.label}
              </span>
              <span className="text-xs text-[#607277]">
                {item.context}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
