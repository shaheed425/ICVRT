import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Users, GraduationCap, Compass, ShieldCheck, Globe, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const whyChoosePoints = [
  {
    index: '01',
    icon: Award,
    title: 'Internationally Recognized Certifications',
    desc: 'Globally accepted certifications from OTHM, IOSH, OSHA, OAL and more.'
  },
  {
    index: '02',
    icon: Users,
    title: 'Expert Trainers & Industry Professionals',
    desc: 'Learn from experienced trainers with real-world industry exposure.'
  },
  {
    index: '03',
    icon: Briefcase,
    title: '100% Placement Assistance',
    desc: 'Dedicated placement support to help you launch your career globally.'
  },
  {
    index: '04',
    icon: GraduationCap,
    title: 'Practical & Job Oriented Training',
    desc: 'Hands-on training with modern facilities, case studies and live projects.'
  },
  {
    index: '05',
    icon: Compass,
    title: 'Global Career Opportunities',
    desc: 'High-demand career paths in India, Gulf, and across the world.'
  },
  {
    index: '06',
    icon: ShieldCheck,
    title: 'Student Support Every Step',
    desc: "From admission to certification and beyond - we're with you always."
  }
];

const metrics = [
  { value: "500+", label: "Students Trained And Growing", icon: GraduationCap },
  { value: "98%", label: "Success Rate In Examinations", icon: Award },
  { value: "50+", label: "Industry Partners Worldwide", icon: Users },
  { value: "10+", label: "Countries Global Reach", icon: Globe }
];

function FeatureCard({ point, innerRef }) {
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

    // Subtle 3D perspective tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        if (innerRef) innerRef(el);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl p-8 bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(10,28,58,0.05)] hover:border-secondary/35 transition-all duration-300 overflow-hidden text-center flex flex-col justify-between w-full"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {/* Top-left index badge */}
      <span className="absolute top-4 left-4 w-6 h-6 rounded-full bg-secondary/10 text-secondary text-[10px] font-black flex items-center justify-center">
        {point.index}
      </span>

      {/* Spotlight overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(220px circle at var(--mouse-x) var(--mouse-y), rgba(200, 16, 46, 0.04), transparent 80%)`
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Icon container */}
        <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary mb-5 transition-colors duration-300 group-hover:bg-secondary/10 group-hover:text-secondary group-hover:border-secondary/10 shadow-sm">
          <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-[15px] leading-snug text-primary mb-2 text-center uppercase tracking-tight">
          {point.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 font-bold text-center leading-relaxed">
          {point.desc}
        </p>

        {/* Bottom divider line */}
        <div className="w-8 h-[2.5px] bg-secondary mx-auto mt-4 transition-all duration-300 group-hover:w-12" />
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
      { y: 55, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TITLE & OVERLAPPING IMAGE COLLAGE */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs font-black uppercase tracking-widest text-secondary mb-3">
              WHY CHOOSE ICVRT?
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary tracking-tight mb-5 leading-[0.98]">
              Excellence That<br />
              <span className="text-secondary">Builds Your Future.</span>
            </h2>
            <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8 max-w-md">
              We deliver internationally recognized certifications, practical training, and real career opportunities to shape a safer and brighter tomorrow.
            </p>

            {/* Overlapping Image Collage (Fully Responsive Layout) */}
            <div className="relative h-[290px] sm:h-[340px] lg:h-[420px] w-[320px] sm:w-[380px] lg:w-[440px] mx-auto lg:mx-0 mt-6 z-10">
              
              {/* Glowing decorative curvature border backdrop overlay */}
              <div className="absolute left-[24%] bottom-[-15px] w-52 sm:w-64 h-52 sm:h-64 border-4 sm:border-[8px] border-secondary/5 rounded-full pointer-events-none -z-10" />

              {/* Image 1: Left Background (Handshake) */}
              <div className="absolute left-0 bottom-2 sm:bottom-4 w-32 sm:w-36 lg:w-44 h-40 sm:h-48 lg:h-[228px] rounded-[1.2rem] sm:rounded-[1.8rem] lg:rounded-[2.2rem] border-2 sm:border-4 lg:border-[5px] border-white shadow-md rotate-[-4deg] overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] cursor-pointer">
                <img
                  src="/assets/why_choose_left.jpg"
                  alt="Corporate handshake"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 2: Center Foreground (Safety Engineer) */}
              <div className="absolute left-[28%] bottom-0 w-[150px] sm:w-52 lg:w-52 h-[210px] sm:h-64 lg:h-64 rounded-[1.4rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border-2 sm:border-4 lg:border-[5px] border-white shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img
                  src="/assets/why_choose_center.jpg"
                  alt="ICVRT safety specialist engineer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 3: Right Background (Skyscrapers) */}
              <div className="absolute right-0 bottom-4 sm:bottom-8 w-[115px] sm:w-[140px] lg:w-[179px] h-[155px] sm:h-[180px] lg:h-[230px] rounded-[1.2rem] sm:rounded-[1.8rem] lg:rounded-[2.2rem] border-2 sm:border-4 lg:border-[5px] border-white shadow-md rotate-[4deg] overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] cursor-pointer">
                <img
                  src="/assets/why_choose_right.jpg"
                  alt="City skyscrapers visual"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Trust Card */}
              <div className="absolute left-[12%] sm:left-[20%] bottom-4 sm:bottom-6 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 p-2 sm:p-3.5 flex items-center gap-2 sm:gap-3.5 max-w-[135px] sm:max-w-[190px] animate-bounce-slow hover:scale-105 transition-transform duration-300 cursor-pointer z-20">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[7px] sm:text-[9px] text-slate-500 font-extrabold block uppercase tracking-wider leading-none">Trusted by</span>
                  <h5 className="text-[9px] sm:text-[11px] font-black text-primary leading-none mt-0.5 sm:mt-1">500+ Students</h5>
                  <div className="flex gap-0.5 text-secondary mt-0.5 sm:mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: 6 FEATURE CARDS GRID */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChoosePoints.map((point, index) => (
                <FeatureCard
                  key={index}
                  point={point}
                  index={index}
                  innerRef={(el) => (cardsRef.current[index] = el)}
                />
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS STRIP (Navy Container) */}
        <div className="w-full bg-primary rounded-[2.2rem] py-8 px-8 md:px-12 mt-20 shadow-[0_15px_40px_rgba(10,28,58,0.12)] z-20 relative overflow-hidden border border-slate-800/40">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 text-left border-r border-slate-800 last:border-0 lg:border-r lg:last:border-0 pr-2 last:pr-0 lg:justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white leading-none">
                      {metric.value}
                    </h4>
                    <span className="text-[10px] md:text-xs text-slate-300 font-bold block mt-1 leading-snug">
                      {metric.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
