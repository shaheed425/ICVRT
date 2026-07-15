import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Why ICVRT', href: '#why-choose-us' },
    { name: 'Admissions', href: '#timeline' },
    { name: 'Learning Experience', href: '#experience' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.02)] border-b border-navy-100/50'
          : 'py-5 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Brand Logo: Exact iCVRT layout replica */}
        <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-2.5 md:gap-3">

            {/* Logo Graphic: Red 'i' and Navy 'CVRT' */}
            <div className="flex items-end select-none">
              <div className="flex flex-col items-center mr-1">
                {/* Red Dot */}
                <div className="w-[7px] h-[7px] rounded-full bg-secondary mb-[2px] shadow-sm" />
                {/* Red Curved Stem */}
                <div className="w-[7px] h-[19px] bg-secondary rounded-b-[2.5px] rounded-tl-[2.5px] transform skew-x-[-1.5deg]" />
              </div>
              {/* CVRT text */}
              <span className={`font-display font-black text-2xl md:text-3xl tracking-tight leading-none transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                CVRT
              </span>
            </div>

            {/* Vertical divider line */}
            <div className={`w-[1px] h-7.5 transition-colors duration-300 ${
              isScrolled ? 'bg-primary/25' : 'bg-white/20'
            }`} />

            {/* 4 lines Tagline */}
            <div className="flex flex-col text-left leading-[1.05] tracking-tight">
              <span className={`text-[7.5px] font-black uppercase transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>International Council</span>
              <span className={`text-[7px] font-bold uppercase transition-colors duration-300 ${
                isScrolled ? 'text-primary/80' : 'text-white/80'
              }`}>of Vocational</span>
              <span className={`text-[7px] font-bold uppercase transition-colors duration-300 ${
                isScrolled ? 'text-primary/80' : 'text-white/80'
              }`}>and Research</span>
              <span className={`text-[7px] font-bold uppercase transition-colors duration-300 ${
                isScrolled ? 'text-primary/80' : 'text-white/80'
              }`}>Training</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300 ${
                isScrolled ? 'text-primary/80 hover:text-secondary' : 'text-white/80 hover:text-secondary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 group ${
              isScrolled ? 'text-navy-600 hover:text-secondary' : 'text-white/80 hover:text-secondary'
            }`}
          >
            <Phone className="w-4 h-4 text-accent animate-pulse" />
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">Consult Counselor</span>
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full transition-all duration-500 shadow-md hover:-translate-y-[2px] ${
              isScrolled 
                ? 'bg-primary hover:bg-secondary text-white shadow-primary/10 hover:shadow-secondary/20' 
                : 'bg-white hover:bg-secondary hover:text-white text-primary shadow-white/5 hover:shadow-secondary/20'
            }`}
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors focus:outline-none ${
            isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[65px] bg-white border-b border-navy-100 shadow-xl transition-all duration-300 lg:hidden overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 bg-navy-50/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-primary hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-[1px] bg-navy-200/50 w-full my-2" />
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/1234567890"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 font-semibold text-primary py-3 rounded-xl border border-navy-200 hover:bg-navy-100/30 transition-all"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>WhatsApp Counselor</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition-all shadow-md"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
