import React, { useState, useEffect, useRef } from 'react';
import { Clock, BookOpen, Layers, ArrowUpRight, GraduationCap, Flame, ShieldAlert, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Courses() {
  const [activeTab, setActiveTab] = useState('All');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const categories = ['All', 'Safety Diplomas', 'International Certifications', 'Industrial Programs'];

  const coursesData = [
    {
      id: 1,
      title: 'PG Diploma in Fire & Industrial Safety',
      category: 'Safety Diplomas',
      duration: '1 Year',
      mode: 'Hybrid (Classroom + Lab)',
      desc: 'Advanced post-graduate training program focusing on chemical hazards, high-rise fire control, risk assessment, and standard evacuation protocols.',
      icon: Flame,
      color: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
      image: '/assets/training_experience.png', // Fallback to premium experience image
    },
    {
      id: 2,
      title: 'Advanced Diploma in Occupational Health & Safety',
      category: 'Safety Diplomas',
      duration: '6 Months',
      mode: 'Classroom Physical',
      desc: 'In-depth analysis of workplace hygiene, accident investigation, hazard isolation, and regulatory OHS policies.',
      icon: ShieldAlert,
      color: 'bg-red-500/10 text-red-600 border-red-500/20',
      image: '/assets/training_experience.png',
    },
    {
      id: 3,
      title: 'International Certificate in Workplace Safety (NEBOSH Aligned)',
      category: 'International Certifications',
      duration: '3 Months',
      mode: 'Online Interactive',
      desc: 'Industry standard certification covering fundamental principles of occupational hazard mitigation and risk reporting.',
      icon: Award,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      image: '/assets/hero_illustration.png',
    },
    {
      id: 4,
      title: 'Diploma in Industrial Environmental Management',
      category: 'Industrial Programs',
      duration: '1 Year',
      mode: 'Hybrid (Classroom + Site)',
      desc: 'Focuses on factory effluents, air pollution mitigation control, environmental auditing, and corporate compliance standards.',
      icon: Layers,
      color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
      image: '/assets/hero_illustration.png',
    },
    {
      id: 5,
      title: 'Executive Certificate in Risk Assessment & Safety Audit',
      category: 'International Certifications',
      duration: '2 Months',
      mode: 'Online Live',
      desc: 'Highly specialized program designed for safety professionals targeting ISO audits, HAZOP, and executive risk reviews.',
      icon: GraduationCap,
      color: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      image: '/assets/training_experience.png',
    },
    {
      id: 6,
      title: 'Diploma in Construction Safety Management',
      category: 'Industrial Programs',
      duration: '6 Months',
      mode: 'Classroom Physical',
      desc: 'Comprehensive training for building sites, heavy equipment handling, scaffolding inspection, and structural hazard isolation.',
      icon: BookOpen,
      color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      image: '/assets/training_experience.png',
    },
  ];

  const filteredCourses = activeTab === 'All'
    ? coursesData
    : coursesData.filter(course => course.category === activeTab);

  useEffect(() => {
    // GSAP grid item fade on update
    const items = gridRef.current?.children;
    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [activeTab]);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-24 bg-navy-50 relative overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute top-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-secondary/5 glow-blob" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
              Global Programs
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
              Premium Courses Catalog
            </h2>
            <p className="text-primary/70 text-sm md:text-base font-medium">
              Find custom training solutions vetted by top industrial panels and structured for direct placement.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 lg:gap-3 bg-white p-1.5 rounded-2xl border border-navy-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-md'
                    : 'text-primary/70 hover:text-primary hover:bg-navy-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course) => {
            const CourseIcon = course.icon;
            return (
              <div
                key={course.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-navy-100/80 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 text-left"
              >
                
                {/* Course Card Image Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-primary border border-white/40">
                      <GraduationCap className="w-3.5 h-3.5 text-secondary" />
                      <span>{course.category}</span>
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent pointer-events-none" />
                </div>

                {/* Course Core Details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Course Category / Icon Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl border ${course.color}`}>
                        <CourseIcon className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-4 text-xs font-semibold text-primary/60">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{course.duration}</span>
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-200" />
                        <span>{course.mode}</span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-display font-bold text-lg md:text-xl text-primary group-hover:text-secondary transition-colors duration-300 mb-3 leading-snug">
                      {course.title}
                    </h3>

                    {/* Course Description */}
                    <p className="text-sm text-primary/70 font-medium leading-relaxed mb-6">
                      {course.desc}
                    </p>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-6 border-t border-navy-100 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:text-primary transition-colors group/btn"
                    >
                      <span>Apply Now</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                    
                    <a
                      href="#contact"
                      className="text-xs font-semibold text-primary/50 hover:text-primary transition-colors"
                    >
                      Syllabus Details
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
