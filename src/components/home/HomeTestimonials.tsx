import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../shared/SectionHeading";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "BAMS Student",
    quote:
      "The blend of academic discipline, faculty guidance, and practical exposure has given me confidence in both theory and clinical understanding.",
  },
  {
    name: "Rahul Verma",
    role: "Intern",
    quote:
      "Our hospital training environment helped me move beyond classroom concepts and understand patient care with much more clarity.",
  },
  {
    name: "Priya Mishra",
    role: "Parent",
    quote:
      "What stood out for us was the supportive environment, structured learning culture, and the seriousness with which students are guided.",
  },
  {
    name: "Dr. S. Tiwari",
    role: "Academic Mentor",
    quote:
      "The institution creates a balanced ecosystem where traditional Ayurvedic foundations and professional expectations grow side by side.",
  },
];

const HomeTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-linear-to-b from-[#123424] to-[#0f2f21] py-16 sm:py-20 lg:py-28"
    >
      {/* Optimized background blurs for mobile */}
      <div className="absolute -left-12 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px] sm:h-96 sm:w-96" />
      <div className="absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px] sm:h-96 sm:w-96" />

      <div className="mx-auto max-w-350 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Voices"
          title={
            <>
              What our <span className="text-amber-400">community says</span>
            </>
          }
          description="Student, parent, and mentor perspectives that reflect the academic culture and campus experience."
          align="center"
          className="mb-10 sm:mb-16 lg:mb-20 [&_h2]:text-white [&_p]:text-emerald-50/70"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 24 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16! sm:pb-20!"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name} className="h-auto">
              <article className="group flex h-full flex-col rounded-[2.5rem] border border-white/5 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 sm:p-8">
                {/* Visual Quote Icon */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 text-xl text-amber-400">
                  “
                </div>

                <p className="flex-1 text-[15px] leading-relaxed text-emerald-50/80 sm:text-base lg:text-lg">
                  {testimonial.quote}
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h4 className="text-lg font-bold text-white transition-colors group-hover:text-amber-300">
                    {testimonial.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-amber-200/60 sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Global Swiper Overrides */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          #testimonials .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.3) !important;
            width: 10px;
            height: 10px;
            opacity: 1;
          }
          #testimonials .swiper-pagination-bullet-active {
            background: #fbbf24 !important;
            width: 24px;
            border-radius: 5px;
          }
          #testimonials .swiper-pagination {
            bottom: 0 !important;
          }
        `,
          }}
        />
      </div>
    </section>
  );
};

export default HomeTestimonials;
