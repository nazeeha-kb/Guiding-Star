import React from 'react';

export const Credentials: React.FC = () => {
  const credentialsList = [
    {
      title: 'PCC — Professional Certified Coach',
      issuer: 'International Coaching Federation (ICF)',
      detail: 'Global credential representing hundreds of verified coaching hours, rigorous examination, and adherence to ICF ethical codes.',
    },
    {
      title: 'AIM Certified Professional Mentor',
      issuer: 'Asian Institute of Mentoring (AIM), Singapore',
      detail: 'Accredited cross-cultural mentoring qualification for executive leaders, educators, and emerging professionals.',
    },
    {
      title: 'Counselling Psychology Background',
      issuer: 'Academic Foundations',
      detail: 'Applied psychological principles informing grounded, empathetic, and evidence-informed advisory frameworks.',
    },
    {
      title: 'NLP & Transactional Analysis (TA)',
      issuer: 'Behavioral Modalities',
      detail: 'Practical frameworks for recognizing subconscious communication scripts, thought patterns, and behavioral reframing.',
    },
    {
      title: 'KHDA-Certified Educator',
      issuer: 'Dubai Knowledge and Human Development Authority',
      detail: 'Verified educator credential adhering to UAE educational, developmental, and leadership standards.',
    },
    {
      title: '12+ Years & 1,500+ Sessions',
      issuer: 'India · USA · UK · UAE',
      detail: 'A track record spanning corporate executives, educators, parents, university students, and individuals at major life crossroads.',
    },
  ];

  return (
    <section id="credentials" className="py-20 md:py-28 bg-[#EEF6F7] border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#5797A6] uppercase mb-2">
            Standards &amp; Accreditation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight mb-4">
            Professional Credentials
          </h2>
          <p className="text-base text-[#607277] font-normal leading-relaxed">
            A practice grounded in internationally accredited coaching methodology, psychological rigor, and 12+ years of verified facilitation experience.
          </p>
        </div>

        {/* Clean Editorial Credentials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {credentialsList.map((item, idx) => (
            <div
              key={idx}
              className="p-7 bg-white border border-[#DCE9EB] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5797A6] block mb-2">
                  Verified Credential
                </span>
                <h3 className="font-serif text-xl font-normal text-[#183238] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#183238] mb-3">
                  {item.issuer}
                </p>
                <p className="text-xs text-[#607277] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Boundary Statement */}
        <div className="p-6 sm:p-8 bg-white border border-[#DCE9EB]">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#183238] mb-2">
            Professional Scope &amp; Ethical Boundaries
          </h4>
          <p className="text-xs text-[#607277] leading-relaxed max-w-3xl">
            Coaching is a collaborative, goal-oriented process focused on awareness, perspective and action. It does not involve diagnosis or clinical treatment. Confidential 1-on-1 sessions are conducted in accordance with the International Coaching Federation (ICF) Code of Ethics.
          </p>
        </div>

      </div>
    </section>
  );
};
