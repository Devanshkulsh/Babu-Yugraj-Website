import SectionHeading from "../shared/SectionHeading";

const HomeAbout = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-linear(180deg,#fdfbf5_0%,#f6f4ee_100%)] py-16 sm:py-24 lg:py-32"
    >
      {/* Background Blobs - Slightly toned down for mobile performance */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-900/10 to-transparent" />

      <div className="container mx-auto max-w-295 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Content Side */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <SectionHeading
              eyebrow="Our Legacy"
              title={
                <>
                  Pioneering the Path of{" "}
                  <span className="text-emerald-800">Ayurvedic Wisdom</span>
                </>
              }
              description={
                <>
                  Founded on the principles of Babu Yugraj Singh, our
                  institution bridges the gap between ancient healing traditions
                  and modern medical science.
                </>
              }
              className="mb-8 text-center lg:text-left"
            />

            {/* Stats Bar - Centered on mobile, left on desktop */}
            <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-emerald-900/5 border-l-4 border-l-rose-900 bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:gap-8 sm:p-6 lg:mx-0 lg:rounded-r-3xl">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-rose-900 sm:text-xs">
                  Established
                </p>
                <p className="text-xl font-black text-slate-900 sm:text-3xl">
                  1998
                </p>
              </div>
              <div className="h-10 w-px bg-emerald-900/10" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-rose-900 sm:text-xs">
                  Students
                </p>
                <p className="text-xl font-black text-slate-900 sm:text-3xl">
                  5,000+
                </p>
              </div>
            </div>
          </div>

          {/* Bento Grid Side */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {/* Primary Mission Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-900 to-emerald-800 p-6 text-white shadow-xl shadow-emerald-950/15 transition-all hover:-translate-y-1 sm:col-span-2 sm:p-8 lg:col-span-1 lg:row-span-2">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 transition-transform group-hover:scale-150" />
              <div className="absolute bottom-0 left-0 h-1.5 w-24 bg-amber-400" />
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                Our Holistic Mission
              </h3>
              <p className="text-sm leading-relaxed text-emerald-50/80 sm:text-base">
                To empower students with the profound knowledge of Ayurveda
                integrated with cutting-edge clinical research and ethical
                practice.
              </p>
              <div className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 sm:text-sm">
                Tradition meets Modernity
              </div>
            </div>

            {/* Image Card 1 */}
            <div className="relative h-44 overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-900/5 transition-all hover:scale-[1.02] sm:h-48">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
                alt="Hospital Wing"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                Modern Labs
              </span>
            </div>

            {/* Image Card 2 */}
            <div className="relative h-44 overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-900/5 transition-all hover:scale-[1.02] sm:h-48">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600"
                alt="Ayurvedic Garden"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-rose-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                Herbal Garden
              </span>
            </div>

            {/* Certification Footer Card */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-emerald-900/10 bg-white/90 p-5 shadow-md backdrop-blur-sm sm:col-span-2 sm:flex-row sm:p-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-rose-900">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04k"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Government Certified
                  </h4>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Accredited by NCISM & AYUSH
                  </p>
                </div>
              </div>
              <button className="w-full rounded-full bg-emerald-900 px-6 py-3 text-sm font-bold text-white transition-all active:scale-95 sm:w-auto sm:py-2">
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
