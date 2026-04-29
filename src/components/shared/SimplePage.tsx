import SectionHeading from "./SectionHeading";

type SimplePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

const SimplePage = ({
  eyebrow,
  title,
  description,
  highlights,
}: SimplePageProps) => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fdfbf5_0%,#f6f4ee_100%)] py-20 lg:py-28">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="mx-auto max-w-[1180px] px-4">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-12"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-3xl border border-emerald-900/10 bg-white/90 p-6 shadow-md shadow-slate-900/5 backdrop-blur-sm"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-amber-400" />
              <p className="text-base leading-7 text-slate-600">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplePage;
