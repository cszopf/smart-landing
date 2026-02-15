
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 text-center mb-16">Questions.</h2>
        
        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="border-b border-slate-100">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openIdx === i ? 'text-emerald-600' : 'text-slate-900 group-hover:text-emerald-600'}`}>
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIdx === i ? 'rotate-45' : ''}`}>
                   <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-slate-500 font-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;