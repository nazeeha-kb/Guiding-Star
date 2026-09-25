import React from "react";

interface AgreementConsentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const terms = [
  "Coaching is not therapy, counselling, or medical treatment, and doesn't involve diagnosis.",
  "Sessions are confidential, except where there's risk of harm or a legal requirement to disclose.",
  "Rescheduling needs at least 24 hours' notice; missed sessions without notice aren't refundable.",
  "You're responsible for the decisions and actions you take between and after sessions.",
  "If mental health support beyond coaching becomes relevant, you'll be gently guided toward it.",
];

export const AgreementConsent: React.FC<AgreementConsentProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div className="border-t border-line pt-6">
      <p className="mb-3 text-sm font-medium text-ink">
        Before you book
      </p>
      <ul className="space-y-2.5">
        {terms.map((term) => (
          <li key={term} className="flex gap-2.5 text-sm leading-[1.55] text-slate">
            <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-[#5797A6]" aria-hidden="true" />
            {term}
          </li>
        ))}
      </ul>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-ink">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#5797A6]"
        />
        <span>
          I've read and agree to the above, and understand a full coaching
          agreement will follow before our first session.
        </span>
      </label>
    </div>
  );
};