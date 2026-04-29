import SectionHeading from "../shared/SectionHeading";

const departmentTiles = [
  {
    title: "Ayurveda Siddantha",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    tone: "from-black/80 via-black/30 to-transparent",
  },
  {
    title: "Shareera Rachana",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1200",
    tone: "from-slate-950/80 via-slate-900/30 to-transparent",
  },
  {
    title: "Shareera Kriya",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=1200",
    tone: "from-emerald-950/80 via-slate-900/30 to-transparent",
  },
  {
    title: "Dravyaguna",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=1200",
    tone: "from-amber-950/80 via-amber-900/30 to-transparent",
  },
  {
    title: "Rasashastra & Bhaishajya Kalpana",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    tone: "from-rose-950/80 via-slate-950/25 to-transparent",
  },
  {
    title: "Roga Nidana",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200",
    tone: "from-slate-950/70 via-slate-900/25 to-transparent",
  },
  {
    title: "Agadatantra",
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
    tone: "from-stone-950/70 via-stone-900/20 to-transparent",
  },
  {
    title: "Swasthavritta",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    tone: "from-emerald-950/80 via-emerald-900/25 to-transparent",
  },
  {
    title: "Prasooti Tantra & Stree Roga",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200",
    tone: "from-rose-950/70 via-rose-900/20 to-transparent",
  },
  {
    title: "Kaumarabhritya (Bala Roga)",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200",
    tone: "from-slate-950/65 via-slate-900/20 to-transparent",
  },
  {
    title: "Kayachikitsa",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
    tone: "from-slate-950/70 via-slate-900/20 to-transparent",
  },
  {
    title: "Panchakarma",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200",
    tone: "from-amber-950/75 via-amber-900/20 to-transparent",
  },
];

const HomeDepartments = () => {
  return (
    <section
      id="departments"
      className="relative overflow-hidden bg-[#fdfbf5] py-16 sm:py-20 lg:py-28"
    >
      {/* Dynamic Background Header */}
      <div className="absolute inset-x-0 top-0 h-120 bg-[#0f2f21] lg:h-130" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-300/40 to-transparent" />

      <div className="relative mx-auto max-w-350 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academic Wings"
          title={
            <>
              Explore Our <span className="text-amber-400">Departments</span>
            </>
          }
          description="A visual overview of the core departments shaping academic rigor and professional growth."
          align="center"
          className="mb-12 lg:mb-16 [&_h2]:text-white [&_p]:text-emerald-50/70"
        />

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {departmentTiles.map((department) => (
            <article
              key={department.title}
              className="group relative aspect-square w-full overflow-hidden rounded-4xl bg-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/30 sm:aspect-4/5 lg:aspect-square"
            >
              <img
                src={department.image}
                alt={department.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-linear-to-t ${department.tone} transition-opacity duration-500 group-hover:opacity-90`}
              />

              {/* Refined Glass Border */}
              <div className="absolute inset-0 rounded-4xl border border-white/10 ring-1 ring-inset ring-black/5" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h4 className="text-xl font-bold leading-tight text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-2xl">
                  {department.title}
                </h4>
                <div className="mt-4 h-1 w-10 origin-left scale-x-100 bg-amber-400 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-300" />
              </div>

              {/* Subtle hover overlay for depth */}
              <div className="absolute inset-0 bg-emerald-900/0 transition-colors duration-500 group-hover:bg-emerald-900/5" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeDepartments;
