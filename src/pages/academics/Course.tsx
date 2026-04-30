import SectionHeading from "../../components/shared/SectionHeading";

const Course = () => {
  const durationData = [
    { phase: "First Professional Course", duration: "18 Months" },
    { phase: "Second Professional Course", duration: "18 Months" },
    { phase: "Third Professional Course", duration: "18 Months" },
    { phase: "Internship", duration: "12 Months" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      {/* Header Section */}
      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content Side */}
            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="Academic Program"
                title={
                  <>
                    B.A.M.S.{" "}
                    <span className="text-emerald-800">(Ayurvedacharya)</span>
                  </>
                }
                description="Bachelor of Ayurvedic Medicine and Surgery"
                className="mb-8"
              />

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-base font-medium text-emerald-900/80 sm:text-lg">
                  The B.A.M.S. degree has received recognition and approval from
                  the Central Council of Indian Medicine (NCISM), New Delhi, and
                  the State Government of Uttar Pradesh.
                </p>
                <p>
                  This comprehensive medical degree prepares students to become
                  skilled practitioners of Ayurveda. Additionally, the college
                  is planning to start M.D. programs in the near future to
                  further advance research and specialization.
                </p>
                <div className="rounded-2xl border-l-4 border-rose-900 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    B.A.M.S degree holders are eligible for registration in
                    Central/State government Ayurvedic boards and hold status at
                    par with other medical graduates in India.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-emerald-900/5" />
              <div className="relative h-72 overflow-hidden rounded-3xl shadow-2xl sm:h-96 lg:h-112.5">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1000"
                  alt="Medical Education"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duration & Table Section */}
      <section className="bg-[#f6f4ee] py-20">
        <div className="container mx-auto max-w-225 px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Course <span className="text-rose-900">Duration</span>
            </h2>
            <p className="mt-4 text-slate-600 font-medium">
              The total duration of the B.A.M.S. degree course is 5 & 1/2 years.
            </p>
          </div>

          {/* Duration Table according to your color scheme */}
          <div className="overflow-x-auto rounded-2xl border border-emerald-900/10 bg-white shadow-xl">
            <table className="min-w-[34rem] w-full border-collapse text-left">
              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">
                    Professional Course Phase
                  </th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/5">
                {durationData.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-emerald-50/50"
                  >
                    <td className="px-6 py-5 text-slate-700 font-semibold">
                      {item.phase}
                    </td>
                    <td className="px-6 py-5 text-rose-900 font-black">
                      {item.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#f6f4ee] font-bold">
                  <td className="px-6 py-4 text-slate-900">
                    Total Course Duration
                  </td>
                  <td className="px-6 py-4 text-emerald-800">5.5 Years</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Career Opportunities Footer */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-rose-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 font-bold text-slate-900">
                Govt. Appointments
              </h4>
              <p className="text-sm text-slate-600">
                Graduates are eligible for appointments in Central or State
                Govt. Ayurvedic Medical Services.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-900/5 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04k"
                  />
                </svg>
              </div>
              <h4 className="mb-2 font-bold text-slate-900">
                Professional Parity
              </h4>
              <p className="text-sm text-slate-600">
                The degree status is at par with any other medical graduates in
                India, allowing for broad professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
