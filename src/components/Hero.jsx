import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Award, Briefcase, ShieldCheck, Users, ArrowRight, Monitor, Search } from 'lucide-react';

const features = [
  { title: "Globally", desc: "Recognized Certifications", icon: Award },
  { title: "Online & Offline", desc: "Interactive Training", icon: Monitor },
  { title: "100+ Expert", desc: "Instructors & Trainers", icon: Users },
  { title: "Practical &", desc: "Hands-on Learning", icon: Briefcase },
  { title: "Placement Assistance", desc: "& Career Support", icon: ShieldCheck }
];

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
  const imageGroupRef = useRef(null);
  const [localSearch, setLocalSearch] = React.useState('');

  useEffect(() => {
    // GSAP staggered entrance animations on load
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      textGroupRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.2 }
    );

    tl.fromTo(
      imageGroupRef.current,
      { opacity: 0, scale: 0.97, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      '-=0.6'
    );
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Subtle 3D perspective tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;
    
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    if (!card) return;
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] pt-28 md:pt-36 z-10"
    >
      {/* Background grid details */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.1px,transparent_1.1px)] [background-size:18px_18px] opacity-25 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full mt-6 md:mt-10 flex-grow pb-12 lg:pb-20">
        
        {/* LEFT COLUMN: HERO COPY & SEARCH BAR */}
        <div
          ref={textGroupRef}
          className="lg:col-span-6 flex flex-col items-start text-left w-full max-w-full overflow-hidden"
        >
          {/* Top category label */}
          <span className="text-[10px] sm:text-xs font-black text-secondary uppercase tracking-widest mb-4">
            EMPOWERING PEOPLE. ENHANCING SAFETY.
          </span>

          {/* Bold, punchy headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl xl:text-[4.5rem] text-primary tracking-tight leading-[0.95] mb-5">
            BUILD YOUR CAREER<br />
            IN <span className="text-secondary">SAFETY</span> EXCELLENCE
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed max-w-xl mb-6">
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
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-display font-bold text-sm uppercase tracking-wider rounded-2xl shadow-[0_10px_25px_rgba(200,16,46,0.15)] hover:shadow-[0_15px_30px_rgba(200,16,46,0.25)] hover:bg-[#b00f28] transition-all duration-300 relative overflow-hidden active:scale-[0.98] w-full md:w-auto text-center"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="#timeline"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm border border-primary text-primary font-display font-bold text-sm uppercase tracking-wider rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all duration-300 w-full md:w-auto text-center"
            >
              Corporate Training
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE VISUAL FRAME DISPLAY & SCROLLING LABELS */}
        <div
          ref={imageGroupRef}
          className="lg:col-span-6 flex flex-col items-center gap-4 w-full max-w-full overflow-hidden relative"
        >
          {/* Main Visual Image Wrapper Card (Mac-Style Browser Wrapper) */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative rounded-[2.5rem] p-3 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 shadow-[0_25px_60px_rgba(10,28,58,0.1)] hover:border-blue-500/35 transition-all duration-500 ease-out overflow-hidden w-full"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            {/* Browser Control Header */}
            <div className="flex items-center gap-1.5 px-5 pb-3 pt-2 border-b border-slate-800/85">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <div className="ml-4 flex items-center gap-1 text-[9px] text-slate-400 bg-slate-950/40 px-3 py-1 rounded-md border border-slate-800/50 w-full max-w-[150px]">
                <Monitor className="w-2.5 h-2.5 shrink-0" />
                <span className="truncate">icvrt-excellence.org</span>
              </div>
            </div>

            {/* Visual Container */}
            <div className="rounded-[1.8rem] overflow-hidden aspect-[1.75/1] sm:aspect-[2.01/1] bg-slate-950 mt-3.5">
              <img
                src="/assets/hero_engineer.png"
                alt="iCVRT safety expert engineer visual"
                className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Small Auto-Scrolling Certificate Ribbon (Gray background, directly under image card) */}
          <div className="w-full flex flex-col items-center gap-2 mt-2">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.2em] text-center">
              Accreditations
            </span>
            <div className="group w-full py-2.5 bg-slate-100 border border-slate-200/80 rounded-2xl overflow-hidden relative pointer-events-auto cursor-pointer shadow-sm hover:bg-slate-200/40 transition-colors duration-300">
              <div className="flex w-[200%] animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
                {/* First Loop */}
                <div className="flex justify-around min-w-full shrink-0 items-center">
                  {certificatesShort.map((cert, index) => (
                    <div key={`cert-short-1-${index}`} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_6px_#C8102E] group-hover:bg-black group-hover:shadow-none transition-all duration-300" />
                      <span className="text-[10px] font-bold text-slate-600 group-hover:text-secondary tracking-wider uppercase transition-colors duration-300">{cert}</span>
                    </div>
                  ))}
                </div>
                {/* Second Loop */}
                <div className="flex justify-around min-w-full shrink-0 items-center">
                  {certificatesShort.map((cert, index) => (
                    <div key={`cert-short-2-${index}`} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_6px_#C8102E] group-hover:bg-black group-hover:shadow-none transition-all duration-300" />
                      <span className="text-[10px] font-bold text-slate-600 group-hover:text-secondary tracking-wider uppercase transition-colors duration-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* STATIC LIGHT GREY BOTTOM FEATURE BAND WITH CARD TILES */}
      <div className="w-full py-12 bg-slate-100/80 border-t border-slate-200/80 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-4 p-6 bg-white border border-slate-200/60 rounded-2xl shadow-[0_4px_20px_rgba(10,28,58,0.02)] hover:shadow-[0_12px_25px_rgba(10,28,58,0.05)] hover:-translate-y-1 transition-all duration-300 w-full"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-black text-primary uppercase tracking-wider leading-tight">{feat.title}</h4>
                  <p className="text-[11px] text-slate-500 font-bold mt-2 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Keyframe animations */}
      <style>{`
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
