import { getDocumentViewerPath } from "../../utils/assetPath";

type DocumentTableRow = {
  id: number;
  title: string;
  href: string;
  isPublished?: boolean;
  year?: string;
  month?: string;
};

type DocumentTableProps = {
  rows: DocumentTableRow[];
  actionLabel?: string;
};

const DocumentTable = ({
  rows,
  actionLabel = "View Details",
}: DocumentTableProps) => {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
      <div className="hidden grid-cols-[96px_minmax(0,1fr)_220px] border-b border-slate-200 bg-[#f8f7f3] text-xs font-bold uppercase tracking-[0.18em] text-slate-500 md:grid">
        <div className="border-r border-slate-200 px-6 py-5">No.</div>
        <div className="border-r border-slate-200 px-6 py-5">Document</div>
        <div className="px-6 py-5 text-center">Action</div>
      </div>

      <div>
        {rows.map((row) => (
          (() => {
            const isPublished = row.isPublished ?? (Boolean(row.href) && row.href !== "#");

            return (
          <div
            key={row.id}
            className="grid border-b border-slate-200 last:border-b-0 md:grid-cols-[96px_minmax(0,1fr)_220px]"
          >
            <div className="border-b border-slate-200 px-6 py-4 text-lg font-medium text-slate-900 md:border-b-0 md:border-r md:py-8">
              {row.id}
            </div>

            <div className="border-b border-slate-200 px-6 py-4 md:border-b-0 md:border-r md:py-8">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                <p className="text-lg leading-8 font-medium text-slate-900">
                  {row.title}
                </p>
              </div>
            </div>

            <div className="px-6 py-4 md:flex md:items-center md:justify-center md:py-6">
              {isPublished ? (
                <a
                  href={getDocumentViewerPath(row.href, row.title)}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-orange-600 bg-linear-to-r from-amber-500 to-orange-500 px-6 py-4 text-base font-extrabold uppercase tracking-[0.04em] text-white transition-transform hover:scale-[1.02] hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
                >
                  {actionLabel}
                </a>
              ) : (
                <span className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 px-6 py-4 text-base font-extrabold uppercase tracking-[0.04em] text-slate-400">
                  N/A
                </span>
              )}
            </div>
          </div>
            );
          })()
        ))}
      </div>
    </div>
  );
};

export type { DocumentTableRow };
export default DocumentTable;
