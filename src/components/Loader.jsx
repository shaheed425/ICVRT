import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ShieldCheck, BookOpen } from 'lucide-react';

const statusSteps = [
  { maxVal: 25, text: "Initializing Safety Session..." },
  { maxVal: 50, text: "Verifying Accreditations (OTHM, IOSH, OAL)..." },
  { maxVal: 75, text: "Analyzing Course Catalogs..." },
  { maxVal: 95, text: "Syncing Global Placements..." },
  { maxVal: 100, text: "Safety Protocols Verified." }
];

const loaderCourses = [
  "PG Diploma in Fire & Industrial Safety",
  "Advanced Diploma in Occupational Health & Safety",
  "International Certificate in Workplace Safety",
  "Diploma in Industrial Environmental Management",
  "Executive Certificate in Risk Assessment & Safety Audit",
  "Diploma in Construction Safety Management"
];

export default function Loader({ onComplete }) {
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const contentRef = useRef(null);
  const barRef = useRef(null);
  
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Safety Session...");

  useEffect(() => {
    // Disable scrolling during load
    document.body.style.overflow = 'hidden';

    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Step 1: Fade out and shrink the center content card
        gsap.to(contentRef.current, {
          opacity: 0,
          scale: 0.92,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            // Step 2: Slide left and right curtain gates to reveal home page
            const splitTl = gsap.timeline({
              onComplete: () => {
                document.body.style.overflow = '';
                if (onComplete) onComplete();
              }
            });

            splitTl.to(leftPanelRef.current, {
              x: '-100%',
              duration: 1.2,
              ease: 'power3.inOut'
            }, 0);

            splitTl.to(rightPanelRef.current, {
              x: '100%',
              duration: 1.2,
              ease: 'power3.inOut'
            }, 0);
          }
        });
      }
    });

    // Animate progress value
    tl.to(obj, {
      val: 100,
      duration: 4.2, // Slightly increased duration to let users read the courses
      ease: 'power2.out',
      onUpdate: () => {
        const currentVal = Math.floor(obj.val);
        setProgress(currentVal);
        
        // Find matching status based on current progress
        const step = statusSteps.find(s => currentVal <= s.maxVal);
        if (step) {
          setStatus(step.text);
        }
      }
    });

    // Fill progress bar width
    tl.to(barRef.current, {
      width: '100%',
      duration: 4.2,
      ease: 'power2.out'
    }, 0);

  }, [onComplete]);

  // Compute active course based on loading progress
  const activeCourseIndex = Math.min(
    Math.floor((progress / 100) * loaderCourses.length),
    loaderCourses.length - 1
  );

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden pointer-events-none">
      
      {/* LEFT PANEL / GATE */}
      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#071120] border-r border-white/5 pointer-events-auto"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[250px] h-[250px] bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      {/* RIGHT PANEL / GATE */}
      <div
        ref={rightPanelRef}
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#071120] border-l border-white/5 pointer-events-auto"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] bg-blue-600/5 rounded-full blur-[80px]" />
      </div>

      {/* CENTRAL LOGO & COUNTER CONTENT PANEL */}
      <div
        ref={contentRef}
        className="w-full max-w-[280px] sm:max-w-md px-4 relative z-10 flex flex-col items-center pointer-events-auto"
      >
        {/* Stylized Brand Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-end select-none">
            <div className="flex flex-col items-center mr-1">
              {/* Red Dot */}
              <div className="w-[6px] h-[6px] rounded-full bg-secondary mb-[1.5px] shadow-sm" />
              {/* Red Curved Stem */}
              <div className="w-[6px] h-[18px] bg-secondary rounded-b-[2px] rounded-tl-[2px] transform skew-x-[-1.5deg]" />
            </div>
            {/* CVRT text */}
            <span className="font-display font-black text-2xl sm:text-3.5xl tracking-tight leading-none text-white">
              CVRT
            </span>
          </div>
        </div>

        {/* Dynamic Percentage Counter */}
        <div className="font-display font-black text-4xl sm:text-6xl text-white mb-5 tracking-tighter">
          {progress}%
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2.5px] bg-white/10 rounded-full overflow-hidden mb-4">
          <div ref={barRef} className="h-full w-0 bg-secondary rounded-full" />
        </div>

        {/* Live Loading Status Checker */}
        <div className="flex items-center gap-1.5 text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest text-center min-h-[18px] mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
          <span>{status}</span>
        </div>

        {/* Dynamic Course Title Showcase Panel */}
        <div className="w-full py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center gap-1.5 transition-all duration-300">
          <div className="flex items-center gap-1 text-[8px] sm:text-[9px] font-extrabold text-secondary tracking-widest uppercase">
            <BookOpen className="w-3 h-3" />
            <span>Loading Program Curriculum</span>
          </div>
          <div className="min-h-[35px] flex items-center justify-center w-full">
            <span
              key={activeCourseIndex}
              className="text-[10px] sm:text-xs font-extrabold text-slate-200 text-center leading-normal uppercase tracking-wider animate-[fadeInUp_0.4s_ease-out_both]"
            >
              {loaderCourses[activeCourseIndex]}
            </span>
          </div>
        </div>

      </div>

      {/* Dynamic styles for course change slide up */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
