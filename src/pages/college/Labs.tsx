import SectionHeading from "../../components/shared/SectionHeading";

type LabSection = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  images: string[];
};

const labsData: LabSection[] = [
  {
    id: "rachna-sharir",
    title: "Rachna Sharir",
    eyebrow: "Anatomical Study",
    description:
      "The Rachna Sharir lab supports foundational anatomical learning through structured specimen study, dissection support, charts, and guided demonstrations for BAMS students.",
    images: [
      "/labs/RachanaSharir/RachanaSharir1.jpg",
      "/labs/RachanaSharir/RachanaSharir2.jpg",
      "/labs/RachanaSharir/RachanaSharir3.jpg",
    ],
  },
  {
    id: "samhita-siddhant-evam-sanskrit",
    title: "Samhita Siddhant Evam Sanskrit",
    eyebrow: "Classical Foundations",
    description:
      "This section is designed to strengthen understanding of Ayurvedic texts, Sanskrit terminology, and the theoretical principles that form the core of traditional Ayurvedic education.",
    images: [
      "/labs/SamhitaSiddhantEvumSanskrit/SamhitaSiddhantEvumSanskrit1.jpg",
      "/labs/SamhitaSiddhantEvumSanskrit/SamhitaSiddhantEvumSanskrit2.jpg",
      "/labs/SamhitaSiddhantEvumSanskrit/SamhitaSiddhantEvumSanskrit3.jpg",
    ],
  },
  {
    id: "kriya-sharir",
    title: "Kriya Sharir",
    eyebrow: "Physiological Concepts",
    description:
      "The Kriya Sharir lab helps students explore Ayurvedic and modern physiological concepts through charts, models, demonstrations, and practical teaching aids.",
    images: [
      "/labs/KriyaSharir/KriyaSharir1.jpg",
      "/labs/KriyaSharir/KriyaSharir2.jpg",
      "/labs/KriyaSharir/KriyaSharir3.jpg",
    ],
  },
  {
    id: "ras-shastra-evam-bhaishajya-kalpana",
    title: "Ras Shastra Evam Bhaishajya Kalpana",
    eyebrow: "Pharmaceutical Practice",
    description:
      "Students gain practical exposure to Ayurvedic medicine preparation, formulation methods, purification processes, storage practices, and related pharmaceutical procedures.",
    images: [
      "/labs/RasShastraEvamBhaishajyaKalpana/RasShastraEvamBhaishajyaKalpana1.jpg",
      "/labs/RasShastraEvamBhaishajyaKalpana/RasShastraEvamBhaishajyaKalpana2.jpg",
      "/labs/RasShastraEvamBhaishajyaKalpana/RasShastraEvamBhaishajyaKalpana3.jpg",
    ],
  },
  {
    id: "dravyaguna-vigyan",
    title: "Dravyaguna Vigyan",
    eyebrow: "Materia Medica",
    description:
      "The Dravyaguna Vigyan lab supports the study of medicinal plants, crude drugs, identification methods, and the therapeutic properties of classical Ayurvedic substances.",
    images: [
      "/labs/DravyagunaVigyan/DravyagunaVigyan1.jpg",
      "/labs/DravyagunaVigyan/DravyagunaVigyan2.jpg",
      "/labs/DravyagunaVigyan/DravyagunaVigyan3.jpg",
    ],
  },
  {
    id: "roga-nidan-evam-vikriti-vigyan",
    title: "Roga Nidan Evam Vikriti Vigyan",
    eyebrow: "Diagnostic Learning",
    description:
      "This lab is dedicated to diagnostic principles, pathology, sample-based observation, and the study of disease identification through Ayurvedic and modern approaches.",
    images: [
      "/labs/RogaNidanEvamVikritiVigyan/RogaNidanEvamVikritiVigyan1.jpg",
      "/labs/RogaNidanEvamVikritiVigyan/RogaNidanEvamVikritiVigyan2.jpg",
      "/labs/RogaNidanEvamVikritiVigyan/RogaNidanEvamVikritiVigyan3.jpg",
    ],
  },
  {
    id: "swasthavritta-evam-yoga",
    title: "Swasthavritta Evam Yoga",
    eyebrow: "Preventive Health",
    description:
      "The Swasthavritta Evam Yoga lab focuses on public health, preventive healthcare, personal wellness, yogic practices, and lifestyle-based teaching support.",
    images: [
      "/labs/SwasthavrittaEvamYoga/SwasthavrittaEvamYoga1.jpg",
      "/labs/SwasthavrittaEvamYoga/SwasthavrittaEvamYoga2.jpg",
      "/labs/SwasthavrittaEvamYoga/SwasthavrittaEvamYoga3.jpg",
    ],
  },
  {
    id: "agad-tantra",
    title: "Agad Tantra",
    eyebrow: "Toxicology",
    description:
      "This lab supports the study of toxicology, medico-legal fundamentals, poisons, emergency principles, and awareness of practical forensic observations in Ayurveda.",
    images: [
      "/labs/AgadTantra/agadTantra1.jpg",
      "/labs/AgadTantra/agadTantra2.jpg",
      "/labs/AgadTantra/agadTantra3.jpg",
    ],
  },
  {
    id: "shalya-tantra",
    title: "Shalya Tantra",
    eyebrow: "Surgical Training",
    description:
      "The Shalya Tantra lab provides academic support for surgical instruments, procedural demonstrations, para-surgical understanding, and practical orientation in Shalya studies.",
    images: [
      "/labs/ShalyaTantra/ShalyaTantra1.jpg",
      "/labs/ShalyaTantra/ShalyaTantra2.jpg",
      "/labs/ShalyaTantra/ShalyaTantra3.jpg",
    ],
  },
  {
    id: "shalakya",
    title: "Shalakya",
    eyebrow: "ENT & Ophthalmic Study",
    description:
      "This lab helps students study diseases and procedures related to the eye, ear, nose, throat, and allied Shalakya Tantra clinical concepts.",
    images: [
      "/labs/Shalakya/Shalakya1.jpg",
      "/labs/Shalakya/Shalakya2.jpg",
      "/labs/Shalakya/Shalakya3.jpg",
    ],
  },
  {
    id: "panchkarma",
    title: "Panchkarma",
    eyebrow: "Therapeutic Procedures",
    description:
      "The Panchkarma lab introduces students to classical detoxification therapies, procedure rooms, equipment, and the practical framework of Panchkarma treatment.",
    images: [
      "/labs/Panchakarma/Panchakarma1.jpg",
      "/labs/Panchakarma/Panchakarma2.jpg",
      "/labs/Panchakarma/Panchakarma3.jpg",
    ],
  },
  {
    id: "kaya-chikitsa",
    title: "Kaya Chikitsa",
    eyebrow: "Clinical Medicine",
    description:
      "This section supports internal medicine learning in Ayurveda, covering disease management concepts, therapeutic planning, and applied clinical understanding.",
    images: [
      "/labs/KayaChikitsa/KayaChikitsa1.jpg",
      "/labs/KayaChikitsa/KayaChikitsa2.jpg",
      "/labs/KayaChikitsa/KayaChikitsa3.jpg",
    ],
  },
  {
    id: "bal-rog",
    title: "Bal Rog",
    eyebrow: "Pediatric Care",
    description:
      "The Bal Rog lab is oriented toward pediatric Ayurvedic study, child health assessment, developmental understanding, and disease management principles in children.",
    images: [
      "/labs/BalRog/balRog1.jpg",
      "/labs/BalRog/balRog2.jpg",
      "/labs/BalRog/balRog3.jpg",
    ],
  },
  {
    id: "prasuti-stri-roga",
    title: "Prasuti & Stri Roga",
    eyebrow: "Women's Health",
    description:
      "This lab supports teaching in obstetrics and gynecology within Ayurveda, including women's health concepts, maternal care, and academic demonstration tools.",
    images: [
      "/labs/Prasuti&StriRoga/prasutiAndStriRoga1.jpg",
      "/labs/Prasuti&StriRoga/prasutiAndStriRoga2.jpg",
      "/labs/Prasuti&StriRoga/prasutiAndStriRoga3.jpg",
    ],
  },
];

const Labs = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-100/30 blur-3xl" />

        <div className="container mx-auto max-w-300 px-4 sm:px-6">
          <SectionHeading
            eyebrow="College Labs"
            title={
              <>
                Explore Our <span className="text-emerald-800">Laboratories</span>
              </>
            }
            description="Each department lab is organized below so students and visitors can quickly navigate to the respective academic and practical training area."
            align="center"
            className="mb-14"
          />

          <div
            className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] sm:mx-0 sm:px-0 sm:pb-0"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex min-w-max gap-3 rounded-3xl border border-emerald-900/10 bg-white/70 p-3 shadow-lg shadow-emerald-950/5 backdrop-blur-sm sm:grid sm:min-w-0 sm:grid-cols-2 sm:gap-4 sm:rounded-4xl sm:p-5 lg:grid-cols-4">
              {labsData.map((lab) => (
                <a
                  key={lab.id}
                  href={`#${lab.id}`}
                  className="flex min-h-12 items-center rounded-2xl border border-emerald-900/10 bg-[#fdfbf5] px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-800 hover:text-emerald-800 sm:min-h-0 sm:justify-center"
                >
                  {lab.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:space-y-10 sm:px-6">
          {labsData.map((lab, index) => (
            <section
              key={lab.id}
              id={lab.id}
              className={`scroll-mt-28 rounded-4xl border border-emerald-900/8 p-4 shadow-lg shadow-emerald-950/5 backdrop-blur-sm sm:scroll-mt-36 sm:rounded-4xl sm:p-8 lg:p-10 ${
                index % 2 === 0 ? "bg-white/80" : "bg-[#f6f4ee]/90"
              }`}
            >
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800 sm:mb-4 sm:px-4 sm:text-xs">
                    {lab.eyebrow}
                  </div>
                  <h2 className="text-xl font-black text-slate-900 sm:text-3xl">
                    {lab.title}
                  </h2>
                  <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
                    {lab.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <div className="overflow-hidden rounded-[1.75rem] shadow-lg sm:col-span-2 sm:rounded-3xl">
                    <img
                      src={lab.images[0]}
                      alt={`${lab.title} lab`}
                      className="h-56 w-full object-cover sm:h-80"
                    />
                  </div>
                  {lab.images.slice(1, 3).map((image, imageIndex) => (
                    <div
                      key={image}
                      className="overflow-hidden rounded-2xl shadow-md"
                    >
                      <img
                        src={image}
                        alt={`${lab.title} lab view ${imageIndex + 2}`}
                        className="h-44 w-full object-cover sm:h-40"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Labs;
