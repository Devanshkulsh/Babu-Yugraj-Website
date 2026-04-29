import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
    title: "Welcome to Babu Yugraj Singh",
    subtitle: "Nurturing the next generation of medical professionals with excellence and compassion.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    title: "Advanced Medical Education",
    subtitle: "State-of-the-art facilities and experienced faculty to guide your medical journey.",
  },
  {
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop",
    title: "Shape Your Future",
    subtitle: "Join a community dedicated to leadership, growth, and medical innovation.",
  }
];

const Hero = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] lg:h-[85vh]">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            {/* Image Overlay for better text contrast */}
            <div className="absolute inset-0 z-10 bg-black/40" />
            
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute h-full w-full object-cover"
            />

            {/* Content Container */}
            <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
              <div className="max-w-200 space-y-4 sm:space-y-6">
                <h1 className="animate-fade-up text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="mx-auto max-w-2xl text-base font-medium text-white/90 sm:text-xl lg:text-2xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                  <a
                    href="#admissions"
                    className="w-full rounded-full bg-amber-400 px-8 py-3 text-lg font-bold text-slate-900 transition-transform hover:scale-105 active:scale-95 sm:w-auto"
                  >
                    Explore Programs
                  </a>
                  <a
                    href="#about"
                    className="w-full rounded-full border-2 border-white bg-white/10 px-8 py-3 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-emerald-900 sm:w-auto"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Bullets */}
      <style>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #fbbf24 !important; /* amber-400 */
          opacity: 1;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
