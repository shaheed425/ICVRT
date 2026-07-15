import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const containerRef = useRef(null);
  
  const statsData = [
    { value: 15000, suffix: '+', label: 'Trained Students', desc: 'Across diverse safety & technical programs' },
    { value: 45, suffix: '+', label: 'Global Courses', desc: 'NEBOSH, IOSH, Fire Safety & Industrial Diplomas' },
    { value: 98, suffix: '%', label: 'Placement Rate', desc: 'Graduates recruited by leading multinationals' },
    { value: 12, suffix: '+', label: 'Years of Excellence', desc: 'Pioneering vocational and research education' },
  ];

  const countersRef = useRef([]);

  useEffect(() => {
    statsData.forEach((stat, index) => {
      const element = countersRef.current[index];
      if (!element) return;

      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: stat.value,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          element.innerText = Math.floor(obj.val).toLocaleString() + stat.suffix;
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-navy-50 border-y border-navy-100/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#0F5FFF_0.5px,transparent_0.5px)] bg-[size:16px_16px] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              {/* Animated number counter */}
              <span
                ref={(el) => (countersRef.current[i] = el)}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tight leading-none mb-3 group-hover:text-secondary transition-colors duration-300"
              >
                0{stat.suffix}
              </span>
              
              {/* Divider bar */}
              <div className="w-10 h-1 bg-secondary rounded-full mb-4 transition-all duration-300 group-hover:w-20" />
              
              {/* Label */}
              <h4 className="font-display font-bold text-base md:text-lg text-primary mb-1">
                {stat.label}
              </h4>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-primary/60 font-medium">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
