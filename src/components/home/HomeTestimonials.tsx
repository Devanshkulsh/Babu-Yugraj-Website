import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../shared/SectionHeading";

const videos = [
  {
    title: "Student Experience",
    url: "https://www.youtube.com/embed/pfggGD726WU?si=qYt2e0dy0deM2P7O",
  },
  {
    title: "Student Experience",
    url: "https://www.youtube.com/embed/-_P-Es6u2Nw?si=2AwGkoA74szZM3Fi",
  },
  {
    title: "Student Experience",
    url: "https://www.youtube.com/embed/uCytSIteB9E?si=Agjfa-eq_bxzOHrG",
  },
  {
    title: "Management's Message",
    url: "https://www.youtube.com/embed/yl_-nQSrRls?si=Q3mvaJzseSvb8ATl",
  },
  {
    title: "Vice-Principal Interaction",
    url: "https://www.youtube.com/embed/rotCmVan3aU?si=Gv2i3S89ewl0W8mU",
  },
  {
    title: "Faculty Experience",
    url: "https://www.youtube.com/embed/WPswIciEdqw?si=xzU41PLGbeP1aLF4",
  },
  {
    title: "Faculty Experience",
    url: "https://www.youtube.com/embed/KznReWkGc84?si=OoSS2qSGsNRMd-1y",
  },
  {
    title: "Faculty Experience",
    url: "https://www.youtube.com/embed/4MjouAJHjt0?si=Ti6QbjJx-Sdrqmku",
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
              Watch our <span className="text-amber-400">community voices</span>
            </>
          }
          description="Real video stories from students, parents, and mentors. Replace each YouTube link in the component with your preferred videos."
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
          {videos.map((video, index) => (
            <SwiperSlide key={`${video.title}-${index}`} className="h-auto">
              <article className="group flex h-full flex-col rounded-[2.5rem] border border-white/5 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 sm:p-5">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={video.url}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <h4 className="text-base font-bold text-white transition-colors group-hover:text-amber-300 sm:text-lg">
                    {video.title}
                  </h4>
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
