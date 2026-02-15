
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { LOGO_PRIMARY } from '../constants';

interface FooterProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-[#FBFBFA] pt-24 pb-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <a href="#" onClick={(e) => onNavClick(e, '')} className="inline-block">
            <img 
              src={LOGO_PRIMARY} 
              alt="Smart Logo" 
              className="h-10 w-auto object-contain"
            />
          </a>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            A modern title institution evolved. Radical transparency, built on trust, engineered as infrastructure.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-light">
            <li><a href="#product" onClick={(e) => onNavClick(e, 'product')} className="hover:text-emerald-600 transition-colors">SmartSearch Engine</a></li>
            <li><a href="#product" onClick={(e) => onNavClick(e, 'product')} className="hover:text-emerald-600 transition-colors">Transparency views</a></li>
            <li><a href="#product" onClick={(e) => onNavClick(e, 'product')} className="hover:text-emerald-600 transition-colors">Smart One</a></li>
            <li><a href="#product" onClick={(e) => onNavClick(e, 'product')} className="hover:text-emerald-600 transition-colors">Title Shield</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Partners</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-light">
            <li><a href="#how-it-works" onClick={(e) => onNavClick(e, 'how-it-works')} className="hover:text-emerald-600 transition-colors">JV Network</a></li>
            <li><a href="#ecosystem" onClick={(e) => onNavClick(e, 'ecosystem')} className="hover:text-emerald-600 transition-colors">Platform APIs</a></li>
            <li><a href="#ecosystem" onClick={(e) => onNavClick(e, 'ecosystem')} className="hover:text-emerald-600 transition-colors">Underwriters</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-light">
            <li><a href="#how-it-works" onClick={(e) => onNavClick(e, 'how-it-works')} className="hover:text-emerald-600 transition-colors">Our Vision</a></li>
            <li><a href="#how-it-works" onClick={(e) => onNavClick(e, 'how-it-works')} className="hover:text-emerald-600 transition-colors">World Class Title</a></li>
            <li><a href="#trust" onClick={(e) => onNavClick(e, 'trust')} className="hover:text-emerald-600 transition-colors">Trust & Security</a></li>
            <li><a href="#faq" onClick={(e) => onNavClick(e, 'faq')} className="hover:text-emerald-600 transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">
        <p>© 2026 Smart Title Ventures. All rights reserved. A modern title institution.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
