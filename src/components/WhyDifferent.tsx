
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const WhyDifferent: React.FC = () => {
  const points = [
    { title: "Radical Transparency", desc: "Every step, every requirement, every change, visible in one shared timeline." },
    { title: "AI Title Engine", desc: "Automates search + exception detection, routing only edge cases to experts." },
    { title: "Exception Management", desc: "Humans focus where judgment matters, not on repetitive data entry." },
    { title: "Fraud Prevention", desc: "Identity and source-of-funds patterns monitored as a default security layer." },
    { title: "Transaction Trust Layer", desc: "Standardized rules, audit trails, and compliance gates across markets." },
    { title: "Lifecycle Continuity", desc: "Smart stays with the homeowner post-close: monitoring and protection." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="lg:w-1/2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 block">Modern Institution</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              A title institution <br/>evolved.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              Smart isn't just a software layer; it's a full-stack title institution built for the speed and security of modern real estate. We combine local expertise with nationwide infrastructure.
            </p>
            <a href="#" className="text-emerald-600 font-bold hover:underline">Learn how it works →</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;