
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleMobileNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f172a]/80 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-2xl font-bold tracking-tighter text-blue-500 hover:opacity-80 transition-opacity z-50"
          >
            VS<span className="text-white">.dev</span>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activePage === link.id ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {activePage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in scale-x-100 duration-300"></span>
                )}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-500/20"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-lg" onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center gap-8 transition-transform duration-500 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-10'
        }`}>
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleMobileNav(link.id)}
              className={`text-3xl font-bold transition-all ${
                activePage === link.id ? 'text-blue-500 scale-110' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleMobileNav('contact')}
            className="mt-4 px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-2xl shadow-blue-500/30"
          >
            Hire Me
          </button>

          {/* Social Links in Mobile Menu */}
          <div className="flex gap-8 mt-12 text-2xl text-slate-500">
            <a href="https://github.com/VaibhavSain" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-28887b2a2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
