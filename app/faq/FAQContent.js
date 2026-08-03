'use client';

import { useState } from 'react';

export default function FAQContent({ faqs }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'General', 'Safety', 'Technical', 'Privacy'];
  
  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-white/95 text-slate-600 hover:bg-white border border-slate-200/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <details
            key={index}
            className="group p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">
                  {faq.category}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 pr-4">
                  {faq.question}
                </h3>
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed pl-0 sm:pl-14">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
