
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { TIMELINE_STEPS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FBFBFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Transaction Infrastructure
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-semibold text-slate-900 leading-[1.1] mb-8">
            Title rebuilt as <br/>
            <span className="text-emerald-600 italic">infrastructure.</span>
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl mb-12">
            Smart is a modern title institution that combines operational expertise, AI-driven workflow automation, and a real-time transparency layer—designed to plug into the broader housing ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-800 transition-all shadow-lg">
              Book a Demo
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-50 transition-all">
              Start a Transaction
            </button>
          </div>

          <div className="mt-12 text-xs font-medium text-slate-400 uppercase tracking-widest">
            Built by title veterans. Engineered for platform scale.
          </div>
        </div>

        <div className="relative animate-fade-in-up delay-200">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-slate-900">Transaction Intelligence</h3>
              <div className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded uppercase">System Active</div>
            </div>
            
            <div className="space-y-6 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
              {TIMELINE_STEPS.slice(0, 4).map((step, idx) => (
                <div key={step.id} className="flex gap-4 relative">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${
                    idx < 3 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {idx < 3 ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    ) : (
                      <span className="text-[10px] font-bold">{step.id}</span>
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${idx < 3 ? 'text-slate-900' : 'text-slate-400'}`}>{step.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                   <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Exception Manager</p>
                  <p className="text-[10px] text-slate-500">Operational Human in the Loop</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center gap-3 animate-bounce">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase">Audit Trail</p>
              <p className="text-xs font-bold text-slate-900">Compliance Gate Cleared</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
