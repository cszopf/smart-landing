
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-slate-900 mb-8">
            The housing ecosystem is evolving. <br/>
            <span className="text-emerald-600 underline decoration-slate-200 underline-offset-8 italic">Title hasn't.</span>
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Traditional title companies operate as isolated local offices. Smart operates as structured infrastructure—standardized, auditable, and automated.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Isolated vs Structured", 
              desc: "Traditional title is a zigzag of manual file chasing. Smart is a straight line of transaction intelligence.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z"
            },
            { 
              title: "Manual vs Automated", 
              desc: "Instead of disconnected document review, Smart uses automated exception routing to improve cycle times.",
              icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
            },
            { 
              title: "Opaque vs Transparent", 
              desc: "Status updates shouldn't be a secret. Smart provides real-time participant transparency for all parties.",
              icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            },
            { 
              title: "Reactionary vs Embedded", 
              desc: "Fraud prevention shouldn't be an afterthought. It's built into our embedded transaction trust layer.",
              icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-[#FBFBFA] hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
