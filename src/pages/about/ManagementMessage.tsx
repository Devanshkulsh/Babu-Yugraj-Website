import SectionHeading from "../../components/shared/SectionHeading";

type MessageItem = {
  role: string;
  name: string;
  image: string;
  message: string;
  signature?: string;
};

const managementData: MessageItem[] = [
  {
    role: "Chairman",
    name: "Dr. Singh",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    message:
      "Our vision is to cultivate an environment where Ayurvedic traditions are preserved and propelled into the future. We are committed to providing the highest standards of education and clinical practice to ensure our students become world-class healers.",
  },
  {
    role: "Vice Chancellor",
    name: "Prof. R.K. Sharma",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    message:
      "Academic excellence is the cornerstone of our institution. We bridge the gap between ancient Shastras and modern diagnostics, ensuring our curriculum remains rigorous, relevant, and deeply rooted in ethical medical practice.",
  },
  {
    role: "Registrar",
    name: "Dr. Amit Verma",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    message:
      "We ensure a seamless administrative experience that supports the academic journey of every student. Transparency, discipline, and student welfare are our primary objectives in maintaining the integrity of our college.",
  },
  {
    role: "Principal",
    name: "Dr. S. Deepa",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    message:
      "At the heart of our college is the integration of classroom learning with bedside clinical experience. We nurture our students to handle modern healthcare challenges with the holistic perspective that only Ayurveda can provide.",
  },
];

const ManagementMessage = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      {/* Header */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-rose-100/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                Messages from our{" "}
                <span className="text-emerald-800">
                  Distinguished Management
                </span>
              </>
            }
            description="Guidance and vision from the leaders shaping the future of Ayurvedic education and healthcare."
            className="mb-16 text-center"
          />

          <div className="space-y-20 lg:space-y-32">
            {managementData.map((leader, index) => (
              <div
                key={leader.name}
                className={`flex flex-col gap-10 lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Photo Side */}
                <div className="relative mx-auto w-full max-w-[320px] lg:col-span-4 shrink-0">
                  <div className="absolute -inset-4 rounded-[2.5rem] border border-emerald-900/5 bg-white/50 backdrop-blur-sm" />
                  <div className="relative aspect-4/5 overflow-hidden rounded-4xl shadow-xl shadow-emerald-950/10">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-emerald-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                        {leader.role}
                      </p>
                      <h3 className="text-xl font-bold">{leader.name}</h3>
                    </div>
                  </div>
                  {/* Decorative Amber Accent */}
                  <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center text-rose-900 shadow-lg">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12M14.017 21H7C5.89543 21 5 20.1046 5 19V15C5 13.8954 5.89543 13 7 13H10C10.5523 13 11 12.5523 11 12V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 8.44772 5 9V12" />
                    </svg>
                  </div>
                </div>

                {/* Message Side */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-800">
                    {leader.role}'s Perspective
                  </div>

                  {/* Styled Message Card according to stats bar logic */}
                  <div className="relative rounded-2xl border border-emerald-900/5 border-l-4 border-l-rose-900 bg-white/70 p-6 sm:p-10 shadow-sm backdrop-blur-sm lg:rounded-r-3xl">
                    <p className="text-lg leading-relaxed italic text-slate-700 sm:text-xl">
                      "{leader.message}"
                    </p>
                    <div className="mt-8 pt-6 border-t border-emerald-900/10">
                      <p className="font-black text-slate-900 uppercase tracking-tighter text-xl">
                        {leader.name}
                      </p>
                      <p className="text-sm font-bold text-rose-900 uppercase tracking-widest">
                        {leader.role}, BYSMC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Encouragement */}
      <section className="bg-emerald-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Join our community of future healers
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-emerald-100/80">
            Our management and faculty are here to support your growth every
            step of the way.
          </p>
          <button className="rounded-full bg-rose-900 px-8 py-3 font-bold transition-all hover:bg-rose-950 active:scale-95 shadow-lg">
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
};

export default ManagementMessage;
