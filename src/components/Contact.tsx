import React, { useState } from "react";
import {
  Check,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Video,
  Youtube,
  type LucideIcon,
} from "lucide-react";

/*
  Palette (shared with Testimonials + FAQ):
  ink #1F3A44 · muted #5F7780 · accent #3E8A99 · tint #E3F0F2 · blush #EBAE95
*/

interface ContactProps {
  onOpenBooking: () => void;
}

const SOCIALS: { label: string; url: string; icon: LucideIcon }[] = [
  {
    label: "Instagram: Be with the Change",
    url: "https://www.instagram.com/be_with_the_change/",
    icon: Instagram,
  },
  {
    label: "Instagram: Guiding Star Life Coaching",
    url: "https://www.instagram.com/guidingstar.lifecoaching/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/aliyapatel/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@guidingstar.lifecoaching",
    icon: Youtube,
  },
];

const inputClass =
  "w-full rounded-none border border-[#1F3A44]/20 bg-white px-4 py-3 text-base text-[#1F3A44] placeholder:text-[#5F7780]/60 transition-colors focus:border-[#3E8A99] focus:outline-none focus:ring-1 focus:ring-[#3E8A99]";

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const whatsappNumber = "919820872568";
  const whatsappGreeting = encodeURIComponent(
    "Hello, I came across Guiding Star and would like to inquire about coaching sessions.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappGreeting}`;

  const socials = SOCIALS.filter((s) => s.url);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please share your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="bg-paper px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="font-serif text-lg italic text-[#3E8A99]">Contact</p>
          <h2 className="mt-3 font-serif text-[2.15rem] font-normal leading-[1.08] tracking-[-0.02em] text-[#1F3A44] sm:text-[2.7rem] md:text-[3.1rem]">
            Start here.
          </h2>
          <p className="mt-5 max-w-[40ch] text-base leading-[1.7] text-[#5F7780] sm:text-lg">
            You do not need prepared answers. A twenty-minute call is enough to
            begin.
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="mt-8 bg-[#1F3A44] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99]"
          >
            Book a Discovery Call
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-5">
            <p className="text-sm text-[#5F7780]">
              Have a question before booking?
            </p>
            <p className="mt-2 max-w-[24ch] font-serif text-[1.6rem] leading-[1.2] text-[#1F3A44]">
              Write, call, or send a WhatsApp.
            </p>

            <ul className="mt-8 border-t border-[#1F3A44]">
              <li className="border-b border-[#1F3A44]/15">
                <a
                  href="mailto:hello@guidingstarcoaching.com"
                  className="group flex items-center gap-4 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8A99]"
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#3E8A99]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm text-[#5F7780]">Email</span>
                    <span className="block break-words text-base text-[#1F3A44] transition-colors group-hover:text-[#3E8A99]">
                      hello@guidingstarcoaching.com
                    </span>
                  </span>
                </a>
              </li>
              <li className="border-b border-[#1F3A44]/15">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E8A99]"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#3E8A99]" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <span className="block text-sm text-[#5F7780]">WhatsApp</span>
                    <span className="block text-base text-[#1F3A44] transition-colors group-hover:text-[#3E8A99]">
                      +91 98208 72568
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-[#1F3A44]/15 py-5">
                <Video className="h-5 w-5 shrink-0 text-[#3E8A99]" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  <span className="block text-sm text-[#5F7780]">Sessions</span>
                  <span className="block text-base text-[#1F3A44]">
                    Online &middot; GST, IST, GMT, EST
                  </span>
                </span>
              </li>
            </ul>

            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-2">
                {socials.map(({ label, url, icon: Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-[#1F3A44]/20 text-[#1F3A44] transition-colors hover:border-[#1F3A44] hover:bg-[#1F3A44] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99]"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <div className="border border-[#1F3A44]/15 border-t-2 border-t-[#1F3A44] bg-white p-6 sm:p-10 lg:col-span-7">
            {isSubmitted ? (
              <div className="py-6" role="status">
                <span className="flex h-11 w-11 items-center justify-center border border-[#3E8A99] text-[#3E8A99]">
                  <Check className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-3xl font-normal text-[#1F3A44]">
                  Thank you, {name}.
                </h3>
                <p className="mt-3 max-w-[40ch] text-base leading-[1.7] text-[#5F7780]">
                  Aliya will reply personally to {email} within 24 business
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mt-6 text-sm font-medium text-[#3E8A99] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99]"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <p className="font-serif text-[1.6rem] leading-tight text-[#1F3A44]">
                    Or send a private note.
                  </p>
                  <p className="mt-1.5 text-sm text-[#5F7780]">
                    Only Aliya reads this.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm text-[#1F3A44]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm text-[#1F3A44]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-mind"
                    className="mb-1.5 block text-sm text-[#1F3A44]"
                  >
                    What is on your mind?
                  </label>
                  <textarea
                    id="contact-mind"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm text-[#8A3A32]" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1F3A44] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3E8A99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E8A99] disabled:opacity-70"
                >
                  {isSubmitting ? "Sending…" : "Send a note"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};