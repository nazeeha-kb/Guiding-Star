import React, { useState, useEffect, useRef } from "react";
import { AlertTriangle, Check, X } from "lucide-react";
import { AgreementConsent } from "./AgreementConsent.tsx";

/*
  Palette (shared with the rest of the site):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · hairline = ink at 15%
*/

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Replace with the real business number, digits only, country code first, no + or spaces.
const WHATSAPP_NUMBER = "919820872568";

const topics = [
  { id: "premarital", label: "Premarital Coaching" },
  { id: "couple", label: "Couple / Relationship Coaching" },
  { id: "career-guidance", label: "Career Guidance" },
  { id: "career-transition", label: "Career Transition" },
  { id: "student", label: "Student Mentoring" },
  { id: "women", label: "Women Mentoring" },
  { id: "growth", label: "Personal Growth" },
  { id: "transitions", label: "Life Transitions" },
];

const fieldClass =
  "w-full rounded-none border border-[#1F3A44]/20 bg-white px-4 py-3 text-base text-[#1F3A44] transition-colors focus:border-[#3E8A99] focus:outline-none focus:ring-1 focus:ring-[#3E8A99]";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function buildWhatsAppUrl(params: {
  name: string;
  email: string;
  topic: string;
  timeZone: string;
}) {
  const topicLabel = topics.find((t) => t.id === params.topic)?.label ?? params.topic;

  const message = [
    `Hi Aliya, I'd like to book a Discovery Call.`,
    ``,
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    `Focus area: ${topicLabel}`,
    `Timezone: ${params.timeZone}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState("premarital");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timeZone, setTimeZone] = useState("GST");
  const [booked, setBooked] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape to close, and keep Tab focus inside the dialog
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const items = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => {
        firstFieldRef.current?.focus();
      });
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setBooked(false);
      setAgreed(false);
      setName("");
      setEmail("");
      setSelectedTopic("premarital");
      setTimeZone("GST");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !agreed) return;

    const url = buildWhatsAppUrl({ name, email, topic: selectedTopic, timeZone });
    window.open(url, "_blank", "noopener,noreferrer");

    setBooked(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#1F3A44]/50 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[94dvh] w-full max-w-xl flex-col border-t-2 border-[#1F3A44] bg-white sm:max-h-[90dvh] sm:border sm:border-[#1F3A44]/15 sm:border-t-2 sm:border-t-[#1F3A44]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="discovery-title"
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-4 px-6 pt-7 sm:px-9 sm:pt-9">
          <div>
            <p className="font-serif text-base italic text-[#3E8A99]">
              {booked ? "One more step" : "Discovery call"}
            </p>
            <h3
              id="discovery-title"
              className="mt-1 font-serif text-[1.9rem] font-normal leading-[1.1] tracking-[-0.02em] text-[#1F3A44] sm:text-[2.2rem]"
            >
              {booked ? "Almost there." : "Book a Discovery Call"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#5F7780] transition-colors hover:text-[#1F3A44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3E8A99]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {booked ? (
          /* Confirmation */
          <div className="overflow-y-auto px-6 pb-8 pt-5 sm:px-9 sm:pb-10">
            <span className="flex h-11 w-11 items-center justify-center border border-[#3E8A99] text-[#3E8A99]">
              <Check className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="mt-6 max-w-[42ch] text-base leading-[1.75] text-[#5F7780]">
              A WhatsApp message has opened in a new tab, with your details
              already filled in. Send it when you are ready. Aliya will reply to
              confirm a time that works for {timeZone}.
            </p>
            <p className="mt-4 max-w-[42ch] text-sm leading-[1.6] text-[#5F7780]">
              Didn&apos;t see the tab open?{" "}
              <a
                href={buildWhatsAppUrl({ name, email, topic: selectedTopic, timeZone })}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#3E8A99] underline underline-offset-4 hover:text-[#1F3A44]"
              >
                Open WhatsApp manually
              </a>
              .
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 bg-[#1F3A44] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8A99]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            {/* Scrolling fields */}
            <div className="min-h-0 flex-1 space-y-7 overflow-y-auto px-6 pb-6 pt-4 sm:px-9">
              <p className="max-w-[44ch] text-base leading-[1.7] text-[#5F7780]">
                Twenty minutes. Confidential. No pressure to continue.
                Submitting opens WhatsApp with your details already filled in.
                You send the message yourself.
              </p>

              {/* Focus area */}
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-[#1F3A44]">
                  What you want to focus on
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {topics.map((t) => (
                    <label
                      key={t.id}
                      className="flex cursor-pointer items-center gap-3 border border-[#1F3A44]/15 bg-white px-4 py-3 text-[0.95rem] leading-snug text-[#1F3A44] transition-colors hover:border-[#3E8A99]/60 has-[:checked]:border-[#3E8A99] has-[:checked]:bg-[#F3F9FA] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#3E8A99]"
                    >
                      <input
                        type="radio"
                        name="topic"
                        checked={selectedTopic === t.id}
                        onChange={() => setSelectedTopic(t.id)}
                        className="peer sr-only"
                      />
                      <span
                        className="h-4 w-4 shrink-0 rounded-full border border-[#1F3A44]/30 bg-white transition-colors peer-checked:border-[#3E8A99] peer-checked:bg-[#3E8A99] peer-checked:shadow-[inset_0_0_0_3px_#fff]"
                        aria-hidden="true"
                      />
                      {t.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Details */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-name" className="mb-1.5 block text-sm font-medium text-[#1F3A44]">
                    Name
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="modal-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="mb-1.5 block text-sm font-medium text-[#1F3A44]">
                    Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="modal-tz" className="mb-1.5 block text-sm font-medium text-[#1F3A44]">
                    Timezone
                  </label>
                  <select
                    id="modal-tz"
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className={fieldClass}
                  >
                    <option value="GST">GST (Dubai)</option>
                    <option value="IST">IST (India)</option>
                    <option value="GMT">GMT / BST (UK)</option>
                    <option value="EST">EST (USA)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Safety notice */}
              <div
                className="flex gap-3 border border-[#EBAE95]/60 border-l-2 border-l-[#E4795C] bg-[#FDF6F2] px-4 py-3.5"
                role="note"
              >
                <AlertTriangle
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C9694A]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div className="text-sm leading-[1.6]">
                  <p className="font-medium text-[#1F3A44]">
                    This isn&apos;t a suicide hotline.
                  </p>
                  <p className="mt-1 text-[#5F7780]">
                    For crisis or emergency mental-health support, please
                    contact your local emergency or crisis service.
                  </p>
                </div>
              </div>

              <AgreementConsent checked={agreed} onChange={setAgreed} />
            </div>

            {/* Sticky action bar, always visible on small screens */}
            <div className="shrink-0 border-t border-[#1F3A44]/15 bg-white px-6 py-4 sm:px-9 sm:py-5">
              <button
                type="submit"
                disabled={!agreed}
                className="w-full bg-[#1F3A44] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8A99] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#1F3A44] sm:w-auto"
              >
                Continue to WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};