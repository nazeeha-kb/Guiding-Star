import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const THRESHOLD = 48;

    const handleScroll = () => {
      setScrolled(window.scrollY > THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Who This Is For", href: "#who-this-is-for" },
    { label: "Approach", href: "#approach" },
    { label: "Offerings", href: "#offerings" },
    { label: "Credentials", href: "#credentials" },
    { label: "Voices", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ease-out motion-reduce:transition-none ${
          scrolled
            ? "border-line/70 bg-paper/95 backdrop-blur-[2px]"
            : "border-transparent bg-paper/35 backdrop-blur-[1px]"
        }`}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a href="#hero-section" className="flex min-w-0 items-center gap-2.5">
            <Logo className="h-7 w-7 shrink-0" size={28} />
            <span className="font-serif text-[1.35rem] leading-none text-ink">
              Guiding Star
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-[0.9375rem] text-slate lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-quiet py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn-cta hidden !px-4 !py-2.5 sm:inline-flex"
            >
              Book a Discovery Call
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Overlay sits under the header and does not push the page down. */}
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-line bg-paper px-5 py-5 shadow-[0_12px_24px_-16px_rgba(24,50,56,0.25)] lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-lg text-ink"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-cta mt-4 w-full"
              >
                Book a Discovery Call
              </button>
            </nav>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-ink/25 lg:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
};