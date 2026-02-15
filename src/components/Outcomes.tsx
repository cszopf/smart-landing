
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { METRICS } from '../constants';

const Outcomes: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-serif text-slate-900">What changes.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((m, i) => (
            <div key={i} className="text-center p-10 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <span className="text-4xl md:text-5xl font-bold text-emerald-600 block mb-4">{m.value}</span>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">{m.label}</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-[10px] text-slate-300 text-center mt-12 uppercase tracking-widest">Results vary by market and transaction complexity.</p>
      </div>
    </section>
  );
};

export default Outcomes;