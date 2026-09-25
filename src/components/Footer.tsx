import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const whatsappNumber = '971508421983';
  const whatsappGreeting = encodeURIComponent(
    'Hello, I came across Guiding Star and would like to inquire about coaching sessions.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappGreeting}`;

  return (
    <footer className="bg-white border-t border-[#DCE9EB] py-14 md:py-16 text-[#607277]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DCE9EB]">
          
          {/* Brand & Positioning (5 cols) */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-xl font-serif text-[#183238] mb-3"
            >
              <Logo className="w-7 h-7 shrink-0" size={28} />
              <div className="flex flex-col text-left">
                <span className="leading-tight">Guiding Star</span>
                <span className="text-[9px] tracking-widest uppercase font-sans text-[#5797A6] font-semibold">
                  Coaching &amp; People Development
                </span>
              </div>
            </a>
            <p className="text-xs leading-relaxed max-w-sm mt-1 text-[#607277]">
              A private space to understand where you are, make sense of what you need, and move forward with greater clarity. Coaching and people development for life&apos;s moments of change.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#183238] block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#183238] transition-colors">About Aliya</a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-[#183238] transition-colors">What We Work On</a>
              </li>
              <li>
                <a href="#who-i-work-with" className="hover:text-[#183238] transition-colors">Who I Work With</a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-[#183238] transition-colors">Professional Credentials</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#183238] transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#183238] transition-colors">Direct Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Socials (4 cols) */}
          <div className="md:col-span-4 text-xs space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#183238] block mb-3">
              Direct Contact
            </span>
            <p>
              <span className="text-[#607277] block text-[11px]">Direct Line:</span>
              <a href="tel:+971508421983" className="font-semibold text-[#183238] hover:text-[#5797A6] transition-colors">
                +971 50 842 1983
              </a>
            </p>
            <p>
              <span className="text-[#607277] block text-[11px]">Confidential Email:</span>
              <a href="mailto:hello@guidingstarcoaching.com" className="font-semibold text-[#183238] hover:text-[#5797A6] transition-colors">
                hello@guidingstarcoaching.com
              </a>
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#5797A6] hover:text-[#467d8a]"
              >
                <span>WhatsApp Message</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Credentials & Legal Footnote */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#607277]">
          <p>
            PCC (ICF) · AIM Certified Professional Mentor · Counselling Psychology &amp; NLP · KHDA-Certified Educator
          </p>
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} Guiding Star. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
