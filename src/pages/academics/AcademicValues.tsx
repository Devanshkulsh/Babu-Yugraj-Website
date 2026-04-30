import SectionHeading from "../../components/shared/SectionHeading";

const AcademicValues = () => {
  const missionPoints = [
    "Establishment of the facts of the disease through evidences.",
    "Thorough training of students by efforts of regular practice of Ayurveda & interaction by utilizing current information of Medicine.",
    "To create an integrated system that meets the higher education needs of the region and community at large.",
    "To be efficient, effective, community acceptable and excel in education and service.",
    "To reach the unreached and serve the underserved with education.",
    "To be an active component of national educational system.",
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      {/* Hero & Narrative Section */}
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content Side */}
            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="Our Philosophy"
                title={
                  <>
                    Inculcating Modern Education on{" "}
                    <span className="text-emerald-800">
                      Ayurvedic Foundations
                    </span>
                  </>
                }
                className="mb-8"
              />
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-base font-medium text-emerald-900/80 sm:text-lg">
                  This is the era of tremendous change. This is also true for
                  the education as well as health system.
                </p>
                <p>
                  Though the principles of Ayurveda are centuries old, they
                  still stand head held high. Thus, we have inculcated a modern
                  system of education on the foundation of the principles of
                  Ayurveda. This makes us unique in what we do.
                </p>
                <p>
                  We are dedicated to providing all the essential facilities for
                  students who seek a successful career and for health seekers.
                  We as a team strive hard every day to make this health system
                  more simplified and community-friendly. Quality education is
                  the only way by which we can achieve this goal.
                </p>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-4xl bg-rose-900/5 transition-transform group-hover:scale-105" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="h-48 overflow-hidden rounded-2xl shadow-lg sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
                      alt="Clinical Research"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-emerald-900 p-6 text-center shadow-lg sm:h-40">
                    <p className="text-white font-bold text-sm">
                      Research Driven Excellence
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-rose-900 p-6 text-center shadow-lg sm:h-40">
                    <p className="text-white font-bold text-sm">
                      Community Focused Care
                    </p>
                  </div>
                  <div className="h-48 overflow-hidden rounded-2xl shadow-lg sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400"
                      alt="Traditional Practice"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Aim Section */}
      <section className="bg-[#f6f4ee] py-20">
        <div className="container mx-auto max-w-250 px-4">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Aim & <span className="text-rose-900">Mission</span>
            </h2>
            <p className="mt-4 text-slate-600">
              To achieve the vision, the institute has framed the following
              mission statements focused on Research and Excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-4 rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-sm transition-all hover:border-emerald-900/20 hover:shadow-md"
              >
                {/* Numbering Circle according to amber accent logic */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-rose-900 font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-[14px] leading-relaxed text-slate-700 font-medium">
                    {point}
                  </p>
                </div>
                {/* Silent operator: left-accent hover effect */}
                <div className="absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 bg-rose-900 transition-all group-hover:h-1/2" />
              </div>
            ))}
          </div>

          {/* Special Research Focus Card */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-emerald-900 p-6 text-white shadow-xl sm:p-8 lg:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold italic underline decoration-amber-400">
                  Research Focus
                </h3>
                <p className="text-emerald-50/80 leading-relaxed">
                  We are committed to the scientific validation of Ayurvedic
                  modalities. Our research wing works tirelessly to document
                  clinical outcomes and standardize traditional medicine for the
                  global healthcare community.
                </p>
              </div>
              <div className="h-px w-full bg-emerald-800 md:h-24 md:w-px" />
              <div className="shrink-0">
                <div className="text-4xl font-black text-amber-400">100%</div>
                <p className="text-xs font-bold uppercase tracking-widest">
                  Evidence Based Approach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicValues;
