import { useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";

type GalleryCategory = {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  items: {
    title: string;
    image: string;
    note: string;
  }[];
};

const galleryCategories: GalleryCategory[] = [
  {
    id: "campus",
    label: "Campus Life",
    eyebrow: "Daily Rhythm",
    description:
      "Spaces, routines, and shared moments that shape the student experience beyond the classroom.",
    items: [
      {
        title: "Academic Sessions",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
        note: "Focused classroom learning and academic engagement.",
      },
      {
        title: "Campus Community",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
        note: "Student interaction, support, and shared progress.",
      },
      {
        title: "Focused Learning",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
        note: "Quiet dedication and disciplined study culture.",
      },
      {
        title: "Student Engagement",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
        note: "A campus environment built on collaboration.",
      },
      {
        title: "Campus Atmosphere",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
        note: "A welcoming setting for growth and continuity.",
      },
      {
        title: "Shared Aspirations",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
        note: "Students growing with purpose and direction.",
      },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    eyebrow: "Learning Spaces",
    description:
      "A look into the academic environment, practical sessions, and the learning culture that supports Ayurvedic education.",
    items: [
      {
        title: "Herbal Learning Spaces",
        image:
          "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=1200",
        note: "Nature-linked learning and traditional context.",
      },
      {
        title: "Laboratory Orientation",
        image:
          "https://images.unsplash.com/photo-1532187896946-4191b263bc25?auto=format&fit=crop&q=80&w=800",
        note: "Hands-on exposure to lab environments.",
      },
      {
        title: "Reading & Study",
        image:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
        note: "Serious academic preparation and resource use.",
      },
      {
        title: "Practical Instruction",
        image:
          "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1200",
        note: "Applied learning that strengthens confidence.",
      },
      {
        title: "Discussion Culture",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
        note: "Team-based understanding and guided exchange.",
      },
      {
        title: "Scholarly Focus",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
        note: "Depth, discipline, and conceptual clarity.",
      },
    ],
  },
  {
    id: "clinical",
    label: "Clinical Training",
    eyebrow: "Practice & Care",
    description:
      "Practical exposure, patient-care readiness, and hospital-linked training that supports professional development.",
    items: [
      {
        title: "Clinical Training",
        image:
          "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
        note: "Practical clinical grounding under supervision.",
      },
      {
        title: "Advanced Clinical Facilities",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
        note: "Institutional care spaces linked to training.",
      },
      {
        title: "Hospital Readiness",
        image:
          "https://images.unsplash.com/photo-1516549655669-df4d9b2c3b67?auto=format&fit=crop&q=80&w=1200",
        note: "Confidence-building exposure to hospital workflow.",
      },
      {
        title: "Observation & Practice",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
        note: "Learning through real care environments.",
      },
      {
        title: "Care Teams",
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
        note: "Collaborative service and applied learning.",
      },
      {
        title: "Clinical Confidence",
        image:
          "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
        note: "Professional exposure aligned with patient care.",
      },
    ],
  },
  {
    id: "events",
    label: "Events & Culture",
    eyebrow: "Celebration & Identity",
    description:
      "Institutional energy through seminars, student gatherings, community moments, and meaningful campus celebrations.",
    items: [
      {
        title: "Auditorium Moments",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=600",
        note: "Programs, talks, and collective participation.",
      },
      {
        title: "Seminar Energy",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
        note: "Ideas, interaction, and institutional dialogue.",
      },
      {
        title: "Student Gatherings",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
        note: "Community spirit across campus experiences.",
      },
      {
        title: "Cultural Participation",
        image:
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1200",
        note: "Celebration, belonging, and expression.",
      },
      {
        title: "Team Activities",
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200",
        note: "Shared effort and stronger connections.",
      },
      {
        title: "Campus Events",
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
        note: "Institutional moments that stay memorable.",
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
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute right-0 top-12 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                A Multi-View Window Into{" "}
                <span className="text-emerald-800">Campus Life</span>
              </>
            }
            description="Browse different layers of the institution through curated tabs covering campus, academics, clinical exposure, and events."
            align="center"
            className="mb-10"
          />

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] transition-all ${
                  activeTab === category.id
                    ? "bg-emerald-900 text-white shadow-lg shadow-emerald-900/20"
                    : "border border-emerald-900/10 bg-white text-slate-700 hover:border-emerald-800 hover:text-emerald-800"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="mb-10 rounded-4xl border border-emerald-900/10 bg-white/80 px-6 py-6 text-center shadow-md shadow-slate-900/5 backdrop-blur-sm">
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
                    ? "sm:col-span-2 xl:row-span-2 xl:min-h-136"
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
