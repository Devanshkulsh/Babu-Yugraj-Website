import DocumentTable from "../../components/shared/DocumentTable";
import type { DocumentTableRow } from "../../components/shared/DocumentTable";
import SectionHeading from "../../components/shared/SectionHeading";

const studentListRows: DocumentTableRow[] = [
  {
    id: 1,
    title: "LIST OF ADMITTED STUDENTS 2022-23",
    href: "/student-corner/student-list/studentList2223.xlsx",
  },
  {
    id: 2,
    title: "LIST OF ADMITTED STUDENTS 2023-24",
    href: "/student-corner/student-list/studentList2324.pdf",
  },
  {
    id: 3,
    title: "LIST OF ADMITTED STUDENTS 2024-25",
    href: "/student-corner/student-list/studentList2425.pdf",
  },
];

const StudentList = () => {
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
                Student <span className="text-emerald-800">List</span>
              </>
            }
            description="Add your student list documents in the data array below and they will appear automatically in this table."
            align="center"
            className="mb-10"
          />

          <div className="mb-6 rounded-4xl border border-emerald-900/10 bg-white/70 px-6 py-5 text-center shadow-md shadow-slate-900/5 backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-900">
              Document Archive
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Student List Records
            </h2>
          </div>

          <DocumentTable rows={studentListRows} actionLabel="View" />
        </div>
      </section>
    </div>
  );
};

export default StudentList;
