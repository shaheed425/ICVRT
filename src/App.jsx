import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import LearningExperience from './components/LearningExperience';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBlobs from './components/FloatingBlobs';
import Loader from './components/Loader';

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const onRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onRaf);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-primary antialiased font-sans selection:bg-secondary selection:text-white">
      {/* Intro Loading Screen */}
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

      {/* Background Glowing Blobs */}
      <FloatingBlobs />

      {/* Global Navigation */}
      <Navbar />

      {/* Structured Sections */}
      <main>
        <Hero setSearchQuery={setSearchQuery} />
        <Stats />
        <WhyChooseUs />
        <Courses searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Timeline />
        <LearningExperience />
        <Testimonials />
        <Partners />
        <Gallery />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
