
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const OperationalDepth: React.FC = () => {
  const pillars = [
    {
      title: "Operational Credibility",
      points: ["Deep county recording experience", "Complex curative expertise", "Escrow and compliance-first thinking"]
    },
    {
      title: "Workflow Reality",
      points: ["Built from actual examiner pain points", "Designed around exception management", "Grounded in title insurance logic"]
    },
    {
      title: "Institution → Infrastructure",
      points: ["Knowledge translated into systems", "Repeatable workflows across markets", "Scalable without sacrificing judgment"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4 block">Our Foundation</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Born inside 20+ years of live title operations.
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl">
              Smart was built by the operators behind <strong>World Class Title</strong>, a two-decade title agency with thousands of real-world transactions. Smart wasn't imagined in a lab—it was refined inside real files and complex compliance environments.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-sm">
             <div className="text-5xl font-serif text-emerald-400 mb-4 italic">World Class Title</div>
             <p className="text-sm text-slate-400 mb-8 font-light italic">"Standardized title logic meets modern structured intelligence."</p>
             <div className="h-px bg-white/10 w-full mb-8"></div>
             <div className="flex gap-12">
               <div>
                 <p className="text-2xl font-bold">20,000+</p>
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest">Transactions Handled</p>
               </div>
               <div>
                 <p className="text-2xl font-bold">20+ Yrs</p>
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest">Operating History</p>
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.07] transition-colors">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">{pillar.title}</h3>
              <ul className="space-y-4">
                {pillar.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300 font-light">
                    <span className="text-emerald-500">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalDepth;
