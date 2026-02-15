
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Ecosystem: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-3/5">
             <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Ecosystem Connectivity</span>
             <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">Designed to integrate, not compete.</h2>
             <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
               Smart is architected to connect with brokerages, lenders, real estate portals, underwriters, and JV networks. It operates as neutral infrastructure, standardizing messy local data into usable intelligence that can be surfaced across any consumer-facing platform.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {['Portals', 'Brokerages', 'Lenders', 'Underwriters', 'JV Networks', 'Fintech'].map((p, idx) => (
                 <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                   <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{p}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-2/5 p-12 bg-slate-900 rounded-[3rem] text-white">
             <h4 className="text-xl font-bold mb-6 text-emerald-400">The Infrastructure Thesis</h4>
             <p className="text-sm text-slate-400 font-light leading-relaxed mb-6 italic">
               "The future of housing is interconnected. Title must become interoperable. Smart is the bridge between local operating expertise and national digital platforms."
             </p>
             <button className="text-emerald-400 font-bold text-xs uppercase tracking-widest hover:text-emerald-300 transition-colors">Partner Inquiry →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
