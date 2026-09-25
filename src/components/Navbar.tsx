import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'What We Work On', href: '#offerings' },
    { label: 'Who I Work With', href: '#who-i-work-with' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white shadow-xs border-b border-[#DCE9EB] py-3.5'
            : 'bg-white/90 backdrop-blur-xs border-b border-[#DCE9EB]/60 py-4 md:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 min-w-0"
          >
            <Logo
              className="w-7 h-7 sm:w-8 sm:h-8 transition-opacity duration-200 group-hover:opacity-85 shrink-0"
              size={30}
            />
            <div className="flex flex-col text-left min-w-0">
              <span className="font-serif font-normal text-xl sm:text-2xl text-[#183238] tracking-tight leading-none">
                Guiding Star
              </span>
              <span className="text-[10px] tracking-widest uppercase font-sans text-[#5797A6] font-medium mt-1">
                Coaching &amp; People Development
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#607277]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#183238] transition-colors py-1 relative"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Group (Moderate radius, never pill) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#5797A6] hover:bg-[#467d8a] active:bg-[#3d6d78] rounded-[4px] transition-colors whitespace-nowrap"
            >
              Book a Discovery Call
            </button>

            {/* Mobile / Tablet Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#183238] hover:text-[#5797A6] rounded-[4px] transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#DCE9EB] px-6 py-6 shadow-md animate-in fade-in duration-150">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-2 text-sm font-medium text-[#183238] hover:text-[#5797A6] hover:bg-[#EEF6F7] rounded-[4px] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#607277]" />
                </a>
              ))}
              
              <div className="pt-4 mt-3 border-t border-[#DCE9EB]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 px-4 text-center text-xs font-medium text-white bg-[#5797A6] hover:bg-[#467d8a] rounded-[4px] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-center text-[11px] text-[#607277] mt-2">
                  Confidential 1-on-1 sessions
                </p>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Screen Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-xs lg:hidden z-40"
          aria-hidden="true"
        />
      )}
    </>
  );
};
