import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
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

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-24% 0px -52% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // One-word labels; the hrefs are unchanged.
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Clients", href: "#who-this-is-for" },
    { label: "Approach", href: "#approach" },
    { label: "Services", href: "#offerings" },
    { label: "Credentials", href: "#credentials" },
    { label: "Stories", href: "#testimonials" },
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

          <nav className="hidden items-center gap-6 text-[0.9375rem] lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace("#", ""))}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-ink" : "text-slate"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#3E8A99] transition-all duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(link.href.replace("#", ""));
                    }}
                    className={`flex items-center justify-between py-3 text-lg transition-colors ${
                      isActive ? "text-ink" : "text-slate"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`h-[2px] w-8 rounded-full bg-[#3E8A99] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
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