import React, { useState } from 'react';
import { Focus, Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Active Fire Fighting Drill',
      tag: 'Field Training',
      size: 'col-span-1 md:row-span-2 md:col-span-2 h-[320px] md:h-[480px]',
      image: '/assets/training_experience.png',
    },
    {
      id: 2,
      title: 'VR Hazardous Spill Simulation',
      tag: 'Tech Lab',
      size: 'col-span-1 md:col-span-1 h-[230px]',
      image: '/assets/hero_illustration.png',
    },
    {
      id: 3,
      title: 'Chemical Safety Suit Guide',
      tag: 'OHS Lab',
      size: 'col-span-1 md:col-span-1 h-[230px]',
      image: '/assets/training_experience.png',
    },
    {
      id: 4,
      title: 'Graduation Ceremony 2026',
      tag: 'Felicitation',
      size: 'col-span-1 md:col-span-2 h-[230px]',
      image: '/assets/hero_illustration.png',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Inside ICVRT
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
            Our Training Campus In Action
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium">
            Explore actual moments of active fire control, regulatory labs, industrial compliance testing, and campus life.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`${item.size} group relative rounded-3xl overflow-hidden cursor-pointer bg-navy-950 border border-navy-100 shadow-md`}
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Dark Vignette & Details Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left pointer-events-none" />

              <div className="absolute inset-x-6 bottom-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-left flex justify-between items-end">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-secondary text-white text-[9px] font-bold uppercase tracking-wider mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-bold text-white text-base md:text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)} />
          <div className="relative max-w-4xl w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl z-10 border border-white/10 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-white bg-black/40 hover:bg-white/15 transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 text-left z-20">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-secondary text-white text-[9px] font-bold uppercase tracking-wider mb-2">
                {selectedImage.tag}
              </span>
              <h3 className="font-display font-bold text-white text-lg md:text-xl">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
