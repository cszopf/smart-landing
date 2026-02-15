
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

const ProductDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyer' | 'agent' | 'seller'>('buyer');

  const tabContent = {
    buyer: {
      title: "Know what's happening. Feel protected.",
      bullets: [
        "Real-time visibility into the transaction timeline.",
        "Clear 'money moments' and secure wire guidance.",
        "Post-close relationship through Smart One.",
        "Title Shield monitoring for lifelong protection."
      ]
    },
    agent: {
      title: "Fewer fires. More client confidence.",
      bullets: [
        "Instant notifications when money events post.",
        "Structured audit trails and compliance logs.",
        "Branded transparency portal for your clients.",
        "Automated status updates reduce client inbound."
      ]
    },
    seller: {
      title: "Smooth payoffs. Record-keeping for life.",
      bullets: [
        "Automated payoff coordination with lenders.",
        "Real-time recording and funding status.",
        "Homeowner record vault for tax and future use.",
        "Clear closing statement breakdown."
      ]
    }
  };

  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Smart Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-slate-900">SE</div>
                <h4 className="font-bold tracking-tight text-xl">SmartSearch Engine</h4>
              </div>
              <div className="space-y-6 font-mono text-xs opacity-90">
                <div className="flex justify-between border-b border-white/5 pb-2"><span>[NORMALIZING]</span><span className="text-emerald-400">COUNTY_DATA_STREAM_01</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>[EXTRACT]</span><span>EASEMENTS, LIENS, CURATIVE_EXC</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>[VALIDATE]</span><span className="text-emerald-400">INCONSISTENCY_03_RESOLVED</span></div>
                <div className="space-y-2">
                   <div className="flex justify-between text-[10px] text-slate-500 uppercase">Automation Threshold</div>
                   <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-emerald-500"></div>
                   </div>
                </div>
                <div className="text-[10px] p-3 bg-white/5 rounded italic text-slate-400">
                  "Engine output routed to operational expert for Curative Judgment on Item #49."
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">The Core Engine</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">From document review to structured intelligence.</h2>
            <p className="text-slate-600 font-light mb-8 leading-relaxed">
              SmartSearch AI doesn't just read documents; it normalizes multi-source data into a modern system of action. Humans remain in the loop at the judgment layer, not the data entry layer.
            </p>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3 text-sm"><div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">✓</div>AI extracts easements, liens, and chain signals instantly.</li>
              <li className="flex items-start gap-3 text-sm"><div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">✓</div>Detects defect patterns across messy local county records.</li>
              <li className="flex items-start gap-3 text-sm"><div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">✓</div>Outputs commitment-ready summaries for underwriters.</li>
            </ul>
          </div>
        </div>

        {/* Transparency Views */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12">Transparency designed for the ecosystem.</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(['buyer', 'agent', 'seller'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-slate-900 text-white shadow-xl' 
                    : 'bg-slate-50 text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab} Perspective
              </button>
            ))}
          </div>
          
          <div className="bg-[#FBFBFA] rounded-[3rem] p-12 lg:p-20 text-left border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
               <h3 className="text-3xl font-serif text-slate-900 mb-8">{tabContent[activeTab].title}</h3>
               <ul className="space-y-6">
                 {tabContent[activeTab].bullets.map((b, i) => (
                   <li key={i} className="flex gap-4">
                     <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-1">→</span>
                     <p className="text-slate-600 font-light leading-relaxed">{b}</p>
                   </li>
                 ))}
               </ul>
               <button className="mt-12 bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all">
                 View Transparency Layer
               </button>
             </div>
             <div className="lg:w-1/2 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl max-w-md w-full mx-auto">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Real-Time Event Log</div>
                <div className="space-y-4">
                  {[
                    { time: "9:04 AM", event: "Earnest Money Received", status: "Verified" },
                    { time: "11:12 AM", event: "SmartSearch Automated Scan", status: "Complete" },
                    { time: "1:45 PM", event: "Curative Exception #492", status: "Resolved" },
                    { time: "4:20 PM", event: "Clear to Close Notification", status: "Sent" }
                  ].map((log, i) => (
                    <div key={i} className="flex justify-between items-center text-xs py-2 border-b border-slate-50 last:border-0">
                      <span className="text-slate-400">{log.time}</span>
                      <span className="font-medium text-slate-900">{log.event}</span>
                      <span className="text-emerald-600 font-bold">{log.status}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeepDive;
