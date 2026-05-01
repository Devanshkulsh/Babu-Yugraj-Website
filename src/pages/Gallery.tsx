import { useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";

type GalleryItem = {
  title: string;
  image: string;
  note: string;
};

type GalleryCategory = {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  items: GalleryItem[];
};

const galleryCategories: GalleryCategory[] = [
  {
    id: "foundational-labs",
    label: "Foundational Labs",
    eyebrow: "Core Academic Study",
    description:
      "These labs build the foundation of Ayurvedic learning through anatomy, physiology, classical texts, and medicinal substance study.",
    items: [
      {
        title: "Rachna Sharir Lab",
        image: "/labs/RachanaSharir/RachanaSharir1.jpg",
        note: "Anatomical learning space for structural understanding and guided study.",
      },
      {
        title: "Samhita Siddhant Evam Sanskrit Lab",
        image:
          "/labs/SamhitaSiddhantEvumSanskrit/SamhitaSiddhantEvumSanskrit1.jpg",
        note: "Classical Ayurvedic concepts and Sanskrit-oriented academic study.",
      },
      {
        title: "Kriya Sharir Lab",
        image: "/labs/KriyaSharir/KriyaSharir1.jpg",
        note: "Practical support for physiological principles and academic demonstration.",
      },
      {
        title: "Dravyaguna Vigyan Lab",
        image: "/labs/DravyagunaVigyan/DravyagunaVigyan1.jpg",
        note: "Medicinal plant and substance-based learning through observation and identification.",
      },
      {
        title: "Rachna Sharir Practical View",
        image: "/labs/RachanaSharir/RachanaSharir4.jpg",
        note: "A closer look at the department's practical teaching environment.",
      },
      {
        title: "Samhita Learning Section",
        image:
          "/labs/SamhitaSiddhantEvumSanskrit/SamhitaSiddhantEvumSanskrit4.jpg",
        note: "A focused academic setting rooted in classical Ayurvedic study.",
      },
    ],
  },
  {
    id: "pharmacy-diagnostics",
    label: "Pharmacy & Diagnostics",
    eyebrow: "Applied Analysis",
    description:
      "This category highlights the labs that support Ayurvedic formulation, practical analysis, pathology, and diagnostic learning.",
    items: [
      {
        title: "Ras Shastra Evam Bhaishajya Kalpana Lab",
        image:
          "/labs/RasShastraEvamBhaishajyaKalpana/RasShastraEvamBhaishajyaKalpana1.jpg",
        note: "Medicine preparation, pharmaceutical training, and formulation practice.",
      },
      {
        title: "Roga Nidan Evam Vikriti Vigyan Lab",
        image:
          "/labs/RogaNidanEvamVikritiVigyan/RogaNidanEvamVikritiVigyan1.jpg",
        note: "Diagnostic and pathology-focused practical learning environment.",
      },
      {
        title: "Agad Tantra Lab",
        image: "/labs/AgadTantra/agadTantra1.jpg",
        note: "Toxicology and medico-legal academic exposure through department facilities.",
      },
      {
        title: "Ras Shastra Practical Setup",
        image:
          "/labs/RasShastraEvamBhaishajyaKalpana/RasShastraEvamBhaishajyaKalpana6.jpg",
        note: "Hands-on infrastructure supporting Ayurvedic medicine preparation.",
      },
      {
        title: "Diagnostic Training Space",
        image:
          "/labs/RogaNidanEvamVikritiVigyan/RogaNidanEvamVikritiVigyan4.jpg",
        note: "A practical view of training support for disease analysis and observation.",
      },
      {
        title: "Agad Tantra Department View",
        image: "/labs/AgadTantra/agadTantra5.jpg",
        note: "Department facilities aligned with toxicology-oriented study.",
      },
    ],
  },
  {
    id: "wellness-therapy",
    label: "Wellness & Therapy",
    eyebrow: "Preventive And Therapeutic Practice",
    description:
      "These labs reflect the institution's focus on preventive care, therapeutic procedures, and internal Ayurvedic treatment learning.",
    items: [
      {
        title: "Swasthavritta Evam Yoga Lab",
        image: "/labs/SwasthavrittaEvamYoga/SwasthavrittaEvamYoga1.jpg",
        note: "A preventive-health and yoga-centered teaching environment.",
      },
      {
        title: "Panchkarma Lab",
        image: "/labs/Panchakarma/Panchakarma1.jpg",
        note: "Practical exposure to classical Panchkarma procedures and setups.",
      },
      {
        title: "Kaya Chikitsa Lab",
        image: "/labs/KayaChikitsa/KayaChikitsa1.jpg",
        note: "A clinical medicine learning environment supporting internal Ayurvedic study.",
      },
      {
        title: "Panchkarma Practical Room",
        image: "/labs/Panchakarma/Panchakarma3.jpg",
        note: "Therapeutic practice space aligned with Panchkarma training.",
      },
      {
        title: "Swasthavritta Department View",
        image: "/labs/SwasthavrittaEvamYoga/SwasthavrittaEvamYoga4.jpg",
        note: "Wellness-focused learning support through department facilities.",
      },
      {
        title: "Kaya Chikitsa Academic Space",
        image: "/labs/KayaChikitsa/KayaChikitsa3.jpg",
        note: "Applied learning support for Ayurvedic medicine and treatment concepts.",
      },
    ],
  },
  {
    id: "specialty-labs",
    label: "Specialty Labs",
    eyebrow: "Clinical Specializations",
    description:
      "This section brings together the specialty departments that support surgical, ENT, pediatric, and women's health teaching.",
    items: [
      {
        title: "Shalya Tantra Lab",
        image: "/labs/ShalyaTantra/ShalyaTantra1.jpg",
        note: "Department infrastructure supporting surgical and para-surgical teaching.",
      },
      {
        title: "Shalakya Lab",
        image: "/labs/Shalakya/Shalakya1.jpg",
        note: "Practical support for eye, ENT, and allied Shalakya studies.",
      },
      {
        title: "Bal Rog Lab",
        image: "/labs/BalRog/balRog1.jpg",
        note: "Pediatric Ayurvedic learning environment for child health study.",
      },
      {
        title: "Prasuti & Stri Roga Lab",
        image: "/labs/Prasuti&StriRoga/prasutiAndStriRoga1.jpg",
        note: "Obstetrics and gynecology support through dedicated department facilities.",
      },
      {
        title: "Shalakya Department View",
        image: "/labs/Shalakya/Shalakya4.jpg",
        note: "A closer view of the specialty learning environment for ENT and ophthalmic study.",
      },
      {
        title: "Prasuti & Stri Roga Practical View",
        image: "/labs/Prasuti&StriRoga/prasutiAndStriRoga4.jpg",
        note: "Women's health and maternal-care teaching support in practice.",
      },
    ],
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(galleryCategories[0].id);
  const activeCategory =
    galleryCategories.find((category) => category.id === activeTab) ??
    galleryCategories[0];

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-12 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                Explore Our <span className="text-emerald-800">Lab Gallery</span>
              </>
            }
            description="Browse department-wise practical spaces through curated categories built from the real laboratory images available across the institution."
            align="center"
            className="mb-10"
          />

          <div className="mb-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveTab(category.id)}
                  className={`min-h-12 w-full rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] transition-all sm:w-auto sm:px-6 sm:text-sm ${
                    activeTab === category.id
                      ? "bg-emerald-900 text-white shadow-lg shadow-emerald-900/20"
                      : "border border-emerald-900/10 bg-white text-slate-700 hover:border-emerald-800 hover:text-emerald-800"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10 rounded-4xl border border-emerald-900/10 bg-white/80 px-5 py-6 text-center shadow-md shadow-slate-900/5 backdrop-blur-sm sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-900">
              {activeCategory.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
              {activeCategory.label}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activeCategory.items.map((item, index) => (
              <article
                key={`${activeCategory.id}-${item.title}`}
                className={`group relative overflow-hidden rounded-4xl border border-white/40 bg-slate-200 shadow-lg shadow-slate-900/5 ${
                  index === 0
                    ? "min-h-80 sm:col-span-2 xl:row-span-2 xl:min-h-136"
                    : "min-h-72"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur-sm">
                    {activeCategory.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
