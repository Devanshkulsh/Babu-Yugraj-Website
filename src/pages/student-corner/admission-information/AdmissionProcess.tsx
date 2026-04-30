import SectionHeading from "../../../components/shared/SectionHeading";
import getPublicAssetPath from "../../../utils/assetPath";

const AdmissionProcess = () => {
  const pdfPath = getPublicAssetPath(
    "/student-corner/admission-process/antirag.pdf",
  );
  const feeData = [
    {
      label: "Reg. Form/Affidavit/1-Card/Dissection Kit",
      value: "Rs. 10,000/- One time",
    },
    { label: "Tuition Fees - 1st Year", value: "Rs. 2,04,600/- yr." },
    { label: "Tuition Fees - IInd Year", value: "Rs. 2,04,600/- yr." },
    { label: "Tuition Fees - IIIrd Year", value: "Rs. 2,04,600/- yr." },
    { label: "Tuition Fees - IVth Year", value: "Rs. 2,04,600/- yr." },
    { label: "Tuition Fees - Vth Year", value: "Rs. 1,02,300/- 6 Months" },
    { label: "Hostel Fees", value: "Rs. 70,000/- yr." },
    { label: "Caution Money", value: "Rs. 50,000* Refundable" },
    {
      label: "Uniform Fees",
      value:
        "Rs. 8000/- One time Paint & Shirt (2 Sets)/ Salwar Suit (2 Sets) & Apron Logo (2 Sets)",
    },
    {
      label:
        "Seminars/Educational Tours/ Skill Development Programme/ Sports /Guest Lectures/ Medical Fitness Fees",
      value: "Rs. 60,000/- Yr.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      {/* Admission Process Header */}
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Admissions Open"
            title={
              <>
                Join the Next Generation of{" "}
                <span className="text-emerald-800">Healers</span>
              </>
            }
            description="The admission process at Babu Yugraj Singh Ayurvedic Medical College is transparent and strictly follows national guidelines."
            className="mb-12 text-center"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Counseling Info according to your color scheme */}
            <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl">
                <span className="h-8 w-1 bg-rose-900 rounded-full" />
                Admission Guidelines
              </h3>
              <div className="space-y-6">
                <div className="rounded-2xl bg-emerald-50 p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
                    Primary Requirement
                  </p>
                  <p className="text-xl font-black text-slate-900">
                    Through NEET Qualification
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="font-bold text-slate-700">
                    Official Counseling Website:
                  </p>
                  <a
                    href="https://www.upayushcounselling.upsdc.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-emerald-900/10 bg-[#f6f4ee] p-4 text-emerald-800 font-bold transition-colors hover:bg-emerald-900 hover:text-white"
                  >
                    www.upayushcounselling.upsdc.gov.in
                  </a>
                  <div className="flex flex-col items-start gap-2 rounded-xl bg-rose-900 p-4 text-white sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-bold uppercase tracking-widest text-[11px] sm:text-xs">
                      College Counseling Code
                    </span>
                    <span className="text-xl font-black italic">AYU0636</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Panel according to image_0e2532.jpg data */}
            <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl">
                <span className="h-8 w-1 bg-emerald-800 rounded-full" />
                Admission Panel (8303700428)
              </h3>
              <ul className="space-y-3">
                {[
                  "Prof. (Dr.) Kamla Yadav",
                  "Dr. Ashutosh Pandey, Associate Professor (RSBK)",
                  "Dr. Raj Mohan Mishra, Assistant Professor (Agad Tantra)",
                  "Dr. Vikas Kr. Tripathi, Medical Officer",
                  "Dr. Rashmi Gupta, Assistant Professor (RSBK)",
                ].map((member, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700 border-b border-emerald-900/5 pb-2 last:border-0"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="bg-[#f6f4ee] py-20">
        <div className="container mx-auto max-w-275 px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Fee <span className="text-rose-900">Structure</span>
            </h2>
            <p className="mt-2 text-slate-500">
              Comprehensive breakdown of academic and residential costs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-emerald-900/10 bg-white shadow-2xl">
            <table className="min-w-[42rem] w-full border-collapse text-left">
              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-widest">
                    Particulars
                  </th>
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-widest">
                    Amount (INR)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/5">
                {feeData.map((row, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-emerald-50/50"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-sm font-black text-rose-900 whitespace-nowrap">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Anti-Ragging & Landmarks Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-300 px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Anti Ragging */}
            <div className="rounded-3xl border-l-4 border-l-rose-900 bg-white p-6 shadow-lg sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-slate-900 uppercase tracking-tight">
                Anti Ragging Committee (8055850796)
              </h3>
              <div className="space-y-4">
                {[
                  "Prof. (Dr.) Kamla Yadav, Principal (Chairman)",
                  "Dr. Ashutosh Pandey, Associate Professor",
                  "Dr. Shailendra Singh Sengar, Vice Principal",
                  "Dr. Shahanshah Alam Khan, Assistant Professor",
                  "Dr. Ankita Chitragupt, Assistant Professor",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-600 font-medium"
                  >
                    <svg
                      className="h-4 w-4 text-rose-900"
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
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks */}
            <div className="rounded-3xl border-l-4 border-l-emerald-800 bg-[#fdfbf5] p-6 shadow-lg sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-slate-900 uppercase tracking-tight">
                Nearest Landmarks
              </h3>
              <div className="space-y-4 font-medium text-slate-700">
                <p className="flex items-center gap-3">
                  📍 Infront of Yash Raj Institute towards Saheed Path
                </p>
                <p className="flex items-center gap-3">
                  📍 4 Km from New High Court (Kamta)
                </p>
                <p className="flex items-center gap-3">
                  📍 1.5 Km from Tehsil Sadar, Khargapur
                </p>
                <p className="flex items-center gap-3">📍 Pilicolony mode</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f4ee] py-20">
        <div className="container mx-auto max-w-300 px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Admission <span className="text-emerald-800">Document</span>
            </h2>
            <p className="mt-2 text-slate-500">View the attached PDF below.</p>
          </div>

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
            <iframe title="Admission Process Document" src={pdfPath} className="h-[70vh] w-full sm:h-[85vh]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcess;
