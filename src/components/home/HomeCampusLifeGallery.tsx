import SectionHeading from "../shared/SectionHeading";

const galleryItems = [
  {
    title: "Academic Sessions",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Campus Community",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Herbal Learning Spaces",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Clinical Training",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Student Engagement",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Focused Learning",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
  },
];

const HomeCampusLifeGallery = () => {
  return (
    <section
      id="campus-life"
      className="bg-[linear-gradient(180deg,#fffdf8_0%,#f6f4ee_100%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-350 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Campus Life"
          title="Moments that shape life beyond the classroom"
          description="A glimpse into the daily rhythm of learning, collaboration, practical training, and the vibrant campus experience."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group relative aspect-4/3 overflow-hidden rounded-4xl border border-white/30 bg-slate-200 shadow-lg shadow-slate-900/5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-amber-200 backdrop-blur-sm">
                  Gallery
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCampusLifeGallery;
