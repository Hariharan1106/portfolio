import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, isScrolled }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-grey-900/95 backdrop-blur-sm shadow-lg' : 'bg-slate-900/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-purple-400 transition-all duration-300 font-medium text-base transform hover:scale-110 ${activeSection === item ? 'text-purple-400' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize hover:text-purple-400 transition-colors py-2 text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}