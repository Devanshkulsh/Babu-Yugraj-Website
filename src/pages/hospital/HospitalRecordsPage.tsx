import { useState } from "react";
import type { DocumentTableRow } from "../../components/shared/DocumentTable";
import DocumentTable from "../../components/shared/DocumentTable";
import SectionHeading from "../../components/shared/SectionHeading";

type HospitalRecordsPageProps = {
  title: string;
  years: string[];
  recordsByYear: Record<string, DocumentTableRow[]>;
};

const HospitalRecordsPage = ({
  title,
  years,
  recordsByYear,
}: HospitalRecordsPageProps) => {
  const [activeYear, setActiveYear] = useState(years.at(-1) ?? "2026");

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Hospital Records"
            title={
              <>
                {title} <span className="text-emerald-800">Records</span>
              </>
            }
            align="center"
            className="mb-10"
          />

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                className={`rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] transition-all ${
                  activeYear === year
                    ? "bg-emerald-900 text-white shadow-lg shadow-emerald-900/20"
                    : "border border-emerald-900/10 bg-white text-slate-700 hover:border-emerald-800 hover:text-emerald-800"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="mb-6 rounded-4xl border border-emerald-900/10 bg-white/70 px-6 py-5 text-center shadow-md shadow-slate-900/5 backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-900">
              Active Session
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">
              {title} {activeYear}
            </h2>
          </div>

          <DocumentTable rows={recordsByYear[activeYear]} actionLabel="View" />
        </div>
      </section>
    </div>
  );
};

export default HospitalRecordsPage;
