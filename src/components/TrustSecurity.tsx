
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const TrustSecurity: React.FC = () => {
  const cards = [
    { title: "Fraud Detection", desc: "Real-time monitoring of identity and source-of-funds patterns as a default layer." },
    { title: "Audit Trails", desc: "Every action, every change, and every decision logged for radical accountability." },
    { title: "Consumer-First", desc: "Clear wiring education and identity verification designed to eliminate scams." },
    { title: "Compliance-Aware", desc: "State-specific rules and escrow controls baked directly into the workflow." }
  ];

  return (
    <section id="trust" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4 block">Security First</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Trust is the product.</h2>
          <p className="text-slate-400 font-light leading-relaxed">
            Smart replaces hope with a modern, auditable security stack designed specifically for the high-stakes environment of real estate title.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="p-8 border border-slate-800 rounded-3xl bg-slate-900/50 hover:border-slate-700 transition-colors">
              <h4 className="text-lg font-bold mb-4">{c.title}</h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;