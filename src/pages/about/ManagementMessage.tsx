import SectionHeading from "../../components/shared/SectionHeading";

type MessageItem = {
  role: string;
  organization?: string;
  name: string;
  image: string;
  message: string;
  email?: string;
  contactNo?: string;
  footerRole?: string;
};

const managementData: MessageItem[] = [
  {
    role: "Vice Chancellor",
    organization: "Mahayogi Guru Gorakhnath Ayush University",
    name: "Prof. (Dr.) A.K.Singh",
    image: "/vice-chancellor.jpg",
    message:
      "MAHAYOGI GURU GORAKHNATH AYUSH UNIVERSITY",
    email: "vc@mggaugk.ac.in",
    contactNo: "+91 91 8810724949",
    footerRole: "Vice Chancellor",
  },
  {
    role: "Registrar",
    organization: "Mahayogi Guru Gorakhnath Ayush University",
    name: "Shri R.B.Singh",
    image: "/registrar.jpeg",
    message:
      "MAHAYOGI GURU GORAKHNATH AYUSH UNIVERSITY",
    email: "rbsingh4478@gmail.com",
    contactNo: "+91 8810724948",
    footerRole: "Registrar",
  },
  {
    role: "Chairman Message",
    organization: "Babu Yugraj Singh Ayurvedic Medical College & Hospital",
    name: "Chairman",
    image: "/chairman.jpeg",
    message:
      "Our institution has continually ranked as the top most technical college in North India, and we have developed ourselves as the first preference for students seeking quality education coming from this region and now expanding to other parts of the country as well. Our group of colleges always remains in the process of building success in academics, quality placements, research, industry interface, international exposure and extra-curricular activities. It is remarkable that we have established strong connects in industry and developed many corporate affiliates across different verticals. We have a strong industry-institute interface and are endorsed by some of the most renowned companies .",
    footerRole: "Chairman, BYSMC",
  },
  {
    role: "Principal Message",
    organization: "Babu Yugraj Singh Ayurvedic Medical College & Hospital, Lucknow",
    name: "Prof. Prof. (Dr.) Dhurwa Kumar",
    image: "/principal.jpg",
    message:
      "Our mission to provide value based quality educations and development of the institute to a centre of excellence. All initiatives are students centric focusing on empowering capacity building. entrepreneurship and inculcating lifelong learning habits. Institute has excellent learning facilities and equipments. Library stocked with Sufficient books reference books, Magazines, journals- Nationals, Internationals",
    footerRole: "Principal",
  },
];

const ManagementMessage = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      {/* Header */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-rose-100/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                Messages from our{" "}
                <span className="text-emerald-800">
                  Distinguished Management
                </span>
              </>
            }
            description="Guidance and vision from the leaders shaping the future of Ayurvedic education and healthcare."
            className="mb-16 text-center"
          />

          <div className="space-y-20 lg:space-y-32">
            {managementData.map((leader, index) => (
              <div
                key={leader.name}
                className={`flex flex-col gap-10 lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Photo Side */}
                <div className="relative mx-auto w-full max-w-[320px] lg:col-span-4 shrink-0">
                  <div className="absolute -inset-4 rounded-[2.5rem] border border-emerald-900/5 bg-white/50 backdrop-blur-sm" />
                  <div className="relative aspect-4/5 overflow-hidden rounded-4xl shadow-xl shadow-emerald-950/10">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-emerald-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                        {leader.role}
                      </p>
                      <h3 className="text-xl font-bold">{leader.name}</h3>
                    </div>
                  </div>
                  {/* Decorative Amber Accent */}
                  <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center text-rose-900 shadow-lg">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12M14.017 21H7C5.89543 21 5 20.1046 5 19V15C5 13.8954 5.89543 13 7 13H10C10.5523 13 11 12.5523 11 12V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 8.44772 5 9V12" />
                    </svg>
                  </div>
                </div>

                {/* Message Side */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-800">
                    {leader.role}'s Perspective
                  </div>

                  {/* Styled Message Card according to stats bar logic */}
                  <div className="relative rounded-2xl border border-emerald-900/5 border-l-4 border-l-rose-900 bg-white/70 p-6 sm:p-10 shadow-sm backdrop-blur-sm lg:rounded-r-3xl">
                    {leader.organization ? (
                      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-rose-900">
                        {leader.organization}
                      </p>
                    ) : null}
                    <p className="text-lg leading-relaxed italic text-slate-700 sm:text-xl">
                      "{leader.message}"
                    </p>
                    {leader.email || leader.contactNo ? (
                      <div className="mt-6 grid gap-3 border-t border-emerald-900/10 pt-6 text-sm text-slate-700">
                        {leader.email ? (
                          <p>
                            <span className="font-bold text-slate-900">
                              E-Mail ID:
                            </span>{" "}
                            {leader.email}
                          </p>
                        ) : null}
                        {leader.contactNo ? (
                          <p>
                            <span className="font-bold text-slate-900">
                              Contact No:
                            </span>{" "}
                            {leader.contactNo}
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                    <div className="mt-8 pt-6 border-t border-emerald-900/10">
                      <p className="font-black text-slate-900 uppercase tracking-tighter text-xl">
                        {leader.name}
                      </p>
                      <p className="text-sm font-bold text-rose-900 uppercase tracking-widest">
                        {leader.footerRole || leader.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Encouragement */}
      <section className="bg-emerald-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Join our community of future healers
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-emerald-100/80">
            Our management and faculty are here to support your growth every
            step of the way.
          </p>
          <button className="rounded-full bg-rose-900 px-8 py-3 font-bold transition-all hover:bg-rose-950 active:scale-95 shadow-lg">
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
};

export default ManagementMessage;
