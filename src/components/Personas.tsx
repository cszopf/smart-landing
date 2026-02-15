
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Personas: React.FC = () => {
  return (
    <section id="personas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-12 bg-slate-50 rounded-[2.5rem] flex flex-col justify-between group cursor-pointer hover:bg-slate-100 transition-colors">
            <div>
              <h3 className="text-3xl font-serif text-slate-900 mb-6">For Agents</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                A cleaner timeline, fewer fires, and client confidence you can feel. Let our infrastructure handle the complexity while you handle the relationship.
              </p>
            </div>
            <button className="text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">Book Agent Demo →</button>
          </div>

          <div className="p-12 bg-emerald-600 rounded-[2.5rem] flex flex-col justify-between text-white group cursor-pointer hover:bg-emerald-700 transition-colors">
            <div>
              <h3 className="text-3xl font-serif mb-6">For Partners</h3>
              <p className="text-emerald-100 font-light leading-relaxed mb-8">
                A scalable platform for transaction infrastructure. Smart is built to plug into the broader housing ecosystem: portals, brokerages, and lenders.
              </p>
            </div>
            <button className="text-white font-bold group-hover:translate-x-2 transition-transform">Partner Inquiry →</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Personas;