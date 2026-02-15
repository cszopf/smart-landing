
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { LOGO_PRIMARY } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => onNavClick(e, '')} className="flex items-center">
          <img 
            src={LOGO_PRIMARY} 
            alt="Smart Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
          />
        </a>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#product" onClick={(e) => onNavClick(e, 'product')} className="hover:text-emerald-600 transition-colors">Product</a>
          <a href="#how-it-works" onClick={(e) => onNavClick(e, 'how-it-works')} className="hover:text-emerald-600 transition-colors">How It Works</a>
          <a href="#personas" onClick={(e) => onNavClick(e, 'personas')} className="hover:text-emerald-600 transition-colors">For Agents</a>
          <a href="#trust" onClick={(e) => onNavClick(e, 'trust')} className="hover:text-emerald-600 transition-colors">Trust</a>
          <a href="#faq" onClick={(e) => onNavClick(e, 'faq')} className="hover:text-emerald-600 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-900 hover:text-emerald-600 px-4 py-2 transition-colors">
            Start Transaction
          </button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;