import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Liam Henderson',
      role: 'Safety Coordinator, BP UK',
      course: 'NEBOSH & OHS International Certificate',
      country: 'United Kingdom',
      flag: '🇬🇧',
      stars: 5,
      quote: 'The HSE coursework at ICVRT was exceptionally detailed. The instructors brought their real-world Gulf experience into the laboratory drills, preparing me directly for my safety role at British Petroleum.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Rajesh Nair',
      role: 'HSE Manager, ADNOC UAE',
      course: 'PG Diploma in Fire & Industrial Safety',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      stars: 5,
      quote: 'I highly recommend the PG Diploma. The simulation laboratories and industrial mock fire drills gave me massive practical confidence. The validation of certificates was seamless for my UAE visa.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Environmental Officer, Sembcorp',
      course: 'Diploma in Industrial Environmental Management',
      country: 'Singapore',
      flag: '🇸🇬',
      stars: 5,
      quote: 'ICVRT\'s environmental auditing modules are state-of-the-art. The hands-on training on effluent treatment and air emissions control matched the exact legal compliance requirements in Singapore.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Abdul Rahman',
      role: 'Rig Safety Supervisor, Aramco',
      course: 'Advanced Diploma in Occupational Health & Safety',
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      stars: 5,
      quote: 'The scaffolding and heavy rigging safety training modules are extremely detailed. The syllabus aligns perfectly with Saudi Aramco\'s strict OHS rules. It was the best career decision I made.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
  ];

  return (
    <section className="py-24 bg-navy-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F5FFF_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Alumni Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
            Trusted by Global Safety Professionals
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium">
            Read stories of student success and placement across leading petrochemical and civil organizations globally.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative px-0 lg:px-8">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
            navigation={{
              nextEl: '.custom-swiper-next',
              prevEl: '.custom-swiper-prev',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group flex flex-col justify-between h-full rounded-3xl p-8 bg-white border border-navy-100/70 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:border-secondary/20 transition-all duration-300">
                  <div>
                    {/* Star Rating & Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(test.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-secondary/15 fill-current" />
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mb-8 italic text-left">
                      "{test.quote}"
                    </p>
                  </div>

                  {/* Student profile footer */}
                  <div className="flex items-center gap-4 pt-6 border-t border-navy-100/60">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20"
                    />
                    <div className="text-left">
                      <h4 className="font-display font-bold text-sm text-primary flex items-center gap-1.5">
                        <span>{test.name}</span>
                        <span title={test.country}>{test.flag}</span>
                      </h4>
                      <p className="text-xs text-secondary font-bold">{test.role}</p>
                      <p className="text-[10px] text-navy-400 font-medium">{test.course}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="hidden lg:flex justify-between absolute inset-y-1/2 -inset-x-4 pointer-events-none transform -translate-y-12 z-20">
            <button className="custom-swiper-prev w-12 h-12 rounded-full bg-white border border-navy-200 flex items-center justify-center text-primary hover:text-secondary hover:border-secondary shadow-md hover:scale-105 pointer-events-auto transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="custom-swiper-next w-12 h-12 rounded-full bg-white border border-navy-200 flex items-center justify-center text-primary hover:text-secondary hover:border-secondary shadow-md hover:scale-105 pointer-events-auto transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Custom Swiper Pagination wrapper to match the style */}
          <div className="custom-swiper-pagination flex justify-center gap-2 mt-4" />
        </div>

      </div>
    </section>
  );
}
