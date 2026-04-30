import SectionHeading from "../../components/shared/SectionHeading";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      {/* Header Section */}
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Identity"
            title={
              <>
                Preserving Heritage,{" "}
                <span className="text-emerald-800">Inspiring Health</span>
              </>
            }
            description={
              <>
                Babu Yugraj Singh Ayurvedic Medical College & Hospital is a
                premier institution dedicated to the profound science of life.
                Our journey is rooted in the belief that true healing involves
                the harmony of body, mind, and spirit.
              </>
            }
            className="mb-12 text-center lg:text-left"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                Established with a vision to revive the glory of ancient Indian
                medicine, our college provides a comprehensive environment where
                traditional Shastras meet modern clinical diagnostics. We don't
                just teach medicine; we nurture healers who carry the torch of
                Ayurvedic wisdom into the modern world.
              </p>
              <p>
                Our campus is spread across a lush green landscape, providing
                the perfect "Gurukul" atmosphere for focused learning. With
                state-of-the-art laboratories and a fully functional 100-bed
                hospital, students gain hands-on experience under the guidance
                of seasoned practitioners.
              </p>
              <div className="pt-4">
                <div className="inline-flex w-full items-center gap-3 rounded-r-2xl border-l-4 border-rose-900 bg-white px-5 py-4 shadow-sm sm:w-auto sm:px-6">
                  <span className="text-sm font-semibold text-slate-900">
                    Recognized by the Ministry of AYUSH & NCISM
                  </span>
                </div>
              </div>
            </div>

            {/* Featured College Photo */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-4xl bg-emerald-900/5 transition-transform group-hover:scale-105" />
              <div className="relative h-72 overflow-hidden rounded-3xl shadow-2xl sm:h-100">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000"
                  alt="College Main Building"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Gallery Bento Grid */}
      <section className="bg-[#f6f4ee] py-20">
        <div className="container mx-auto max-w-300 px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Explore Our Campus
            </h2>
            <div className="mt-2 h-1 w-20 bg-rose-900 mx-auto rounded-full" />
          </div>

          <div className="grid h-auto grid-cols-1 gap-4 md:h-150 md:grid-cols-4 md:grid-rows-2">
            {/* Large Feature */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                alt="Hospital Ward"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-emerald-950/90 to-transparent text-white">
                <p className="font-bold">Advanced Clinical Facilities</p>
                <p className="text-xs text-white/70">
                  100+ Bed Multi-specialty Hospital
                </p>
              </div>
            </div>

            {/* Top Right */}
            <div className="md:col-span-2 relative overflow-hidden rounded-3xl group h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1532187896946-4191b263bc25?auto=format&fit=crop&q=80&w=800"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                alt="Pharmacy Lab"
              />
              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors" />
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-emerald-900 uppercase">
                Modern Labs
              </span>
            </div>

            {/* Bottom Middle */}
            <div className="relative overflow-hidden rounded-3xl group h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&q=80&w=600"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                alt="Herbal Garden"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-rose-950/80 to-transparent text-white">
                <p className="text-sm font-bold">Herbal Garden</p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="relative overflow-hidden rounded-3xl group h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=600"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                alt="Auditorium"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 left-4">
                <div className="h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-emerald-950">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-225 px-4 text-center">
          <div className="inline-block rounded-full bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-900 mb-6">
            Our Philosophy
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 sm:text-4xl">
            "Swasthasya Swasthya Rakshanam, <br />
            <span className="text-emerald-800 italic">
              Aturasya Vikara Prashamanam Cha"
            </span>
          </h2>
          <p className="text-base italic leading-relaxed text-slate-600 sm:text-lg">
            "To protect the health of the healthy and to alleviate the disease
            of the sick." This timeless Ayurvedic principle is the cornerstone
            of everything we do at Babu Yugraj Singh.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
