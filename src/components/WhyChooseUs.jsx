import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Users, GraduationCap, Compass, Landmark } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const points = [
    {
      icon: Briefcase,
      title: 'Global Placement Assistance',
      desc: 'Exclusive tie-ups with leading chemical plants, construction firms, and international industrial networks.',
      color: 'from-blue-500/10 to-indigo-500/10',
      iconColor: 'text-blue-600',
    },
    {
      icon: Award,
      title: 'International Certifications',
      desc: 'Accredited with global safety standards and local directives to make your certification globally verifiable.',
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Users,
      title: 'Veteran Industry Trainers',
      desc: 'Learn directly from certified HSE managers and fire safety heads with decades of on-field operational experience.',
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600',
    },
    {
      icon: GraduationCap,
      title: 'Flexible & Modular Learning',
      desc: 'Integrated hybrid schedules combining online conceptual theory with rigorous physical lab practicals.',
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-600',
    },
    {
      icon: Compass,
      title: 'Continuous Career Guidance',
      desc: 'Individual mentorship sessions, mock interviews, standard resume optimization, and safety industry orientations.',
      color: 'from-red-500/10 to-rose-500/10',
      iconColor: 'text-rose-600',
    },
    {
      icon: Landmark,
      title: 'Affordable Premium Education',
      desc: 'World-class training facilities with budget-conscious pricing models and installment payment structures.',
      color: 'from-cyan-500/10 to-sky-500/10',
      iconColor: 'text-cyan-600',
    },
  ];

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle details */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-secondary/5 glow-blob" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-accent/5 glow-blob" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Why ICVRT
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
            Unrivaled Standards in Professional Vocational Training
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium">
            Over a decade of refining practical learning methodologies to equip safety and technical personnel with global compliance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative rounded-3xl p-8 bg-white border border-navy-100/70 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left"
              >
                {/* Glowing border outline on card hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-secondary/20 rounded-3xl transition-colors duration-300" />
                
                {/* Visual Top Highlight */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${point.color.replace('/10', '/30')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon Wrapper */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${point.color} flex items-center justify-center ${point.iconColor} mb-6 transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-lg text-primary mb-3">
                  {point.title}
                </h3>

                {/* Card Body */}
                <p className="text-sm text-primary/70 font-medium leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
