import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Search } from 'lucide-react';

const certificatesShort = [
  "OTHM Approved",
  "IOSH Managing Safely",
  "OSHA Certified",
  "OAL Accredited",
  "Medic First Aid"
];

export default function Hero({ setSearchQuery }) {
  const containerRef = useRef(null);
  const textGroupRef = useRef(null);
  const [localSearch, setLocalSearch] = React.useState('');

  useEffect(() => {
    // GSAP staggered entrance animations on load
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      textGroupRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-white pt-28 md:pt-36 z-10"
    >
      {/* Background grid details */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.1px,transparent_1.1px)] [background-size:18px_18px] opacity-15 pointer-events-none z-0" />
      
      {/* Full-Bleed Graphic Background Visual Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden top-0 sm:top-20">
        <img
          src="/assets/hero_safety_refinery.jpg"
          alt="iCVRT refinery safety visual background"
          className="w-full h-full object-cover object-center lg:object-right opacity-100"
          loading="eager"
          fetchpriority="high"
        />
        {/* Soft horizontal gradient overlay to ensure absolute text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-10% to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full mt-6 md:mt-10 flex-grow pb-12 lg:pb-16">
        
        {/* LEFT COLUMN: HERO COPY & SEARCH BAR */}
        <div
          ref={textGroupRef}
          className="lg:col-span-7 flex flex-col items-start text-left w-full max-w-full overflow-hidden relative z-10 pt-[28vh] sm:pt-0"
        >
          {/* Top category label */}
          <span className="text-[10px] sm:text-xs font-black text-secondary uppercase tracking-widest mb-4">
            EMPOWERING PEOPLE. ENHANCING SAFETY.
          </span>

          {/* Bold, punchy headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl xl:text-[4.2rem] text-primary tracking-tight leading-[0.95] mb-5">
            BUILD YOUR CAREER<br />
            IN <span className="text-secondary">SAFETY</span> EXCELLENCE
          </h1>

          {/* Description */}
          <p className="text-[13px] sm:text-sm text-secondary sm:text-slate-600 font-extrabold sm:font-semibold leading-relaxed max-w-xl mb-6">
            Professional training programs that meet global standards and industry demands.
          </p>

          {/* Search bar input container */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (setSearchQuery) {
                setSearchQuery(localSearch);
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative flex items-center w-full max-w-lg mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-2xl overflow-hidden border border-slate-200 bg-white"
          >
            <input
              type="text"
              placeholder="Search for a course..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-6 pr-16 py-4 bg-transparent text-primary placeholder-slate-400 font-semibold text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 bg-secondary text-white font-bold rounded-xl shadow-md hover:bg-[#b00f28] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
            <a
              href="#courses"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-display font-bold text-xs uppercase tracking-widest rounded-2xl shadow-[0_10px_25px_rgba(200,16,46,0.15)] hover:shadow-[0_15px_30px_rgba(200,16,46,0.25)] hover:bg-[#b00f28] transition-all duration-300 relative overflow-hidden active:scale-[0.98] w-full md:w-auto text-center"
            >
              EXPLORE COURSES ➔
            </a>
            
            <a
              href="#timeline"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm border border-primary text-primary font-display font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all duration-300 w-full md:w-auto text-center"
            >
              CORPORATE TRAINING ➔
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: EMPTY SPACER ON DESKTOP, BACKDROP SHOWS BEHIND */}
        <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

      </div>

      {/* FULL-WIDTH SCROLLING ACCREDITATIONS BAR (Acts as divider above feature band) */}
      <div className="w-full bg-primary border-y border-[#0E254A] py-3.5 relative z-20 overflow-hidden shadow-inner">
        <div className="custom-marquee">
          {/* First Loop */}
          <div className="flex justify-around min-w-full shrink-0 items-center">
            {certificatesShort.map((cert, index) => (
              <div key={`cert-short-1-${index}`} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_6px_#C8102E]" />
                <span className="text-[10px] font-black text-white/95 tracking-wider uppercase">{cert}</span>
              </div>
            ))}
          </div>
          {/* Second Loop */}
          <div className="flex justify-around min-w-full shrink-0 items-center">
            {certificatesShort.map((cert, index) => (
              <div key={`cert-short-2-${index}`} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_6px_#C8102E]" />
                <span className="text-[10px] font-black text-white/95 tracking-wider uppercase">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Dynamic Keyframe animations */}
      <style>{`
        .custom-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        .custom-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.03);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
