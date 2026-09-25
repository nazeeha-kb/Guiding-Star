import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AgreementConsent } from "./AgreementConsent.tsx";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Replace with the real business number, digits only, country code first, no + or spaces.
const WHATSAPP_NUMBER = "919820872568";

const topics = [
  { id: "emotional", label: "Emotional wellbeing" },
  { id: "career", label: "Career and direction" },
  { id: "relationships", label: "Relationships" },
  { id: "leadership", label: "Leadership" },
  { id: "student", label: "Student mentoring" },
];

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
  const [selectedTopic, setSelectedTopic] = useState("emotional");
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

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
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
      setSelectedTopic("emotional");
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
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col border-t-[5px] border-teal bg-paper sm:border sm:border-line sm:border-t-[5px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="discovery-title"
      >
        <div className="flex shrink-0 items-start justify-between px-6 pt-6 sm:px-8 sm:pt-8">
          <h3 id="discovery-title" className="font-serif text-3xl font-normal text-ink">
            {booked ? "Almost there." : "Book a Discovery Call"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1.5 -mt-1.5 shrink-0 p-1.5 text-slate hover:text-ink"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
          {booked ? (
            <>
              <p className="mt-2 max-w-[40ch] text-base leading-[1.65] text-slate">
                A WhatsApp message has opened in a new tab, pre-filled with your
                details. Just hit send — Aliya will reply directly to confirm a
                time that works for {timeZone}.
              </p>
              <p className="mt-4 max-w-[40ch] text-sm leading-[1.6] text-slate">
                Didn't see the tab open?{" "}
                <a
                  href={buildWhatsAppUrl({ name, email, topic: selectedTopic, timeZone })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2 hover:text-[#3D7A88]"
                >
                  Open WhatsApp manually
                </a>
                .
              </p>
              <button type="button" onClick={onClose} className="btn-cta mt-8">
                Close
              </button>
            </>
          ) : (
            <>
              <p className="mt-2 max-w-[40ch] text-base leading-[1.65] text-slate">
                Twenty minutes. Confidential. No pressure to continue. Submitting
                opens WhatsApp with your details pre-filled — you send the message
                yourself.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <fieldset>
                  <legend className="mb-2 text-sm text-ink">What you want to focus on</legend>
                  <div className="flex flex-col gap-2">
                    {topics.map((t) => (
                      <label key={t.id} className="flex cursor-pointer items-center gap-2 text-base text-slate">
                        <input
                          type="radio"
                          name="topic"
                          checked={selectedTopic === t.id}
                          onChange={() => setSelectedTopic(t.id)}
                          className="accent-teal"
                        />
                        {t.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="modal-name" className="mb-1.5 block text-sm text-ink">
                    Name
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="modal-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-line bg-paper px-3.5 py-2.5 text-base text-ink focus:border-teal focus:outline-hidden"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="mb-1.5 block text-sm text-ink">
                    Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-line bg-paper px-3.5 py-2.5 text-base text-ink focus:border-teal focus:outline-hidden"
                  />
                </div>
                <div>
                  <label htmlFor="modal-tz" className="mb-1.5 block text-sm text-ink">
                    Timezone
                  </label>
                  <select
                    id="modal-tz"
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="w-full border border-line bg-paper px-3.5 py-2.5 text-base text-ink focus:border-teal focus:outline-hidden"
                  >
                    <option value="GST">GST — Dubai</option>
                    <option value="IST">IST — India</option>
                    <option value="GMT">GMT / BST — UK</option>
                    <option value="EST">EST — USA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <AgreementConsent checked={agreed} onChange={setAgreed} />

                <button
                  type="submit"
                  disabled={!agreed}
                  className="btn-cta w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                >
                  Continue to WhatsApp
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};