import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Helper to draw an image centered with "cover" aspect-ratio cropping
function drawImageProp(ctx, img, x, y, w, h, offsetX = 0.5, offsetY = 0.5) {
  const iw = img.width;
  const ih = img.height;
  const r = Math.min(w / iw, h / ih);
  let nw = iw * r;
  let nh = ih * r;
  let ar = 1;

  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
  nw *= ar;
  nh *= ar;

  let cw = iw / (nw / w);
  let ch = ih / (nh / h);

  let cx = (iw - cw) * offsetX;
  let cy = (ih - ch) * offsetY;

  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

export default function Hero() {
  const stickyFrameRef = useRef(null);
  const canvasRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const totalFrames = 221;
  const imagesRef = useRef([]);
  const frameObjRef = useRef({ frame: 0 });

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    // Preload all 221 Full HD frames (using v12 to clear browser caches)
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = (i + 1).toString().padStart(3, '0');
      img.src = `/images/herosection/ezgif-frame-${frameNum}.png?v=12`;

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));

        if (loadedCount === totalFrames) {
          imagesRef.current = loadedImages;
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          imagesRef.current = loadedImages;
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Size canvas to viewport dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = () => {
      const currentFrameIndex = frameObjRef.current.frame;
      const img = imagesRef.current[currentFrameIndex];
      if (img && img.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Force high-quality interpolation scaling
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';

        // Draw the image at 100% scale to cover the full viewport
        // This removes the bordered box look and makes the layout borderless and clean
        drawImageProp(context, img, 0, 0, canvas.width, canvas.height, 0.5, 0.5);
      }
    };

    // Draw first frame
    render();

    // GSAP ScrollTrigger timeline to orchestrate scroll sequence & text overlays
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyFrameRef.current,
        start: 'top top',
        end: '+=4000', // Scroll space
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          // Map scroll progress directly to frame index
          const index = Math.min(
            totalFrames - 1,
            Math.floor(self.progress * totalFrames)
          );
          if (frameObjRef.current.frame !== index) {
            frameObjRef.current.frame = index;
            render();
          }
        }
      }
    });

    // Scene 1: Initial headline fades out and lifts up during initial scroll (0 to 25%)
    tl.to(text1Ref.current, {
      opacity: 0,
      scale: 0.85,
      y: -60,
      duration: 1
    }, 0);

    // Scene 2: Handshake headline fades in and scales up during middle scroll (40% to 80%)
    tl.fromTo(text2Ref.current,
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 },
      1.5 // Delay start until Scene 1 completes
    );

    // Scene 2 exit: Fades out at the end of the scroll
    tl.to(text2Ref.current, {
      opacity: 0,
      y: -40,
      scale: 0.98,
      duration: 1
    }, 3.2);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      tl.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  return (
    <section
      ref={stickyFrameRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#d6d1ce] z-10"
    >
      {/* Luxury Loading Backdrop */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#d6d1ce] z-50">
          <div className="flex flex-col items-center gap-5">
            <div className="w-12 h-12 rounded-full border-2 border-secondary/20 border-t-secondary animate-spin" />
            <div className="flex flex-col items-center">
              <span className="font-display font-black text-lg text-primary uppercase tracking-[0.2em]">ICVRT</span>
              <span className="text-[10px] text-navy-600 font-bold tracking-widest mt-2 uppercase">
                Loading Experience {loadingProgress}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TYPOGRAPHIC OVERLAY 1: Landing Headline (Fades out on scroll) */}
      {isLoaded && (
        <div
          ref={text1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 select-none px-6 mt-20"
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[5.5rem] text-primary/10 tracking-tight uppercase text-center leading-[0.95] transition-all">
            Learn Safety.<br />
            <span className="text-secondary/15">Build The Future.</span>
          </h1>
          <p className="text-[9px] sm:text-xs font-bold tracking-[0.35em] uppercase text-primary/45 mt-4 text-center">
            International Council of Vocational and Research Training
          </p>
        </div>
      )}

      {/* TYPOGRAPHIC OVERLAY 2: Handshake Headline (Fades in when students meet) */}
      {isLoaded && (
        <div
          ref={text2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 select-none px-6 mt-20 opacity-0"
        >
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-[4.5rem] text-primary/15 tracking-tight uppercase text-center leading-[1.0] transition-all">
            Empowering Careers.<br />
            <span className="text-secondary/20">Certified Worldwide.</span>
          </h2>
          <p className="text-[9px] sm:text-xs font-bold tracking-[0.3em] uppercase text-primary/50 mt-4 text-center">
            Voted Leading Global Industrial Training Framework
          </p>
        </div>
      )}

      {/* FLOATING ACCREDITATION BADGE (Covers the watermark region in the bottom-right corner) */}
      {isLoaded && (
        <div className="absolute bottom-12 right-8 md:right-16 lg:right-24 bg-white/20 backdrop-blur-md border border-white/25 rounded-2xl p-4 shadow-[0_12px_35px_rgba(10,28,58,0.05)] flex items-center gap-3.5 z-20 pointer-events-none select-none max-w-[280px]">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white shrink-0 shadow-sm animate-pulse">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[8px] font-bold tracking-[0.2em] text-primary/70 uppercase block">Accredited Center</span>
            <h3 className="font-display font-black text-xs text-primary tracking-tight uppercase leading-none mt-0.5">ISO 45001:2018</h3>
            <p className="text-[9px] text-primary/60 font-semibold leading-tight mt-1">International Council Compliance Verifiable</p>
          </div>
        </div>
      )}

      {/* Frame Sequence Canvas */}
      {isLoaded && (
        <canvas
          ref={canvasRef}
          className="w-full h-full block bg-[#d6d1ce] z-10 relative"
          style={{ imageRendering: 'auto' }}
        />
      )}
    </section>
  );
}
