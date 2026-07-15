import React, { useEffect, useRef } from 'react';
import { Shield, Target, Flame, Lightbulb, Play, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LearningExperience() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // Fade left content
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Fade right image container
    gsap.fromTo(
      visualRef.current,
      { opacity: 0, x: 50, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const features = [
    {
      icon: Flame,
      title: 'Advanced Fire Drill Yards',
      desc: 'Controlled training grounds for real-life fire extinguishing, pressure isolation, and smoke evacuation drills.',
    },
    {
      icon: Target,
      title: 'Virtual Reality (VR) Safety Simulations',
      desc: 'Immersive virtual industrial plants mapping chemical spills and toxic gas leak containment scenarios.',
    },
    {
      icon: Shield,
      title: 'Vetted HSE Compliance Audits',
      desc: 'Students learn on industry-grade gas monitors, fire safety systems, and standard protective gear.',
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-[10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-secondary/5 glow-blob" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Text Details (6 cols) */}
        <div ref={textRef} className="lg:col-span-6 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            The Campus Environment
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-6 leading-tight">
            Immersive Learning Built for High-Risk Fields
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium mb-8 leading-relaxed">
            Industrial safety cannot be mastered solely in text-based classrooms. At ICVRT, we integrate state-of-the-art simulation labs and physical drills to train industry-ready coordinators.
          </p>

          {/* Feature List */}
          <div className="space-y-6 mb-8">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm md:text-base text-primary mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs md:text-sm text-primary/60 font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors group"
          >
            <span>Schedule a Live Lab Tour</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Visual Content (6 cols) */}
        <div ref={visualRef} className="lg:col-span-6 relative flex justify-center">
          
          <div className="relative w-full aspect-[4/3] max-w-[520px] rounded-3xl overflow-hidden bg-navy-950 border border-navy-100 shadow-[0_24px_50px_rgba(0,0,0,0.06)] group">
            <img
              src="/assets/training_experience.png"
              alt="ICVRT Modern Industrial Training Lab"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-103"
            />
            {/* Dark gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />

            {/* Glowing reflection indicator */}
            <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none" />
          </div>

          {/* Floating glass overlay card */}
          <div className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-5 shadow-xl border border-navy-200/50 max-w-[240px] text-left hidden sm:block animate-float">
            <span className="inline-flex items-center justify-center p-2 rounded-xl bg-accent/20 text-accent mb-3">
              <Lightbulb className="w-5 h-5" />
            </span>
            <h4 className="font-display font-bold text-sm text-primary mb-1">92% Practical Drills</h4>
            <p className="text-[10px] text-primary/60 font-medium">Weekly field mockups and diagnostic reports prepared for each candidate.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
