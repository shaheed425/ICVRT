import React, { useEffect, useRef } from 'react';
import { UserCheck, Award, TrendingUp, Cpu, Landmark } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      title: '01. Instant Application & Counseling',
      subtitle: 'Admission Phase',
      desc: 'Submit your online profile. Our executive safety panel evaluates your educational credentials and suggests matching courses matching your career roadmap.',
      icon: UserCheck,
      color: 'bg-blue-500/10 text-blue-600 border-blue-500/30',
    },
    {
      title: '02. Hands-on Rigorous Training',
      subtitle: 'Technical Phase',
      desc: 'Undergo practical drills in specialized safety laboratories, industrial fire safety yards, and immersive simulator-guided walkthroughs.',
      icon: Cpu,
      color: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    },
    {
      title: '03. Global Standard Assessment',
      subtitle: 'Certification Phase',
      desc: 'Qualify through standard safety examinations and research assessments designed around international OHS compliance policies.',
      icon: Award,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
    },
    {
      title: '04. Industrial Internship Alignment',
      subtitle: 'Exposure Phase',
      desc: 'Get deployed on-site with partners in chemical manufacturing, marine construction, or fire control divisions to gather critical on-field experience.',
      icon: Landmark,
      color: 'bg-purple-500/10 text-purple-600 border-purple-500/30',
    },
    {
      title: '05. High-End Career Placement',
      subtitle: 'Success Phase',
      desc: 'Our placement team channels your profile to our certified corporate partners across the Gulf, Europe, and Asia for direct recruitment.',
      icon: TrendingUp,
      color: 'bg-rose-500/10 text-rose-600 border-rose-500/30',
    },
  ];

  useEffect(() => {
    // Animate the timeline progress bar
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    // Stagger step reveals
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/5 glow-blob" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 glow-blob" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Admissions Flow
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
            The Roadmap to Placement Success
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium">
            From the moment you register down to your final corporate placement, we structure your technical trajectory.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Timeline Background Track Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-navy-100 transform md:-translate-x-1/2" />
          
          {/* Animated Glow Line */}
          <div
            ref={lineRef}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary to-accent origin-top transform md:-translate-x-1/2 z-10"
          />

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={idx}
                  ref={(el) => (stepsRef.current[idx] = el)}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Step Connector Marker */}
                  <div className="absolute left-[20px] md:left-1/2 top-2 w-[42px] h-[42px] rounded-full bg-white border-2 border-navy-200 transform md:-translate-x-1/2 flex items-center justify-center z-20 group shadow-md">
                    <div className="w-5 h-5 rounded-full bg-navy-100 group-hover:bg-secondary transition-colors duration-300 flex items-center justify-center">
                      <span className="text-[10px] font-black text-primary group-hover:text-white">
                        {idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Step Detail Content Card */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-12 text-left">
                    <div className="group rounded-3xl p-8 bg-white border border-navy-100/70 hover:border-secondary/20 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] transition-all duration-300">
                      
                      {/* Step Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-2.5 rounded-xl ${step.color}`}>
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-secondary">
                            {step.subtitle}
                          </span>
                          <h3 className="font-display font-extrabold text-base md:text-lg text-primary leading-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Step Body */}
                      <p className="text-xs md:text-sm text-primary/70 font-medium leading-relaxed">
                        {step.desc}
                      </p>

                    </div>
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
