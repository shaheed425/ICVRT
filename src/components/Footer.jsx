import React, { useState } from 'react';
import { ShieldCheck, Mail, ArrowUpRight, ArrowUp, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/5 glow-blob animate-float" />
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 glow-blob animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Newsletter (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Brand Logo: Exact iCVRT layout replica */}
            <a href="#" className="flex items-center group mb-6 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2.5 md:gap-3">
                
                {/* Logo Graphic */}
                <div className="flex items-end select-none">
                  <div className="flex flex-col items-center mr-1">
                    {/* Red Dot */}
                    <div className="w-[7px] h-[7px] rounded-full bg-secondary mb-[2px] shadow-sm" />
                    {/* Red Curved Stem */}
                    <div className="w-[7px] h-[19px] bg-secondary rounded-b-[2.5px] rounded-tl-[2.5px] transform skew-x-[-1.5deg]" />
                  </div>
                  {/* CVRT text */}
                  <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-white leading-none">
                    CVRT
                  </span>
                </div>
                
                {/* Vertical divider line */}
                <div className="w-[1px] h-7.5 bg-white/20" />
                
                {/* 4 lines Tagline */}
                <div className="flex flex-col text-left leading-[1.05] tracking-tight">
                  <span className="text-[7.5px] font-black uppercase text-white">International Council</span>
                  <span className="text-[7px] font-bold uppercase text-white/80">of Vocational</span>
                  <span className="text-[7px] font-bold uppercase text-white/80">and Research</span>
                  <span className="text-[7px] font-bold uppercase text-white/80">Training</span>
                </div>
              </div>
            </a>

            <p className="text-sm text-navy-200/80 font-medium max-w-sm mb-8 leading-relaxed">
              International Council for Vocational & Research Training. Empowering safety managers, environmental specialists, and technicians worldwide.
            </p>

            {/* Newsletter form */}
            <div className="w-full max-w-md">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-3">
                Subscribe to Admissions Bulletins
              </h4>
              {subscribed ? (
                <div className="p-4 rounded-xl bg-accent/15 border border-accent/20 text-accent font-semibold text-xs flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for program deadlines.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl max-w-sm">
                  <input
                    required
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-navy-300 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-secondary hover:text-white text-primary font-bold px-4 py-2 rounded-lg text-xs transition-all flex items-center gap-1"
                  >
                    <span>Join</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Directory (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
            
            {/* Quick Links Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-navy-200">
                Institute
              </h4>
              <nav className="flex flex-col gap-2.5 text-sm font-semibold text-navy-300">
                <a href="#courses" className="hover:text-white transition-colors">Safety Catalog</a>
                <a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a>
                <a href="#timeline" className="hover:text-white transition-colors">Admission Path</a>
                <a href="#experience" className="hover:text-white transition-colors">Campus Tour</a>
                <a href="#faq" className="hover:text-white transition-colors">Support FAQ</a>
              </nav>
            </div>

            {/* Courses Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-navy-200">
                Featured Programs
              </h4>
              <nav className="flex flex-col gap-2.5 text-sm font-semibold text-navy-300">
                <a href="#courses" className="hover:text-white transition-colors">PG Fire & Safety</a>
                <a href="#courses" className="hover:text-white transition-colors">Advanced OHS Diploma</a>
                <a href="#courses" className="hover:text-white transition-colors">NEBOSH / IOSH Certificates</a>
                <a href="#courses" className="hover:text-white transition-colors">Industrial Audit Guide</a>
                <a href="#courses" className="hover:text-white transition-colors">Effluent Treatment Cert</a>
              </nav>
            </div>

            {/* Accreditations Column */}
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-navy-200">
                Verification Details
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-[10px] font-semibold text-navy-200 leading-tight">
                    ISO 9001:2015 Registered Vocational Body
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-[10px] font-semibold text-navy-200 leading-tight">
                    Compliant with HSE & National Fire Norms
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-xs text-navy-300 font-semibold">
              © {new Date().getFullYear()} ICVRT. All Rights Reserved. Designed for premium educational counseling and admissions.
            </p>
            <p className="text-[10px] text-navy-400 mt-1 leading-snug">
              Disclaimer: ICVRT provides vocational skill development and occupational research programs. Dummy placeholder content for marketing representation purposes only.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 flex items-center justify-center text-navy-200 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 flex items-center justify-center text-navy-200 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 flex items-center justify-center text-navy-200 hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white text-navy-200 hover:text-primary transition-all border border-white/10 flex items-center gap-1.5 text-xs font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
