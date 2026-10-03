import React from "react";

/*
  Palette (shared with Approach, FAQ, Testimonials + WhoIWorkWith):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · tint #E3F0F2 · hairline = ink at 15%
*/

interface TileProps {
  label: string;
  title?: string;
  className?: string;
  tone?: "white" | "ink" | "tint";
  children?: React.ReactNode;
}

const tones = {
  white: "border-[#1F3A44]/10 bg-white",
  tint: "border-[#3E8A99]/20 bg-[#E3F0F2]",
  ink: "border-[#1F3A44] bg-[#1F3A44]",
};

const Tile: React.FC<TileProps> = ({ label, title, className = "", tone = "white", children }) => {
  const dark = tone === "ink";
  return (
    <div className={`flex flex-col border p-6 sm:p-7 ${tones[tone]} ${className}`}>
      <p className={`font-serif text-base italic ${dark ? "text-[#9CCBD5]" : "text-[#3E8A99]"}`}>
        {label}
      </p>
      {title && (
        <h3
          className={`mt-3 font-serif text-[1.35rem] font-normal leading-snug md:text-[1.5rem] ${
            dark ? "text-white" : "text-[#1F3A44]"
          }`}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

const Note: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-2 text-sm leading-[1.65] text-[#5F7780] sm:text-base">{children}</p>
);

const Chips: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="mt-5 flex flex-wrap gap-2">
    {items.map((item) => (
      <li
        key={item}
        className="border border-[#1F3A44]/15 bg-white px-3.5 py-1.5 text-sm text-[#1F3A44]"
      >
        {item}
      </li>
    ))}
  </ul>
);

export const Credentials: React.FC = () => {
  // Replace the bracketed items with verified titles before publishing.
  const counselling = [
    "Counselling psychology academic background",
    "[Post-graduate counselling psychology — add verified title]",
    "[Diploma in Integrated Counselling Psychology — add verified title]",
    "[Islamic marriage counselling credential — add verified title]",
  ];

  return (
    <section
      id="credentials"
      className="border-t border-[#1F3A44]/10 bg-mist px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <p className="font-serif text-lg italic text-[#3E8A99]">Credentials</p>
            <h2 className="mt-4 max-w-[14ch] font-serif text-[2.4rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[3rem] md:text-[3.5rem]">
              Credentials and experience
            </h2>
          </div>
          <p className="max-w-[44ch] text-base leading-[1.75] text-[#5F7780] sm:text-lg lg:pb-2">
            Enough to trust the person in the chair, not a full CV.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {/* Feature */}
          <Tile
            tone="ink"
            label="Accreditation"
            className="justify-between sm:col-span-2 lg:col-span-5 lg:row-span-2"
          >
            <div className="mt-16 lg:mt-24">
              <p className="font-serif text-[4.5rem] font-normal leading-none tracking-[-0.03em] text-white sm:text-[6rem]">
                PCC
              </p>
              <p className="mt-5 max-w-[26ch] text-base leading-[1.65] text-white/75 sm:text-lg">
                Professional Certified Coach, International Coaching Federation
              </p>
            </div>
          </Tile>

          <Tile
            label="Mentoring"
            title="AIM Certified Professional Mentor"
            className="lg:col-span-4"
          >
            <Note>Asian Institute of Mentoring, Singapore</Note>
          </Tile>

          <Tile tone="tint" label="In total" className="justify-between lg:col-span-3">
            <p className="mt-6 font-serif text-[3.5rem] font-normal leading-none text-[#1F3A44]">
              24
            </p>
            <Note>certifications, memberships, and qualifications</Note>
          </Tile>

          <Tile
            label="Education"
            title="KHDA-Certified Educator"
            className="lg:col-span-4"
          >
            <Note>Dubai Knowledge and Human Development Authority</Note>
          </Tile>

          <Tile label="Methods" title="NLP and Transactional Analysis" className="lg:col-span-3" />

          {/* Counselling */}
          <Tile
            label="Counselling psychology"
            title="Academic foundation"
            className="sm:col-span-2 lg:col-span-5"
          >
            <ul className="mt-4 space-y-2.5 text-sm leading-[1.65] text-[#5F7780] sm:text-base">
              {counselling.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-[0.6em] h-1 w-1 shrink-0 bg-[#3E8A99]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Tile>

          {/* Practice */}
          <Tile
            label="Practice"
            title="Platforms I have coached on"
            className="sm:col-span-2 lg:col-span-7"
          >
            <Chips
              items={["BetterUp", "TaskHuman", "Mindtales", "My Muslim Mentor", "Guiding Star"]}
            />
          </Tile>

          {/* Community */}
          <Tile label="Community" title="Giving back" className="lg:col-span-6">
            <Chips
              items={[
                "Association of Muslim Professionals",
                "NOVABLISS Education Welfare Social Trust",
                "Antarang Foundation",
              ]}
            />
          </Tile>

          <Tile label="Recognition" title="On stage" className="lg:col-span-6">
            <Chips
              items={[
                "Master X Global Summit 2025",
                "People Development Ambassador representing India",
              ]}
            />
          </Tile>

          {/* Ethics note */}
          <p className="border border-[#1F3A44]/10 border-l-2 border-l-[#3E8A99] bg-white/60 px-6 py-5 text-sm leading-[1.7] text-[#5F7780] sm:col-span-2 sm:px-7 sm:text-base lg:col-span-12">
            Coaching is a collaborative process focused on awareness and action.
            It does not involve diagnosis or clinical treatment. Confidential
            one-to-one sessions follow the ICF Code of Ethics.
          </p>
        </div>
      </div>
    </section>
  );
};