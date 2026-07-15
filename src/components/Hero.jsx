import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Download, MessageCircle, FileText, CheckCircle, X, ShieldCheck, MapPin, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const stickyFrameRef = useRef(null);
  
  // Element references for GSAP animation
  const studentLeftRef = useRef(null);
  const studentRightRef = useRef(null);
  const titleContainerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const subtitleRef = useRef(null);
  const explosionCardsRef = useRef([]);
  const finalCtaRef = useRef(null);

  // Modal State
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [brochureSent, setBrochureSent] = useState(false);

  useEffect(() => {
    // Pin the h-screen section itself for exactly 800px of scroll distance
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickyFrameRef.current,
        start: 'top top',
        end: '+=800',
        scrub: 0.8,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      }
    });

    // 1. Initial positions (offscreen bounds & landing state)
    gsap.set(studentLeftRef.current, { x: '-50vw', opacity: 0 });
    gsap.set(studentRightRef.current, { x: '50vw', opacity: 0 });
    gsap.set(finalCtaRef.current, { y: 0, opacity: 1 });
    gsap.set(subtitleRef.current, { opacity: 0.6 });
    gsap.set(rightPanelRef.current, { opacity: 1, scale: 1, y: 0 });

    // Initial state for exploding cards
    explosionCardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, { scale: 0, opacity: 0, x: 0, y: 0 });
      }
    });

    // 2. Sequential clean dark mode timeline stages
    mainTimeline
      // Phase A: Fade out landing visual cards, subtitle, and CTA buttons on scroll start
      .to(rightPanelRef.current, {
        opacity: 0,
        scale: 0.9,
        y: -30,
        duration: 0.6,
        ease: 'power2.in'
      }, 'start')
      .to(subtitleRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out'
      }, 'start')
      .to(finalCtaRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power1.out'
      }, 'start')

      // Phase B: Walk Students towards center crossover
      .to([studentLeftRef.current, studentRightRef.current], {
        opacity: 1,
        duration: 0.25,
        ease: 'power1.out'
      }, 'walk')
      .to(studentLeftRef.current, {
        x: '0vw', // Meet in center
        duration: 1.8,
        ease: 'power1.inOut'
      }, 'walk')
      .to(studentRightRef.current, {
        x: '0vw', // Meet in center
        duration: 1.8,
        ease: 'power1.inOut'
      }, 'walk')
      
      // Phase C: Left-aligned title dims out of the way to prevent text collision
      .to(titleContainerRef.current, {
        scale: 1.02,
        opacity: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      }, 'walk+=0.4')

      // Phase D: Explode cards outwards at the crossover peak
      .to(explosionCardsRef.current[0], { x: '-28vw', y: '-22vh', scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' }, 'walk+=0.6') // Top Left
      .to(explosionCardsRef.current[1], { x: '28vw', y: '-18vh', scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' }, 'walk+=0.6')  // Top Right
      .to(explosionCardsRef.current[2], { x: '-26vw', y: '10vh', scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' }, 'walk+=0.7')   // Mid Left
      .to(explosionCardsRef.current[3], { x: '26vw', y: '8vh', scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.2)' }, 'walk+=0.7')    // Mid Right

      // Phase E: Students walk fully offscreen & Cards shrink away to leave canvas clean
      .to(studentLeftRef.current, {
        x: '60vw',
        opacity: 0,
        duration: 1.2,
        ease: 'power2.in'
      }, 'exit')
      .to(studentRightRef.current, {
        x: '-60vw',
        opacity: 0,
        duration: 1.2,
        ease: 'power2.in'
      }, 'exit')
      .to(explosionCardsRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.in'
      }, 'exit')

      // Phase F: Left-aligned title returns to full clarity, left-aligned CTA reveals
      .to(titleContainerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, 'exit+=0.4')
      .to(finalCtaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, 'exit+=0.4');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    setBrochureSent(true);
    setTimeout(() => {
      setShowBrochureModal(false);
      setBrochureSent(false);
    }, 2000);
  };

  return (
    <section
      ref={stickyFrameRef}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#0a0b10] z-10"
    >
      {/* High-Tech Cyan/Blue Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Background Video Loop: Modern institute campus and classroom spaces */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none z-0"
      >
        <source src="https://player.vimeo.com/external/392275283.sd.mp4?s=e7ad7f2025cf26d9c7c4918e9508bc1721516e8b&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
      </video>

      {/* Fluid Gradient Meshes: Indigo, Crimson & Violet Auroras */}
      <div className="absolute top-[15%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-indigo-950/25 glow-blob animate-float-slow z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-secondary/12 glow-blob animate-pulse-subtle z-0" />
      <div className="absolute top-[25%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-purple-900/10 glow-blob animate-float z-0" />

      {/* Main Grid: Split Layout containing Left Typography and Right Panel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-4 md:pt-28 md:pb-8 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Admissions info & CTA) */}
        <div ref={titleContainerRef} className="lg:col-span-7 text-left flex flex-col items-start select-none animate-in fade-in duration-700">
          {/* Tagline Pill Badge in Dark Mode Accent */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-white text-xs font-semibold mb-4 shadow-sm shadow-secondary/10">
            <Award className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>The future of vocational learning is here</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] uppercase">
            Learn Safety. <br />
            <span className="text-white">Build Your </span><span className="text-secondary font-black">Future.</span>
          </h1>

          <p ref={subtitleRef} className="text-sm md:text-base text-gray-400 max-w-xl mt-4 font-semibold tracking-wide leading-relaxed font-sans">
            Master international safety standards, industrial fire training, and occupational health management from vetted experts. Join 10,000+ alumni placed globally.
          </p>

          {/* Left-aligned Final CTA Buttons */}
          <div
            ref={finalCtaRef}
            className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#courses"
              className="group relative inline-flex items-center justify-center gap-2 bg-secondary hover:bg-white hover:text-primary text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-secondary/25 hover:-translate-y-[2px]"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => setShowVideoModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-[2px]"
            >
              <Play className="w-4 h-4 text-secondary fill-current" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Right Column: Overlapping Floating Cards (EduSphere Style in Dark Glassmorphism) */}
        <div ref={rightPanelRef} className="hidden lg:block lg:col-span-5 relative h-[500px]">
          
          {/* Card 1: Top Right */}
          <div className="absolute top-[20px] right-[20px] w-[320px] glass-panel-dark shadow-2xl rounded-3xl p-6 border border-white/8 text-left z-10 hover:translate-y-[-5px] transition-transform duration-300">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/35">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">HSE Advisor</h4>
                <p className="text-[10px] text-accent font-extrabold uppercase tracking-widest">Active Now</p>
              </div>
            </div>
            <p className="text-xs text-gray-300 font-medium leading-relaxed italic">
              "You've completed 80% of the NEBOSH Course. Ready for your practical mock audit today?"
            </p>
          </div>

          {/* Card 2: Middle Left */}
          <div className="absolute top-[180px] left-[-30px] w-[240px] glass-panel-dark shadow-xl rounded-2xl p-4 border border-white/8 text-left z-20 flex items-center gap-3 hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/25">
              <ShieldCheck className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-xs text-white">Accreditation Approved</h4>
              <p className="text-[10px] text-gray-400 font-semibold">ISO 9001 Guidelines</p>
            </div>
          </div>

          {/* Card 3: Bottom Center */}
          <div className="absolute bottom-[40px] left-[50px] w-[280px] glass-panel-dark shadow-2xl rounded-2xl p-5 border border-white/8 text-left z-15 hover:translate-y-[-5px] transition-transform duration-300">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-bold text-white">Current Progress</span>
              <span className="text-[11px] font-black text-secondary">98%</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-3">
              <div className="bg-gradient-to-r from-secondary to-accent h-full rounded-full" style={{ width: '98%' }} />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                <img src="/assets/training_experience.png" className="w-full h-full object-cover opacity-60" />
              </div>
              <span className="text-[10px] font-semibold text-gray-300">Middle East Placement...</span>
            </div>
          </div>

          {/* Avatar Bubble Group */}
          <div className="absolute bottom-[20px] right-[40px] flex items-center -space-x-2 z-25">
            <div className="w-8 h-8 rounded-full border-2 border-[#0a0b10] overflow-hidden shadow">
              <img src="/assets/student_left.png?v=2" className="w-full h-full object-cover bg-navy-950" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#0a0b10] overflow-hidden shadow">
              <img src="/assets/student_right.png?v=2" className="w-full h-full object-cover bg-navy-950" />
            </div>
            <div className="w-8 h-8 rounded-full bg-secondary text-[10px] font-black text-white flex items-center justify-center border-2 border-[#0a0b10] shadow">
              +10k
            </div>
          </div>

        </div>

      </div>

      {/* 2. Walking Student Cutouts (Triggered on Scroll) */}
      {/* Student 1 (Left to Right) */}
      <div
        ref={studentLeftRef}
        className="absolute bottom-[5%] left-0 w-[180px] md:w-[280px] lg:w-[350px] aspect-[3/4] z-35 pointer-events-none transform -translate-x-[50%]"
      >
        <img
          src="/assets/student_left.png?v=2"
          alt="Male student walking sideways"
          className="w-full h-full object-contain"
        />
        {/* Soft bottom blend to obsidian background */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0a0b10] to-transparent" />
      </div>

      {/* Student 2 (Right to Left) */}
      <div
        ref={studentRightRef}
        className="absolute bottom-[5%] right-0 w-[180px] md:w-[280px] lg:w-[350px] aspect-[3/4] z-30 pointer-events-none transform translate-x-[50%]"
      >
        <img
          src="/assets/student_right.png?v=2"
          alt="Female student walking sideways"
          className="w-full h-full object-contain"
        />
        {/* Soft bottom blend to obsidian background */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0a0b10] to-transparent" />
      </div>

      {/* 3. Parallax Exploding Glassmorphic Panels (Scrubbed on Scroll) */}
      {/* Card 1 - Top Left */}
      <div
        ref={(el) => (explosionCardsRef.current[0] = el)}
        className="hidden md:block absolute z-25 glass-panel-dark border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[220px] text-left pointer-events-none select-none text-white"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary/20 text-secondary rounded-lg">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-white">Placed in UAE</h4>
            <p className="text-[10px] text-gray-400">ADNOC Refinery Sector</p>
          </div>
        </div>
      </div>

      {/* Card 2 - Top Right */}
      <div
        ref={(el) => (explosionCardsRef.current[1] = el)}
        className="hidden md:block absolute z-25 glass-panel-dark border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[220px] text-left pointer-events-none select-none text-white"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/20 text-accent rounded-lg">
            <CheckCircle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-white">98% Placement</h4>
            <p className="text-[10px] text-gray-400">Vetted Alumni Network</p>
          </div>
        </div>
      </div>

      {/* Card 3 - Mid Left */}
      <div
        ref={(el) => (explosionCardsRef.current[2] = el)}
        className="hidden md:block absolute z-25 glass-panel-dark border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[220px] text-left pointer-events-none select-none text-white"
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <h4 className="font-display font-bold text-xs text-white">ISO 9001 Approved</h4>
        </div>
        <p className="text-[9px] text-gray-400 mt-1 leading-tight">Assessed under international safety training guidelines.</p>
      </div>

      {/* Card 4 - Mid Right */}
      <div
        ref={(el) => (explosionCardsRef.current[3] = el)}
        className="hidden md:block absolute z-25 glass-panel-dark border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[220px] text-left pointer-events-none select-none text-white"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs text-white">Global Certs</h4>
            <p className="text-[10px] text-gray-400">NEBOSH / IOSH Standards</p>
          </div>
        </div>
      </div>

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#0a0b10]/80 backdrop-blur-sm" onClick={() => setShowBrochureModal(false)} />
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative z-10 border border-navy-100 text-left animate-in fade-in zoom-in-95 duration-200 text-primary">
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-6 right-6 p-1 rounded-full text-navy-400 hover:text-primary hover:bg-navy-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 text-secondary rounded-2xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-primary">Download Brochure</h3>
                <p className="text-xs text-navy-400">Get syllabus details & eligibility indices</p>
              </div>
            </div>

            {brochureSent ? (
              <div className="py-8 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-primary mb-1">Sent!</h4>
                <p className="text-sm text-navy-400">Prospectus download started automatically.</p>
              </div>
            ) : (
              <form onSubmit={handleBrochureSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-primary/80 mb-1.5">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm text-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary/80 mb-1.5">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm text-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary/80 mb-1.5">Select Course Field</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm bg-white text-primary">
                    <option>Fire & Industrial Safety Training</option>
                    <option>Health & Safety Management (NEBOSH/IOSH)</option>
                    <option>International Technical Certifications</option>
                    <option>Vocational Diploma & Skill Development</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-primary/10 mt-2"
                >
                  Request Prospectus Link
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Video Preview Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0a0b10]/95 backdrop-blur-md" onClick={() => setShowVideoModal(false)} />
          <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl z-10 border border-white/10 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-white bg-black/40 hover:bg-white/15 transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/80 to-transparent z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Campus Labs Overview</span>
              </div>
              <div className="max-w-md text-left">
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">Simulated Hazardous Management Yards</h3>
                <p className="text-sm text-gray-300">Voted leading vocational training lab framework in regional OHS audits.</p>
              </div>
            </div>
            <div className="w-full h-full bg-navy-950 flex items-center justify-center">
              <img
                src="/assets/training_experience.png"
                alt="Lab Tour Tour"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute p-6 bg-white/10 rounded-full backdrop-blur-md border border-white/20 z-10">
                <Play className="w-10 h-10 text-white fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
