import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Instagram, Linkedin, Clock, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // WhatsApp prefilled greeting
  const whatsappNumber = '971508421983';
  const whatsappGreeting = encodeURIComponent(
    'Hello, I came across Guiding Star and would like to inquire about coaching sessions.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappGreeting}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please share your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#EEF6F7] border-b border-[#DCE9EB]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#5797A6] uppercase mb-2">
            Direct Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#183238] leading-tight mb-4">
            Start a confidential conversation
          </h2>
          <p className="text-base text-[#607277] font-normal leading-relaxed">
            You do not need prepared answers to reach out. Share a brief note on what you are navigating, and Aliya will reply directly.
          </p>
        </div>

        {/* 60/40 Composition: Direct Contacts & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contacts & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="p-6 bg-white border border-[#DCE9EB]">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5797A6] block mb-2">
                Fastest Response
              </span>
              <h3 className="font-serif text-xl font-normal text-[#183238] mb-2">
                WhatsApp Direct Message
              </h3>
              <p className="text-xs text-[#607277] leading-relaxed mb-4">
                For quick inquiries regarding availability and scheduling across international time zones.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#183238] hover:bg-[#2C3E45] text-white text-xs font-medium rounded-[4px] transition-colors"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone & Email */}
            <div className="p-6 bg-white border border-[#DCE9EB] space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#183238] block border-b border-[#DCE9EB] pb-2">
                Direct Channels
              </span>

              {/* Phone Line */}
              <div>
                <span className="block text-[11px] text-[#607277]">Direct Call / Text</span>
                <a
                  href="tel:+971508421983"
                  className="text-sm font-semibold text-[#183238] hover:text-[#5797A6] transition-colors"
                >
                  +971 50 842 1983
                </a>
                <p className="text-[11px] text-[#607277] mt-0.5">
                  UAE &amp; International Line
                </p>
              </div>

              {/* Email Line */}
              <div className="pt-2 border-t border-[#DCE9EB]">
                <span className="block text-[11px] text-[#607277]">Confidential Email</span>
                <a
                  href="mailto:hello@guidingstarcoaching.com"
                  className="text-sm font-semibold text-[#183238] hover:text-[#5797A6] transition-colors"
                >
                  hello@guidingstarcoaching.com
                </a>
                <p className="text-[11px] text-[#607277] mt-0.5">
                  Replies within 24 business hours
                </p>
              </div>

              {/* Timezones */}
              <div className="pt-2 border-t border-[#DCE9EB]">
                <span className="block text-[11px] text-[#607277]">Timezone Coverage</span>
                <p className="text-xs font-medium text-[#183238] mt-0.5">
                  GST (Dubai) · IST (India) · GMT (UK) · EST (US)
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-white border border-[#DCE9EB]">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#183238] block mb-3">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#DCE9EB] hover:border-[#5797A6] text-xs text-[#183238] flex items-center justify-between transition-colors"
                >
                  <span className="font-medium">LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#607277]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#DCE9EB] hover:border-[#5797A6] text-xs text-[#183238] flex items-center justify-between transition-colors"
                >
                  <span className="font-medium">Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#607277]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Confidential Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#DCE9EB]">
            
            {isSubmitted ? (
              <div className="text-left py-8">
                <div className="w-10 h-10 bg-[#EEF6F7] text-[#5797A6] flex items-center justify-center mb-4 rounded-[4px]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#183238] mb-2 font-normal">
                  Thank you, {name}.
                </h3>
                <p className="text-[#607277] text-sm leading-relaxed mb-6">
                  Your note has been received with complete discretion. Aliya will review it personally and reply directly to <span className="font-semibold text-[#183238]">{email}</span> within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="text-xs text-[#5797A6] hover:underline font-medium"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-[#DCE9EB] pb-3 mb-4">
                  <h3 className="text-xl font-serif text-[#183238] font-normal">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#607277]">
                    Confidential 1-on-1 sessions. Details remain private.
                  </p>
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#183238] mb-1.5">
                    Your Name <span className="text-[#5797A6]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DCE9EB] focus:border-[#5797A6] focus:outline-hidden text-xs text-[#183238] rounded-[4px] placeholder:text-[#9AA8AB]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#183238] mb-1.5">
                      Email Address <span className="text-[#5797A6]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DCE9EB] focus:border-[#5797A6] focus:outline-hidden text-xs text-[#183238] rounded-[4px] placeholder:text-[#9AA8AB]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#183238] mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 ... or +91 ..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DCE9EB] focus:border-[#5797A6] focus:outline-hidden text-xs text-[#183238] rounded-[4px] placeholder:text-[#9AA8AB]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-mind" className="block text-xs font-semibold uppercase tracking-wider text-[#183238] mb-1.5">
                    What would you like to focus on?
                  </label>
                  <textarea
                    id="contact-mind"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what feels unclear, challenging, or ready to change..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DCE9EB] focus:border-[#5797A6] focus:outline-hidden text-xs text-[#183238] rounded-[4px] placeholder:text-[#9AA8AB] resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-[4px]">
                    {errorMsg}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 text-xs font-medium text-white bg-[#5797A6] hover:bg-[#467d8a] rounded-[4px] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <span>Submit Confidential Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="mt-2.5 text-center text-[11px] text-[#607277]">
                    Confidential 1-on-1 sessions. No obligation.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
