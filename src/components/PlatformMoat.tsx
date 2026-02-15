
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const PlatformMoat: React.FC = () => {
  const pillars = [
    {
      title: "County-Level Data Normalization",
      desc: "Smart standardizes messy, localized county data into usable, auditable intelligence at national scale."
    },
    {
      title: "Exception-Driven Automation",
      desc: "Operational leverage increases with volume as the Smart Engine learns and automates repetitive curative paths."
    },
    {
      title: "JV Distribution Network",
      desc: "Aligned incentives and low churn through repeatable go-to-market strategies with strategic partners."
    },
    {
      title: "Institutional Foundation",
      desc: "Grounded in the 20+ years of operating reality and compliance depth of World Class Title."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Scalable Defense</span>
           <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Why Smart scales.</h2>
           <p className="text-slate-500 font-light max-w-2xl mx-auto">Defensible transaction infrastructure built for longevity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((p, idx) => (
            <div key={idx} className="flex flex-col text-left group">
              <span className="text-emerald-600 font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-px bg-emerald-600"></span>
                {idx + 1}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{p.title}</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-slate-50 text-center">
          <p className="text-slate-400 font-light italic max-w-3xl mx-auto">
            "Smart is designed to act as the transaction intelligence layer within the broader real estate ecosystem—invisible in its friction, visible in its trust."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformMoat;
