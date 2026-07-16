import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, User, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', active: true },
    { name: 'ABOUT', href: '#why-choose-us' },
    { name: 'COURSES', href: '#courses' },
    { name: 'STUDY CENTER', href: '#experience' },
    { name: 'ACCREDITATIONS', href: '#courses' },
    { name: 'CORPORATE TRAINING', href: '#timeline' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'h-16 bg-white shadow-[0_10px_30px_rgba(10,28,58,0.07)] border-b border-slate-200/50'
        : 'h-20 bg-white shadow-[0_4px_20px_rgba(10,28,58,0.03)] border-b border-slate-200/30'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">

        {/* Brand Logo: Exact iCVRT layout replica */}
        <a href="#" className="flex items-center h-full group transition-transform duration-300 hover:scale-[1.01]">
          <div className="flex items-center gap-2 md:gap-2.5">

            {/* Logo Graphic: Red 'i' and Navy 'CVRT' */}
            <div className="flex items-end select-none">
              <div className="flex flex-col items-center mr-1">
                {/* Red Dot */}
                <div className="w-[6px] h-[6px] rounded-full bg-secondary mb-[1.5px] shadow-sm" />
                {/* Red Curved Stem */}
                <div className="w-[6px] h-[18px] bg-secondary rounded-b-[2px] rounded-tl-[2px] transform skew-x-[-1.5deg]" />
              </div>
              {/* CVRT text */}
              <span className="font-display font-black text-2xl tracking-tight leading-none text-primary">
                CVRT
              </span>
            </div>

            {/* Vertical divider line */}
            <div className="w-[1px] h-7 bg-slate-300" />

            {/* 4 lines Tagline */}
            <div className="flex flex-col text-left leading-[1.05] tracking-tight">
              <span className="text-[7.5px] font-black uppercase text-primary">International Council</span>
              <span className="text-[7px] font-bold uppercase text-primary/85">of Vocational</span>
              <span className="text-[7px] font-bold uppercase text-primary/85">and Research</span>
              <span className="text-[7px] font-bold uppercase text-primary/85">Training</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links (Mockup Matched - Height stretch) */}
        <nav className="hidden lg:flex items-stretch h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center px-4 font-display font-extrabold text-[11px] tracking-wider transition-all duration-300 ${link.active
                  ? 'bg-secondary text-white px-6'
                  : 'text-primary/80 hover:text-secondary hover:bg-slate-50/50'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Login Capsule Button */}
        <div className="hidden lg:flex items-center h-full">
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-black rounded-xl shadow-md hover:bg-secondary active:scale-[0.98] transition-all duration-300"
          >
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 transition-colors focus:outline-none text-primary hover:text-secondary"
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
