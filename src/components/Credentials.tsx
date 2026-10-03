import React from "react";
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/*
  Palette (shared with Approach, FAQ, Testimonials + WhoIWorkWith):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · tint #E3F0F2 · hairline = ink at 15%
  Tiles are always white or ink, so they stay distinct from the
  section background whatever shade "mist" is.

  Five tiles in all. Laptop layout: three across, then a narrow + a wide row.
*/

interface TileProps {
  label: string;
  icon: LucideIcon;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ label, icon: Icon, dark, className = "", children }) => (
  <div
    className={`flex flex-col border p-6 sm:p-7 ${
      dark
        ? "border-[#1F3A44] bg-[#1F3A44] shadow-[0_18px_40px_-20px_rgba(31,58,68,0.55)]"
        : "border-[#1F3A44]/15 bg-white shadow-[0_1px_2px_rgba(31,58,68,0.06),0_14px_30px_-18px_rgba(31,58,68,0.28)]"
    } ${className}`}
  >
    <div className="flex items-center justify-between gap-4">
      <p className={`font-serif text-[1.05rem] italic ${dark ? "text-[#9CCBD5]" : "text-[#3E8A99]"}`}>
        {label}
      </p>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center ${
          dark ? "bg-white/10 text-[#9CCBD5]" : "bg-[#E3F0F2] text-[#2F7381]"
        }`}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </div>
    {children}
  </div>
);

/* A stack of entries separated by hairlines */
const Entries: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <ul className={`mt-5 divide-y divide-[#1F3A44]/10 ${className}`}>{children}</ul>
);

const Entry: React.FC<{ title: string; sub?: string }> = ({ title, sub }) => (
  <li className="py-3.5 first:pt-0 last:pb-0">
    <p className="font-serif text-[1.15rem] font-normal leading-snug text-[#1F3A44]">{title}</p>
    {sub && <p className="mt-1 text-[0.9rem] leading-[1.6] text-[#5F7780]">{sub}</p>}
  </li>
);

export const Credentials: React.FC = () => {
  return (
    <section
      id="credentials"
      className="border-t border-[#1F3A44]/10 bg-mist px-5 py-16 sm:px-8 md:py-20 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid items-end gap-5 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-serif text-lg italic text-[#3E8A99]">Credentials</p>
            <h2 className="mt-2 font-serif text-[2.2rem] font-normal leading-[1.05] tracking-[-0.025em] text-[#1F3A44] sm:text-[2.7rem]">
              Credentials and experience
            </h2>
          </div>
          <div className="max-w-[54ch] text-[0.95rem] leading-[1.75] text-[#5F7780] sm:text-base lg:pb-1">
            <p>Enough to trust the person in the chair, not a full CV.</p>
            <p className="mt-2">
              Coaching is collaborative and focused on awareness and action. It
              does not involve diagnosis or clinical treatment, and one-to-one
              sessions follow the ICF Code of Ethics.
            </p>
          </div>
        </div>

        {/* Bento */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-9 lg:grid-cols-12 lg:gap-5">
          {/* 1. Accreditation */}
          <Tile dark label="Accreditation" icon={BadgeCheck} className="md:col-span-2 lg:col-span-4">
            <p className="mt-7 font-serif text-[4rem] font-normal leading-none tracking-[-0.03em] text-white">
              PCC
            </p>
            <p className="mt-4 max-w-[28ch] text-[0.95rem] leading-[1.65] text-white/80">
              Professional Certified Coach, International Coaching Federation
            </p>
            <p className="mt-auto border-t border-white/15 pt-4 text-[0.9rem] leading-[1.6] text-white/70 lg:mt-6">
              24 professional certifications, memberships, and qualifications in total.
            </p>
          </Tile>

          {/* 2. Mentoring and education */}
          <Tile label="Mentoring and education" icon={GraduationCap} className="lg:col-span-4">
            <Entries>
              <Entry
                title="AIM Certified Professional Mentor"
                sub="Asian Institute of Mentoring, Singapore"
              />
              <Entry
                title="KHDA-Certified Educator"
                sub="Dubai Knowledge and Human Development Authority"
              />
            </Entries>
          </Tile>

          {/* 3. Counselling and methods */}
          <Tile label="Counselling and methods" icon={BookOpen} className="lg:col-span-4">
            <Entries>
              <Entry title="Post-graduate counselling psychology" />
              <Entry title="Diploma in Integrated Counselling Psychology" />
              <Entry title="Certified Islamic marriage counselling" />
              <Entry title="NLP and Transactional Analysis" />
            </Entries>
          </Tile>

          {/* 4. Practice */}
          <Tile label="Trusted By" icon={Briefcase} className="md:col-span-2 lg:col-span-4">
            <p className="mt-5 font-serif text-[1.3rem] font-normal leading-[1.5] text-[#1F3A44]">
              BetterUp, TaskHuman, Mindtales, My Muslim Mentor, and Guiding Star.
            </p>
          </Tile>

          {/* 5. Community and recognition */}
          <Tile
            label="Community and recognition"
            icon={HeartHandshake}
            className="md:col-span-2 lg:col-span-8"
          >
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
              <Entries>
                <Entry title="Association of Muslim Professionals" />
                <Entry title="NOVABLISS Education Welfare Social Trust" />
                <Entry title="Antarang Foundation" />
              </Entries>
              <Entries>
                <Entry title="Master X Global Summit 2025" />
                <Entry title="People Development Ambassador representing India" />
              </Entries>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
};