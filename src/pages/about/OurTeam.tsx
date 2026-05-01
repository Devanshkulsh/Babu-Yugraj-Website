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

const createFaculty = (profile: FacultyProfile): FacultyProfile => ({
  ...profile,
});

const teamSections: TeamSection[] = [
  {
    id: "samhitta-siddhant-evam-sanskrit",
    title: "Samhitta Siddhant Evam Sanskrit",
    faculty: [
      createFaculty({
        image: "/faculty/SamhittaSiddhantEvamSanskrit/DrPragyaSingh.png",
        name: "Dr Pragya Singh",
        department: "SAMHITTA SIDDHANT EVAM SANSKRIT",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Samhita & Siddhant)",
        registration: "51432",
        teacherCode: "AYSS01512",
        doj: "29 Oct 2021",
        experience: "3Year",
        aadharNo: "xxxx-xxxx-9245",
      }),
      createFaculty({
        image:
          "/faculty/SamhittaSiddhantEvamSanskrit/DrShailendraSinghSengar.png",
        name: "Dr Shailendra Singh Sengar",
        department: "SAMHITTA SIDDHANT EVAM SANSKRIT",
        designation: "Professor",
        qualification: "B.A.M.S & M.D. (Samhita & Siddhant)",
        registration: "50743",
        teacherCode: "AYSS00284",
        doj: "01 Mar 2023",
        experience: "9Year",
        aadharNo: "xxxx-xxxx-3654",
      }),
    ],
  },
  {
    id: "kriya-sharir",
    title: "Kriya Sharir",
    faculty: [
      createFaculty({
        image: "/faculty/KriyaSharir/DrAmitKumarMishra.jpeg",
        name: "Dr Amit Kumar Mishra",
        department: "KRIYA SHARIR",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.D. (Kriya Sharir)",
        registration: "62924",
        teacherCode: "AYKS00779",
        doj: "01 Oct 2021",
        experience: "4Year",
        aadharNo: "xxxx-xxxx-6071",
      }),
      createFaculty({
        image: "/faculty/KriyaSharir/DrAnjaliPandey.jpg",
        name: "Dr Anjali Pandey",
        department: "KRIYA SHARIR",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Kriya Sharir)",
        registration: "00000",
        teacherCode: "AYKS00876",
        doj: "03 Oct 2025",
        experience: "4Year",
        aadharNo: "882297235708",
      }),
    ],
  },
  {
    id: "rachna-sharir",
    title: "Rachna Sharir",
    faculty: [
      createFaculty({
        image: "/faculty/RachnaSharir/DrAnkitaChitragupta.jpeg",
        name: "Dr Ankita Chitragupta",
        department: "RACHNA SHARIR",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Rachana Sharir)",
        registration: "39667",
        teacherCode: "AYRS01342",
        doj: "03 Apr 2023",
        experience: "1Year",
        aadharNo: "xxxx-xxxx-2221",
      }),
    ],
  },
  {
    id: "agad-tantra-evam-vidhi-vidhyar",
    title: "Agad Tantra Evam Vidhi Vidhyar",
    faculty: [
      createFaculty({
        image: "/faculty/AgadTantraEvamVidhiVidhyar/DrArvindKumar.jpg",
        name: "Dr Arvind Kumar",
        department: "AGAD TANTRA EVAM VIDHI VIDHYAR",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.D. (Agad tantra avum Vidhi vaidyaka)",
        registration: "57065",
        teacherCode: "AYAT00023",
        doj: "24 Aug 2024",
        experience: "6Year",
        aadharNo: "xxxx-xxxx-0776",
      }),
      createFaculty({
        image: "/faculty/AgadTantraEvamVidhiVidhyar/DrRajMohanMishra.jpeg",
        name: "Dr Raj Mohan Mishra",
        department: "AGAD TANTRA EVAM VIDHI VIDHYAR",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Agad tantra avum Vidhi vaidyaka)",
        registration: "55524",
        teacherCode: "AYAT00553",
        doj: "05 Jan 2023",
        experience: "3Year",
        aadharNo: "xxxx-xxxx-4687",
      }),
    ],
  },
  {
    id: "roga-nidan-evam-vikriti-vigyan",
    title: "Roga Nidan Evam Vikriti Vigyan",
    faculty: [
      createFaculty({
        image: "/faculty/RogaNidanEvamVikritiVigyan/DrAnkur.jpeg",
        name: "Dr Ankur",
        department: "ROGA NIDAN EVAM VIKRITI VIGYAN",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Roga Nidan avum Vikriti Vigyan)",
        registration: "57156",
        teacherCode: "AYRN00839",
        doj: "01 Oct 2024",
        experience: "3Year",
        aadharNo: "xxxx-xxxx-7367",
      }),
      createFaculty({
        image: "/faculty/RogaNidanEvamVikritiVigyan/DrRohitPandey.jpeg",
        name: "Dr Rohit Pandey",
        department: "ROGA NIDAN EVAM VIKRITI VIGYAN",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.D. (Roga Nidan avum Vikriti Vigyan)",
        registration: "65801",
        teacherCode: "AYRN00645",
        doj: "08 Dec 2023",
        experience: "6Year",
        aadharNo: "xxxx-xxxx-5239",
      }),
    ],
  },
  {
    id: "ras-shastra-evam-bhaishajya-kalpana",
    title: "Ras Shastra Evam Bhaishajya Kalpana",
    faculty: [
      createFaculty({
        image: "/faculty/RasShastraEvamBhaishajyaKalpana/DrAshutoshPandey.jpeg",
        name: "Dr Ashutosh Pandey",
        department: "RAS SHASTRA EVAM BHAISHAJYA KALPANA",
        designation: "Associate Professor",
        qualification: "B.A.M.S. & M.D. (Rasa Shastra & Bhaishajya)",
        registration: "56890",
        teacherCode: "AYRB01448",
        doj: "30 Sep 2023",
        experience: "5Year",
        aadharNo: "xxxx-xxxx-5468",
      }),
      createFaculty({
        image:
          "/faculty/RasShastraEvamBhaishajyaKalpana/DrPradeepKumarPandey.jpeg",
        name: "Dr Pradeep Kumar Pandey",
        department: "RAS SHASTRA EVAM BHAISHAJYA KALPANA",
        designation: "Asst Professor",
        qualification: "B.A.M.S. & M.D. (Rasa Shastra & Bhaishajya)",
        registration: "00000",
        teacherCode: "AYRB01997",
        doj: "03 Oct 2025",
        experience: "1Year",
        aadharNo: "772632964202",
      }),
    ],
  },
  {
    id: "swasthavritta-evam-yoga",
    title: "Swasthavritta Evam Yoga",
    faculty: [
      createFaculty({
        image: "/faculty/SwasthavrittaEvamYoga/DrAnitaPal.jpg",
        name: "Dr Anita Pal",
        department: "SWASTHAVRITTA EVAM YOGA",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.D. (Swastha Vritta & Yoga)",
        registration: "60207",
        teacherCode: "AYKC01340",
        doj: "06 Aug 2024",
        experience: "5Year",
        aadharNo: "xxxx-xxxx-9993",
      }),
      createFaculty({
        image: "/faculty/SwasthavrittaEvamYoga/DrShahanshahAlamKhan.jpeg",
        name: "Dr Shahanshah Alam Khan",
        department: "SWASTHAVRITTA EVAM YOGA",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Swastha Vritta & Yoga)",
        registration: "51380",
        teacherCode: "AYSV00908",
        doj: "15 Dec 2022",
        experience: "2Year",
        aadharNo: "xxxx-xxxx-3438",
      }),
    ],
  },
  {
    id: "dravya-gun-vigyan",
    title: "Dravya Gun Vigyan",
    faculty: [
      createFaculty({
        image: "/faculty/DravyaGunVigyan/DrGauravAwasthi.jpeg",
        name: "Dr Gaurav Awasthi",
        department: "DRAVYA GUN VIGYAN",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Dravya Guna Vigyana)",
        registration: "60561",
        teacherCode: "AYDG01625",
        doj: "17 Jan 2023",
        experience: "3Year",
        aadharNo: "xxxx-xxxx-7440",
      }),
      createFaculty({
        image: "/faculty/DravyaGunVigyan/DrRamMunish.jpg",
        name: "Dr Ram Munish",
        department: "DRAVYA GUN VIGYAN",
        designation: "Professor",
        qualification: "B.A.M.S & M.D. (Dravya Guna Vigyana)",
        registration: "49565",
        teacherCode: "AYDG00888",
        doj: "23 Nov 2023",
        experience: "8Year",
        aadharNo: "xxxx-xxxx-8024",
      }),
    ],
  },
  {
    id: "kaya-chikitsa-vigyan",
    title: "Kaya Chikitsa Vigyan",
    faculty: [
      createFaculty({
        image: "/faculty/KayaChikitsaVigyan/DrNamrataModi.jpeg",
        name: "Dr Namrata Modi",
        department: "KAYA CHIKITSA VIGYAN",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.D. (Kayachikitsa)",
        registration: "60117",
        teacherCode: "AYKC00539",
        doj: "01 Sep 2023",
        experience: "6Year",
        aadharNo: "xxxx-xxxx-1299",
      }),
      createFaculty({
        image: "/faculty/KayaChikitsaVigyan/DrYogendraKumar.jpeg",
        name: "Dr Yogendra Kumar",
        department: "KAYA CHIKITSA VIGYAN",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Kayachikitsa)",
        registration: "59978",
        teacherCode: "AYKC00585",
        doj: "02 Aug 2024",
        experience: "5Year",
        aadharNo: "xxxx-xxxx-7472",
      }),
    ],
  },
  {
    id: "shalya-tantra-vigyan",
    title: "Shalya Tantra Vigyan",
    faculty: [
      createFaculty({
        image: "/faculty/ShalyaTantraVigyan/DrPriyanka.jpeg",
        name: "Dr Priyanka",
        department: "SHALYA TANTRA VIGYAN",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.S. (Shalya Samanya)",
        registration: "61278",
        teacherCode: "AYST01763",
        doj: "28 Sep 2021",
        experience: "4Year",
        aadharNo: "xxxx-xxxx-2864",
      }),
    ],
  },
  {
    id: "shalakya-tantra-vigyan",
    title: "Shalakya Tantra Vigyan",
    faculty: [
      createFaculty({
        image: "/faculty/ShalakyaTantraVigyan/DrGaurav.jpeg",
        name: "Dr Gaurav",
        department: "SHALAKYA TANTRA VIGYAN",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.S. (Shalakya)",
        registration: "60044",
        teacherCode: "AYSK01213",
        doj: "30 Nov 2023",
        experience: "1Year",
        aadharNo: "xxxx-xxxx-8382",
      }),
      createFaculty({
        image: "/faculty/ShalakyaTantraVigyan/DrJadhavReshmaArjun.jpeg",
        name: "Dr Jadhav Reshma Arjun",
        department: "SHALAKYA TANTRA VIGYAN",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.S. (Shalakya)",
        registration: "xxxxx",
        teacherCode: "AYSK01353",
        doj: "28 Jan 2025",
        experience: "8Year",
        aadharNo: "xxxx-xxxx-xxxx",
      }),
    ],
  },
  {
    id: "prasuti-tantra-evam-stree-rog",
    title: "Prasuti Tantra Evam Stree Rog",
    faculty: [
      createFaculty({
        image: "/faculty/PrasutiTantraEvamStreeRog/DrRichaSharma.jpg",
        name: "Dr Richa Sharma",
        department: "PRASUTI TANTRA EVAM STREE ROG",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.S. (Shalya)",
        registration: "53240",
        teacherCode: "AYST01115",
        doj: "14 Oct 2024",
        experience: "5Year",
        aadharNo: "xxxx-xxxx-5432",
      }),
    ],
  },
  {
    id: "bal-rog-vigyan",
    title: "Bal Rog Vigyan",
    faculty: [
      createFaculty({
        image: "/faculty/BalRogVigyan/DrArchanaVerma.jpg",
        name: "Dr Archana Verma",
        department: "BAL ROG VIGYAN",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.D. (Kayachikitsa)",
        registration: "50060",
        teacherCode: "AYKC02661",
        doj: "21 Aug 2024",
        experience: "5Year",
        aadharNo: "xxxx-xxxx-7137",
      }),
      createFaculty({
        image: "/faculty/BalRogVigyan/DrVandanaJaiswal.jpg",
        name: "Dr Vandana Jaiswal",
        department: "BAL ROG VIGYAN",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Kumarbhritya - Bala Roga)",
        registration: "65142",
        teacherCode: "AYKB01137",
        doj: "23 Oct 2024",
        experience: "5 Month",
        aadharNo: "xxxx-xxxx-8342",
      }),
    ],
  },
  {
    id: "panchkarma-vigyan",
    title: "Panchkarma Vigyan",
    faculty: [
      createFaculty({
        image: "/faculty/PanchkarmaVigyan/DrShweta.jpg",
        name: "Dr Shweta",
        department: "PANCHKARMA VIGYAN",
        designation: "Asst Professor",
        qualification: "B.A.M.S & M.D. (Panchkarma)",
        registration: "40178",
        teacherCode: "AYPK01475",
        doj: "01 Jan 2026",
        experience: "1Year",
        aadharNo: "xxxx-xxxx-0000",
      }),
      createFaculty({
        image: "/faculty/PanchkarmaVigyan/DrSupriyaShahu.jpg",
        name: "Dr Supriya Shahu",
        department: "PANCHKARMA VIGYAN",
        designation: "Associate Professor",
        qualification: "B.A.M.S & M.D. (Panchkarma)",
        registration: "CG02620AYU",
        teacherCode: "AYPK00857",
        doj: "01 Jul 2021",
        experience: "4Year",
        aadharNo: "xxxx-xxxx-2191",
      }),
    ],
  },
];

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
