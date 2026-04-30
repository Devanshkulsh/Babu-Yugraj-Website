import FacultyCard from "../../components/shared/FacultyCard";
import SectionHeading from "../../components/shared/SectionHeading";

type FacultyProfile = {
  image: string;
  name: string;
  department: string;
  designation?: string;
  qualification?: string;
  registration?: string;
  teacherCode?: string;
  doj?: string;
  experience?: string;
  aadharNo?: string;
};

type TeamSection = {
  id: string;
  title: string;
  faculty: FacultyProfile[];
};

const placeholderImage =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=900";

const teamSections: TeamSection[] = [
  "Samhitta Siddhant Evam Sanskrit",
  "Kriya Sharir",
  "Rachna Sharir",
  "Agad Tantra Evam Vidhi Vidhyar",
  "Roga Nidan Evam Vikriti Vigyan",
  "Ras Shastra Evam Bhaishajya Kalpana",
  "Swasthavritta Evam Yoga",
  "Dravya Gun Vigyan",
  "Kaya Chikitsa Vigyan",
  "Shalya Tantra Vigyan",
  "Shalakya Tantra Vigyan",
  "Prasuti Tantra Evam Stree Rog",
  "Bal Rog Vigyan",
  "Panchkarma Vigyan",
].map((title) => ({
  id: title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  title,
  faculty: [
    {
      image: placeholderImage,
      name: "Faculty Name",
      department: title,
      designation: "Professor / Associate Professor / Lecturer",
      qualification: "Add qualification",
      registration: "Add registration number",
      teacherCode: "Add teacher code",
      doj: "Add date of joining",
      experience: "Add experience details",
      aadharNo: "Add Aadhar details if needed",
    },
  ],
}));

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-100/30 blur-3xl" />

        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Team"
            title={
              <>
                Meet the <span className="text-emerald-800">Faculty Team</span>
              </>
            }
            description="Each department section below is ready for you to expand with one faculty member or an entire team. Replace the starter card details with your real faculty information anytime."
            align="center"
            className="mb-14"
          />

          <div className="grid gap-4 rounded-4xl border border-emerald-900/10 bg-white/70 p-5 shadow-lg shadow-emerald-950/5 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
            {teamSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-2xl border border-emerald-900/10 bg-[#fdfbf5] px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-800 hover:text-emerald-800"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6">
          {teamSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-36 rounded-4xl border border-emerald-900/8 bg-white/75 p-6 shadow-lg shadow-emerald-950/5 backdrop-blur-sm sm:p-8 lg:p-10"
            >
              <div className="mb-8 flex flex-col gap-4 border-b border-emerald-900/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                    Department
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  This section supports any number of faculty profiles.
                  Duplicate, remove, or update the cards in the page data as
                  needed for this department.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {section.faculty.map((member, index) => (
                  <FacultyCard
                    key={`${section.id}-${index}`}
                    image={member.image}
                    name={member.name}
                    department={member.department}
                    designation={member.designation}
                    qualification={member.qualification}
                    registration={member.registration}
                    teacherCode={member.teacherCode}
                    doj={member.doj}
                    experience={member.experience}
                    aadharNo={member.aadharNo}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
