'use client';

import { useState } from 'react';

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqList({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 py-2 overflow-visible">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className="dx-faq-card bg-secondary rounded-xl border border-gray-800 p-5"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
            onFocus={() => setOpenIndex(index)}
            onBlur={() => setOpenIndex(null)}
          >
            <button
              type="button"
              className="w-full font-semibold text-white text-left flex justify-between items-center gap-3"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.q}</span>
              <span
                className={`text-accent text-2xl leading-none transition-transform ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-300 mt-3 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
