import SectionHeading from "../../components/shared/SectionHeading";

type InfraSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
  accent: "emerald" | "rose";
};

const infraData: InfraSection[] = [
  {
    id: "lecture-halls",
    eyebrow: "Learning Spaces",
    title: "Smart Lecture Halls",
    description:
      "Our lecture theaters are designed to facilitate interactive learning. Equipped with modern audio-visual aids, ergonomic seating, and natural lighting, they provide an ideal environment for academic discourse and knowledge sharing.",
    images: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=600",
    ],
    accent: "emerald",
  },
  {
    id: "laboratories",
    eyebrow: "Research & Analysis",
    title: "Advanced Laboratories",
    description:
      "From Rachna Sharir to Ras Shastra, our labs are fully equipped with traditional specimens and modern analytical instruments. We ensure students get hands-on experience in medicine preparation and anatomical study.",
    images: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600",
    ],
    accent: "rose",
  },
  {
    id: "library",
    eyebrow: "Knowledge Hub",
    title: "Central Library",
    description:
      "A sanctuary for bibliophiles, our library houses an extensive collection of rare Ayurvedic manuscripts, modern medical journals, and digital resources. It offers quiet study zones and high-speed internet access.",
    images: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1507738940455-8614cb7934b0?auto=format&fit=crop&q=80&w=600",
    ],
    accent: "emerald",
  },
  {
    id: "sports",
    eyebrow: "Physical Wellness",
    title: "Sports & Fitness",
    description:
      "Believing in the Ayurvedic principle of 'Vyayama', we provide expansive grounds for cricket, football, and volleyball, alongside dedicated spaces for Yoga and indoor games to ensure holistic student development.",
    images: [
      "https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=600",
    ],
    accent: "rose",
  },
  {
    id: "camp",
    eyebrow: "Community Outreach",
    title: "Medical Camps",
    description:
      "Our dedicated camp infrastructure supports regular health check-ups and Ayurvedic awareness programs in rural areas. We utilize mobile units and portable clinical setups to serve the community effectively.",
    images: [
      "https://images.unsplash.com/photo-1583324113626-70df0f43aa2b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1584515933487-782719ad7c52?auto=format&fit=crop&q=80&w=600",
    ],
    accent: "emerald",
  },
];

const Infrastructure = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#f6f4ee] py-16 lg:py-24">
        <div className="container mx-auto max-w-300 px-4">
          <SectionHeading
            eyebrow="Campus Tour"
            title={
              <>
                World-Class{" "}
                <span className="text-emerald-800">Infrastructure</span>
              </>
            }
            description="Our campus is a blend of traditional Gurukul aesthetics and modern medical facilities, designed to nurture the next generation of Ayurvedic physicians."
            className="text-center"
          />
        </div>
      </section>

      {/* Dynamic Sections */}
      {infraData.map((section, index) => (
        <section
          key={section.id}
          className={`py-16 lg:py-24 ${index % 2 === 1 ? "bg-[#f6f4ee]" : "bg-white"}`}
        >
          <div className="container mx-auto max-w-300 px-4">
            <div
              className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${
                    section.accent === "emerald"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-rose-50 text-rose-900"
                  }`}
                >
                  {section.eyebrow}
                </div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                  {section.title}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {section.description}
                </p>
                <div
                  className={`h-1.5 w-20 rounded-full ${
                    section.accent === "emerald"
                      ? "bg-emerald-800"
                      : "bg-rose-900"
                  }`}
                />
              </div>

              {/* Image Grid Side */}
              <div
                className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02] ${
                      i === 1 ? "mt-6 sm:mt-8" : "mb-0 sm:mb-8"
                    }`}
                  >
                    <img
                      src={img}
                      alt={section.title}
                      className="h-64 w-full object-cover sm:h-80"
                    />
                    <div className="absolute inset-0 bg-emerald-950/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="bg-emerald-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            Experience our campus in person
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-emerald-100/80">
            We invite prospective students and parents to visit our facility and
            witness the integration of heritage and technology.
          </p>
          <button className="rounded-full bg-rose-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-rose-950 active:scale-95 sm:px-8 sm:text-base">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
