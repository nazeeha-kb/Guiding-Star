import React, { useState } from "react";

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const whatsappNumber = "971508421983";
  const whatsappGreeting = encodeURIComponent(
    "Hello, I came across Guiding Star and would like to inquire about coaching sessions.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappGreeting}`;

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
    <section id="contact" className="bg-paper px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-serif text-4xl font-normal leading-[1.05] text-ink md:text-5xl">
          Start here.
        </h2>
        <p className="mt-4 max-w-[36ch] text-lg leading-[1.65] text-slate">
          You do not need prepared answers. A twenty-minute call is enough to begin.
        </p>
        <button type="button" onClick={onOpenBooking} className="btn-cta mt-8">
          Book a Discovery Call
        </button>

        <div className="mt-16 grid grid-cols-1 gap-14 border-t border-line pt-14 lg:grid-cols-12">
          <div className="space-y-6 text-base leading-relaxed text-slate lg:col-span-5">
            <p>
              <a href="tel:+971508421983" className="text-ink hover:text-teal">
                +971 50 842 1983
              </a>
            </p>
            <p>
              <a href="mailto:hello@guidingstarcoaching.com" className="text-ink hover:text-teal">
                hello@guidingstarcoaching.com
              </a>
            </p>
            <p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-teal"
              >
                WhatsApp
              </a>
            </p>
            <p className="text-sm">GST · IST · GMT · EST</p>
          </div>

          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div>
                <h3 className="font-serif text-3xl font-normal text-ink">
                  Thank you, {name}.
                </h3>
                <p className="mt-3 max-w-[40ch] text-base leading-[1.65] text-slate">
                  Aliya will reply personally to {email} within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mt-6 text-sm text-teal hover:text-teal-deep"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm text-slate">Or send a private note.</p>
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm text-ink">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-line bg-paper px-3.5 py-2.5 text-base text-ink placeholder:text-slate/60 focus:border-teal focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm text-ink">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-line bg-paper px-3.5 py-2.5 text-base text-ink placeholder:text-slate/60 focus:border-teal focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-mind" className="mb-1.5 block text-sm text-ink">
                    What is on your mind?
                  </label>
                  <textarea
                    id="contact-mind"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none border border-line bg-paper px-3.5 py-2.5 text-base text-ink placeholder:text-slate/60 focus:border-teal focus:outline-hidden"
                  />
                </div>
                {errorMsg && (
                  <p className="text-sm text-[#8a3a32]" role="alert">
                    {errorMsg}
                  </p>
                )}
                <button type="submit" disabled={isSubmitting} className="btn-cta disabled:opacity-70">
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
