import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Users, GraduationCap, Compass, Landmark, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BentoCard({ point, index, innerRef }) {
  const cardRef = useRef(null);
  const Icon = point.icon;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Calculate 3D tilt angles (max 4.5 degrees tilt for physical feedback)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        if (innerRef) innerRef(el);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-3xl p-8 bg-white/70 backdrop-blur-sm border border-navy-100/50 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_25px_50px_rgba(10,28,58,0.07)] hover:border-secondary/40 transition-all duration-500 ease-out overflow-hidden text-left flex flex-col justify-between ${point.gridClass}`}
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {/* Spotlight overlay (Stripe style) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(15, 95, 255, 0.08), transparent 80%)`
        }}
      />

      {/* Tech grid texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.1px,transparent_1.1px)] [background-size:18px_18px] opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Giant Backdrop Card Number */}
      <div className="absolute bottom-2 right-8 font-display font-black text-8xl lg:text-[7rem] text-primary/[0.03] group-hover:text-secondary/[0.07] transition-colors duration-500 select-none pointer-events-none z-0 leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10">
        {/* Icon Wrapper - slides up and scales on hover */}
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${point.color} flex items-center justify-center ${point.iconColor} mb-6 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1.5 shadow-sm`}>
          <Icon className="w-5 h-5" />
        </div>

        {/* Card Title */}
        <h3 className="font-display font-bold text-xl text-primary mb-3 tracking-tight">
          {point.title}
        </h3>

        {/* Card Body */}
        <p className="text-sm text-primary/70 font-medium leading-relaxed max-w-xl">
          {point.desc}
        </p>
      </div>

      {/* Top Highlight line */}
      <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Interactive top-right corner indicator - slides out diagonally on hover */}
      <div className="absolute top-8 right-8 text-primary/10 group-hover:text-secondary group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-300 pointer-events-none">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </div>
  );
}

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
        stagger: 0.12,
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
      desc: 'Exclusive tie-ups with leading chemical plants, construction firms, and international industrial networks. Securing premium career placement channels across the GCC, Europe, and Asia for certified safety personnel.',
      color: 'from-blue-500/10 to-indigo-500/10',
      iconColor: 'text-blue-600',
      gridClass: 'col-span-1 lg:col-span-2'
    },
    {
      icon: Award,
      title: 'International Certifications',
      desc: 'Accredited with global safety standards and local directives to make your certification globally verifiable and compliant.',
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-600',
      gridClass: 'col-span-1'
    },
    {
      icon: Users,
      title: 'Veteran Industry Trainers',
      desc: 'Learn directly from certified HSE managers and fire safety heads with decades of on-field operational experience.',
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600',
      gridClass: 'col-span-1'
    },
    {
      icon: GraduationCap,
      title: 'Flexible & Modular Learning',
      desc: 'Integrated hybrid schedules combining online conceptual theory with rigorous physical lab practicals. Customize semesters to align with your busy professional schedule.',
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-600',
      gridClass: 'col-span-1 lg:col-span-2'
    },
    {
      icon: Compass,
      title: 'Continuous Career Guidance',
      desc: 'Individual mentorship sessions, mock interviews, standard resume optimization, and safety industry orientations.',
      color: 'from-red-500/10 to-rose-500/10',
      iconColor: 'text-rose-600',
      gridClass: 'col-span-1'
    },
    {
      icon: Landmark,
      title: 'Affordable Premium Education',
      desc: 'World-class training facilities with budget-conscious pricing models and installment payment structures. Get elite training without heavy financial burdens.',
      color: 'from-cyan-500/10 to-sky-500/10',
      iconColor: 'text-cyan-600',
      gridClass: 'col-span-1 lg:col-span-2'
    },
  ];

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-28 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Background radial details */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Why ICVRT
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight mb-4 leading-tight">
            Unrivaled Standards in Professional Vocational Training
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium">
            Over a decade of refining practical learning methodologies to equip safety and technical personnel with global compliance.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <BentoCard
              key={index}
              point={point}
              index={index}
              innerRef={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
