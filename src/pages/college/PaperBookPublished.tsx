import type { DocumentTableRow } from "../../components/shared/DocumentTable";
import DocumentTable from "../../components/shared/DocumentTable";
import SectionHeading from "../../components/shared/SectionHeading";
import getPublicAssetPath from "../../utils/assetPath";

const publishedWorks: DocumentTableRow[] = [
  {
    id: 1,
    title:
      "STUDY ON RELATIONSHIP BETWEEN HEART RATE VARIABILITY BETWEEN DOSHA PRAKRUTI: AN OBSERVATIONAL STUDY",
    href: getPublicAssetPath(
      "/college/paper-book-published/638147507099998181.pdf",
    ),
  },
  {
    id: 2,
    title:
      "SURVEY STUDY ON COLLATION OF DEHA PRAKRUTI AND JANMA RASHI PRABHAV FROM BHRUGU SAMHITA WITH SPECIAL REFERENCE OF CHARAK SAMHITA",
    href: getPublicAssetPath(
      "/college/paper-book-published/638150053188414029.pdf",
    ),
  },
  {
    id: 3,
    title:
      "STUDY OF RELATION BETWEEN DOSHAJ PRAKRUTI AND HEART RATE VARIABILITY IN GERIATICS",
    href: getPublicAssetPath(
      "/college/paper-book-published/638150053464920012.pdf",
    ),
  },
  {
    id: 4,
    title: "FUNDAMENTAL PRINCIPLES OF AYURVEDA AND QUANTAM MECHANICS",
    href: getPublicAssetPath(
      "/college/paper-book-published/638194467138909886.jpg",
    ),
  },
  {
    id: 5,
    title: "JOURNAL OF AYURVEDA AND INTEGRATED MEDICAL SCIENCES",
    href: getPublicAssetPath(
      "/college/paper-book-published/638258396633998901.pdf",
    ),
  },
  {
    id: 6,
    title:
      "JOURNAL OF AYURVEDA AND INTEGRATED MEDICAL SCIENCES RAJ MOHAN MISHRA",
    href: getPublicAssetPath(
      "/college/paper-book-published/638258798284080144.pdf",
    ),
  },
  {
    id: 7,
    title:
      "PRACTICAL WORK BOOK IN KRIYA SHARIR (BOOK ISBN: 978-93-93068-77-4) WRITTEN BY DR. AMIT KUMAR MISHRA",
    href: getPublicAssetPath(
      "/college/paper-book-published/638434298168043077.jpeg",
    ),
  },
  {
    id: 8,
    title:
      "STANARD OPERATING PROCEDURE OF ESSENTIAL ANALYTICAL INSTRUMENTS (BOOK ISBN : 978-93-90777-79-2) WRITTEN BY DR. ASHUTOSH PANDEY",
    href: getPublicAssetPath(
      "/college/paper-book-published/638434299078206574.jpeg",
    ),
  },
  {
    id: 9,
    title:
      "BOOK PUBLISHED IN SAMHITA ADDHYAN-I ( ) WRITTEN BY DR. SHAILDENRA SINGH SENGAR & DR. PRAGYA SINGH",
    href: getPublicAssetPath(
      "/college/paper-book-published/638649367320481804.jpeg",
    ),
  },
  {
    id: 10,
    title:
      "COMPARATIVE STUDY OF GUDA SHARIR WITH CONTEMPORARY KNOWLEDGE OF ANATOMY",
    href: getPublicAssetPath(
      "/college/paper-book-published/638649369324718671.pdf",
    ),
  },
  {
    id: 11,
    title:
      "STUDY OF JAYPALA BEEJ CHURAN FOR IT'S KRIMIGHAN PROPERTY W.S.R TO ANTIBACTERIAL ACTIVITY ON S-AUREUS, AND E-COLI DEALS WITH DETAIL IN-VITRO ANTI BACTERIAL STUDY Dr. RAJ MOHAN MISHRA",
    href: getPublicAssetPath(
      "/college/paper-book-published/638930269922403658.pdf",
    ),
  },
];

const PaperBookPublished = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="College Publications"
            title={
              <>
                Paper & Book <span className="text-emerald-800">Published</span>
              </>
            }
            description="This page is ready for your publication PDFs. Once you replace a row's placeholder link with a real file, the same table will automatically switch that entry into the normal clickable document flow."
            align="center"
            className="mb-10"
          />

          <div className="mb-6 rounded-4xl border border-emerald-900/10 bg-white/70 px-6 py-5 text-center shadow-md shadow-slate-900/5 backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-900">
              Research Archive
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Published Papers & Books
            </h2>
          </div>

          <DocumentTable rows={publishedWorks} actionLabel="View Details" />
        </div>
      </section>
    </div>
  );
};

export default PaperBookPublished;
