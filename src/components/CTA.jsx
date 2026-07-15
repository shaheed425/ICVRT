import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, GraduationCap, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { scale: 0.96, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main CTA Card with linear gradient & mesh */}
        <div
          ref={ctaRef}
          className="relative rounded-[40px] bg-gradient-to-tr from-primary via-navy-800 to-navy-950 p-12 md:p-20 overflow-hidden text-center shadow-2xl shadow-primary/20 border border-white/10"
        >
          {/* Subtle Grid backdrop overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          
          {/* Animated decorative gradient blob */}
          <div className="absolute top-[-20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/20 glow-blob animate-float" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-accent/10 glow-blob animate-pulse-subtle" />

          {/* Tagline Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white">Enrollment Window closing soon</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Ready to Direct Global Industrial Safety?
          </h2>

          {/* Subheading */}
          <p className="text-sm md:text-lg text-navy-200/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Unlock fully validated qualifications. Coordinate safety protocols at international levels and join our placement alumni network.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-white hover:text-primary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-secondary/15 hover:shadow-white/20 hover:-translate-y-0.5"
            >
              <span>Get Counselled Today</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            
            <a
              href="#courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>View Course Fees</span>
            </a>
          </div>

          {/* Micro Stat Tags inside CTA */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center justify-center text-xs font-semibold text-navy-200">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>International Syllabi Alignment</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>Dedicated Visa & Placement Desk</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
