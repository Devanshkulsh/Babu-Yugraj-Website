import SectionHeading from "../../components/shared/SectionHeading";
import getPublicAssetPath from "../../utils/assetPath";

const MeritWiseList = () => {
  const pdfPath = getPublicAssetPath(
    "/student-corner/merit-wise-list/merit-wise-list.pdf",
  );

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Student's Corner"
            title={
              <>
                Merit Wise <span className="text-emerald-800">List</span>
              </>
            }
            description="View the admitted students merit list below."
            align="center"
            className="mb-10"
          />

          <div className="mb-4 flex justify-center sm:justify-end">
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-rose-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rose-950"
            >
              Open PDF
            </a>
          </div>

          <div className="overflow-hidden rounded-4xl border border-emerald-900/10 bg-white shadow-xl shadow-slate-900/5">
            <iframe title="Merit Wise List" src={pdfPath} className="h-[70vh] w-full sm:h-[85vh]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeritWiseList;
