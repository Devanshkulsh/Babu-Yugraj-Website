import { Link } from "react-router-dom";
import SectionHeading from "../shared/SectionHeading";

const reasons = [
  {
    title: "Experienced & Passionate Faculty",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1200",
    to: "/about",
  },
  {
    title: "Quality OPD & IPD Services",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
    to: "/facilities",
  },
  {
    title: "State-of-the-Art Facilities & Herbal Gardens",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=1200",
    to: "/facilities",
  },
  {
    title: "Best Location for Learning",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    to: "/contact",
  },
];

const HomeWhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="bg-[linear-gradient(180deg,#fffdf8_0%,#f7f3ea_100%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-350 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Advantage"
          title="Why Choose Us"
          description="A strong academic environment, patient-centered clinical exposure, campus resources, and a setting that supports serious learning."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="overflow-hidden rounded-4xl border border-emerald-900/10 bg-white shadow-lg shadow-slate-900/5"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/25 to-transparent" />
              </div>

              <div className="flex flex-col gap-5 px-5 py-6 sm:px-6">
                <h3 className="min-h-4.5rem text-center text-xl font-extrabold uppercase leading-tight text-slate-900">
                  {reason.title}
                </h3>

                <Link
                  to={reason.to}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-slate-950 transition hover:bg-amber-400"
                >
                  View Details
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/35 text-base">
                    &gt;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
