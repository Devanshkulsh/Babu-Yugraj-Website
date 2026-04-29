import { Link } from "react-router-dom";
import SectionHeading from "../shared/SectionHeading";

const hospitalHighlights = [
  "Integrated OPD and IPD support for practical clinical exposure.",
  "Patient-centered learning environment guided by faculty supervision.",
  "Structured facilities that connect academics with real healthcare practice.",
];

const HomeHospital = () => {
  return (
    <section
      id="hospital"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f4ee_0%,#fcfbf7_100%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="mx-auto grid max-w-350 gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-4xl shadow-xl shadow-emerald-950/10">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1400"
                alt="College hospital building"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                Teaching Hospital
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-emerald-900/10 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-900">
                Clinical Exposure
              </p>
              <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900">
                OPD & IPD
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-emerald-900/10 bg-emerald-900 p-5 text-white shadow-lg shadow-emerald-950/15">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
                Practice Ready
              </p>
              <p className="mt-3 text-lg leading-7 text-emerald-50/85">
                Strong patient interaction and supervised hands-on learning.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="College Hospital"
            title={
              <>
                Clinical learning that grows with{" "}
                <span className="text-emerald-800">real patient care</span>
              </>
            }
            description="Our hospital environment strengthens classroom knowledge through practical exposure, guided observation, and a disciplined clinical ecosystem."
            className="mb-8"
          />

          <div className="space-y-4">
            {hospitalHighlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-4 rounded-3xl border border-emerald-900/10 bg-white/80 px-5 py-4 shadow-sm"
              >
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-slate-900">
                  +
                </span>
                <p className="text-base leading-7 text-slate-600">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/facilities"
              className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-white transition hover:bg-emerald-800"
            >
              Explore Facilities
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-emerald-900 transition hover:bg-emerald-50"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHospital;
