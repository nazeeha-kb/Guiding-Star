import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState('emotional');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeZone, setTimeZone] = useState('GST');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const topics = [
    { id: 'emotional', label: 'Emotional Wellbeing' },
    { id: 'career', label: 'Career & Life Direction' },
    { id: 'relationships', label: 'Relationships & Communication' },
    { id: 'leadership', label: 'Leadership & People Development' },
    { id: 'student', label: 'Student / Youth Guidance' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white border border-[#DCE9EB] max-w-lg w-full p-6 sm:p-8 shadow-xl relative max-h-[92vh] overflow-y-auto rounded-[6px]"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#607277] hover:text-[#183238] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-left py-4">
            <div className="w-10 h-10 bg-[#EEF6F7] text-[#5797A6] flex items-center justify-center mb-4 rounded-[4px]">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif font-normal text-[#183238] mb-2">
              Discovery Call Requested
            </h3>
            <p className="text-sm text-[#607277] leading-relaxed mb-6">
              Thank you, {name}. Aliya will personally review your note and email you at <span className="font-semibold text-[#183238]">{email}</span> with proposed timeslots for your timezone ({timeZone}).
            </p>
            <div className="p-4 bg-[#EEF6F7] border border-[#DCE9EB] text-xs text-[#607277] space-y-1.5 mb-6">
              <p className="font-semibold text-[#183238]">What to expect in 20 minutes:</p>
              <p>• Focused conversation on where you are and what feels ready for change</p>
              <p>• Mutual assessment of whether coaching is the appropriate next step</p>
              <p>• Confidential 1-on-1 dialogue with zero sales pressure</p>
            </div>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-medium text-white bg-[#5797A6] hover:bg-[#467d8a] rounded-[4px] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5797A6] block mb-1">
                Introductory Session
              </span>
              <h3 className="text-2xl font-serif text-[#183238] font-normal">
                Book a 20-Minute Discovery Call
              </h3>
              <p className="text-xs text-[#607277] mt-1 leading-relaxed">
                A structured, confidential dialogue to clarify where you are and determine whether coaching together is the right fit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#183238] uppercase tracking-wider mb-2">
                  Primary Area of Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      className={`text-left p-2.5 text-xs rounded-[4px] transition-colors border ${
                        selectedTopic === t.id
                          ? 'border-[#5797A6] bg-[#EEF6F7] text-[#183238] font-medium'
                          : 'border-[#DCE9EB] hover:border-[#5797A6] text-[#607277]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-[11px] font-semibold text-[#183238] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3 py-2 border border-[#DCE9EB] text-xs text-[#183238] focus:border-[#5797A6] focus:outline-hidden rounded-[4px]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-[11px] font-semibold text-[#183238] mb-1">
                    Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 border border-[#DCE9EB] text-xs text-[#183238] focus:border-[#5797A6] focus:outline-hidden rounded-[4px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-tz" className="block text-[11px] font-semibold text-[#183238] mb-1">
                  Your Timezone
                </label>
                <select
                  id="modal-tz"
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="w-full px-3 py-2 border border-[#DCE9EB] text-xs text-[#183238] focus:border-[#5797A6] focus:outline-hidden rounded-[4px] bg-white"
                >
                  <option value="GST">GST — Gulf Standard Time (Dubai)</option>
                  <option value="IST">IST — India Standard Time</option>
                  <option value="GMT">GMT / BST — United Kingdom</option>
                  <option value="EST">EST — Eastern Time (USA)</option>
                  <option value="Other">Other / Global International</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-medium text-white bg-[#5797A6] hover:bg-[#467d8a] rounded-[4px] transition-colors"
                >
                  Confirm Discovery Call Request
                </button>
                <p className="text-center text-[11px] text-[#607277] mt-2">
                  Confidential 1-on-1 sessions. No diagnosis or clinical treatment.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
