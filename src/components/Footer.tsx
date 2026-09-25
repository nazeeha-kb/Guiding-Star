import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line bg-paper px-5 py-12 text-sm text-slate sm:px-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <a href="#hero-section" className="inline-flex items-center gap-2.5 text-ink">
          <Logo className="h-6 w-6 shrink-0" size={24} />
          <span className="font-serif text-xl leading-none">Guiding Star</span>
        </a>
        <div className="flex flex-col gap-2 sm:items-end">
          <p>PCC (ICF) · AIM Certified Mentor</p>
          <p>© {new Date().getFullYear()} Guiding Star</p>
        </div>
      </div>
    </footer>
  );
};
