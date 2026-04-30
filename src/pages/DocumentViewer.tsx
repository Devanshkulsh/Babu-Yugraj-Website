import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import * as XLSX from "xlsx";

const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const spreadsheetExtensions = [".xlsx", ".xls", ".csv"];

type SpreadsheetSheet = {
  name: string;
  rows: string[][];
};

const DocumentViewer = () => {
  const [searchParams] = useSearchParams();
  const src = searchParams.get("src") ?? "";
  const title = searchParams.get("title") ?? "Document Viewer";
  const [sheets, setSheets] = useState<SpreadsheetSheet[]>([]);
  const [activeSheet, setActiveSheet] = useState("");
  const [spreadsheetError, setSpreadsheetError] = useState("");
  const [isLoadingSpreadsheet, setIsLoadingSpreadsheet] = useState(false);
  const normalizedSrc = src.toLowerCase();
  const isPdf = normalizedSrc.endsWith(".pdf");
  const isImage = imageExtensions.some((extension) =>
    normalizedSrc.endsWith(extension),
  );
  const isSpreadsheet = spreadsheetExtensions.some((extension) =>
    normalizedSrc.endsWith(extension),
  );

  useEffect(() => {
    if (!isSpreadsheet || !src) {
      setSheets([]);
      setActiveSheet("");
      setSpreadsheetError("");
      setIsLoadingSpreadsheet(false);
      return;
    }

    let isMounted = true;

    const loadSpreadsheet = async () => {
      try {
        setIsLoadingSpreadsheet(true);
        setSpreadsheetError("");

        const response = await fetch(src);
        if (!response.ok) {
          throw new Error("Unable to load spreadsheet.");
        }

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const nextSheets = workbook.SheetNames.map((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const rows = XLSX.utils.sheet_to_json<(string | number | boolean | null)[]>(
            worksheet,
            {
              header: 1,
              defval: "",
              blankrows: false,
            },
          ).map((row) => row.map((cell) => String(cell ?? "")));

          return {
            name: sheetName,
            rows,
          };
        });

        if (!isMounted) return;

        setSheets(nextSheets);
        setActiveSheet(nextSheets[0]?.name ?? "");
      } catch {
        if (!isMounted) return;
        setSpreadsheetError("Spreadsheet preview could not be loaded.");
        setSheets([]);
        setActiveSheet("");
      } finally {
        if (isMounted) {
          setIsLoadingSpreadsheet(false);
        }
      }
    };

    void loadSpreadsheet();

    return () => {
      isMounted = false;
    };
  }, [isSpreadsheet, src]);

  const activeSheetData = sheets.find((sheet) => sheet.name === activeSheet);
  const activeSheetRows = activeSheetData?.rows ?? [];
  const headerRow = activeSheetRows[0] ?? [];
  const bodyRows = activeSheetRows.slice(1);

  if (!src) {
    return (
      <div className="min-h-screen bg-[#fdfbf5] px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-4xl border border-rose-200 bg-white p-8 text-center shadow-lg shadow-slate-900/5">
          <h1 className="text-2xl font-black text-slate-900">Document not found</h1>
          <p className="mt-3 text-slate-600">
            The requested file link is missing or invalid.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f4ee] px-3 py-6 sm:px-4 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-emerald-900/10 bg-white/90 px-4 py-4 shadow-md shadow-slate-900/5 sm:px-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
              Document Viewer
            </p>
            <h1 className="text-lg font-black text-slate-900 lg:text-2xl">
              {title}
            </h1>
          </div>

          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-rose-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rose-950"
          >
            Open Original File
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-xl shadow-slate-900/5">
          {isPdf ? (
            <iframe title={title} src={src} className="h-[70vh] w-full sm:h-[85vh]" />
          ) : isSpreadsheet ? (
            <div className="min-h-[70vh] bg-[#f8f7f3] p-4 lg:p-6">
              {isLoadingSpreadsheet ? (
                <div className="flex min-h-[60vh] items-center justify-center text-slate-600">
                  Loading spreadsheet...
                </div>
              ) : spreadsheetError ? (
                <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12 text-center">
                  <p className="text-lg font-semibold text-slate-900">
                    {spreadsheetError}
                  </p>
                  <p className="mt-2 text-slate-600">
                    Use the button above to open the original file directly.
                  </p>
                </div>
              ) : (
                <div>
                  {sheets.length > 1 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {sheets.map((sheet) => (
                        <button
                          key={sheet.name}
                          type="button"
                          onClick={() => setActiveSheet(sheet.name)}
                          className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                            activeSheet === sheet.name
                              ? "bg-emerald-900 text-white"
                              : "bg-white text-slate-700 hover:text-emerald-800"
                          }`}
                        >
                          {sheet.name}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="overflow-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <table className="min-w-[40rem] border-collapse text-left text-sm sm:min-w-full">
                      {headerRow.length > 0 && (
                        <thead className="bg-[#f8f7f3]">
                          <tr>
                            {headerRow.map((cell, index) => (
                              <th
                                key={`${cell}-${index}`}
                                className="border-b border-slate-200 px-4 py-3 font-bold text-slate-700"
                              >
                                {cell || `Column ${index + 1}`}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {bodyRows.map((row, rowIndex) => (
                          <tr key={`${activeSheet}-${rowIndex}`} className="odd:bg-white even:bg-slate-50/40">
                            {(headerRow.length > 0 ? headerRow : row).map((_, cellIndex) => (
                              <td
                                key={`${activeSheet}-${rowIndex}-${cellIndex}`}
                                className="border-b border-slate-100 px-4 py-3 align-top text-slate-600"
                              >
                                {row[cellIndex] ?? ""}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {activeSheetRows.length === 0 && (
                      <div className="px-6 py-10 text-center text-slate-500">
                        This sheet is empty.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : isImage ? (
            <div className="flex min-h-[60vh] items-center justify-center bg-[#f8f7f3] p-4 sm:min-h-[70vh] sm:p-6">
              <img
                src={src}
                alt={title}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl shadow-lg shadow-slate-900/10 sm:max-h-[80vh]"
              />
            </div>
          ) : (
            <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12 text-center">
              <p className="text-lg font-semibold text-slate-900">
                Preview is not available for this file type.
              </p>
              <p className="mt-2 text-slate-600">
                Use the button above to open the original document directly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
