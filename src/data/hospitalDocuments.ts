import type { DocumentTableRow } from "../components/shared/DocumentTable";
import getPublicAssetPath from "../utils/assetPath";

const placeholderHref = "#";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type DocumentMonth = (typeof monthNames)[number];
type DocumentMonthMap = Partial<Record<DocumentMonth, string>>;
type DocumentsByYear = Record<string, DocumentTableRow[]>;

const buildHospitalPdf = (section: string, relativePath: string) =>
  getPublicAssetPath(`/hospital/${section}/${relativePath}`);

const buildRows = (
  prefix: string,
  year: string,
  publishedMonths: DocumentMonthMap = {},
): DocumentTableRow[] =>
  monthNames.map((month, index) => {
    const href = publishedMonths[month];

    return {
      id: index + 1,
      title: `${prefix} (${month})`,
      href: href ?? placeholderHref,
      isPublished: Boolean(href),
      year,
      month,
    };
  });

const hospitalOpdByYear: DocumentsByYear = {
  "2023": buildRows("OPD", "2023", {
    January: buildHospitalPdf("opd", "2023/JANUARY 2023.pdf"),
    February: buildHospitalPdf("opd", "2023/FEBRUARY 2023.pdf"),
    March: buildHospitalPdf("opd", "2023/MARCH 2023.pdf"),
    April: buildHospitalPdf("opd", "2023/APRIL 2023.pdf"),
    May: buildHospitalPdf("opd", "2023/May23.pdf"),
    June: buildHospitalPdf("opd", "2023/OPD_JUNE_23.pdf"),
    July: buildHospitalPdf("opd", "2023/OPD_JULY_23.pdf"),
    August: buildHospitalPdf("opd", "2023/OPD_AUGUST_23.pdf"),
    September: buildHospitalPdf("opd", "2023/OPD_sep_2023.pdf"),
    October: buildHospitalPdf("opd", "2023/OPD_oct_2023.jpeg"),
    December: buildHospitalPdf("opd", "2023/OPD_dec_2023.pdf"),
  }),
  "2024": buildRows("OPD", "2024", {
    January: buildHospitalPdf("opd", "2024/JANUARY_2024.pdf"),
    February: buildHospitalPdf("opd", "2024/February_2024.pdf"),
    March: buildHospitalPdf("opd", "2024/mar_2024.pdf"),
    April: buildHospitalPdf("opd", "2024/OPDApril2024.pdf"),
    May: buildHospitalPdf("opd", "2024/OPDMAY2024.pdf"),
    June: buildHospitalPdf("opd", "2024/opd_june.pdf"),
    July: buildHospitalPdf("opd", "2024/opdjuly24.pdf"),
    August: buildHospitalPdf("opd", "2024/opd_aug_24.pdf"),
    September: buildHospitalPdf("opd", "2024/opd_sep_24.pdf"),
    October: buildHospitalPdf("opd", "2024/OPD(oct2024).pdf"),
    November: buildHospitalPdf("opd", "2024/OPD(nov2024).pdf"),
    December: buildHospitalPdf("opd", "2024/OPD_dec_24.pdf"),
  }),
  "2025": buildRows("OPD", "2025", {
    January: buildHospitalPdf("opd", "2025/OPD_JAN25.pdf"),
    February: buildHospitalPdf("opd", "2025/OPD_FEB25.pdf"),
    March: buildHospitalPdf("opd", "2025/OPD_March_25.pdf"),
    April: buildHospitalPdf("opd", "2025/OPDAPRIL2025.pdf"),
    May: buildHospitalPdf("opd", "2025/OPDMAY2025.pdf"),
    June: buildHospitalPdf("opd", "2025/OPDJUN2025.pdf"),
    July: buildHospitalPdf("opd", "2025/OPDJuly2025.pdf"),
    August: buildHospitalPdf("opd", "2025/OPD_August_2025.pdf"),
    September: buildHospitalPdf("opd", "2025/OPDSEPT2025.pdf"),
    October: buildHospitalPdf("opd", "2025/OPDOCT2025.pdf"),
    November: buildHospitalPdf("opd", "2025/OPD_Nov2025.pdf"),
    December: buildHospitalPdf("opd", "2025/OPD_Dec2025.pdf"),
  }),
  "2026": buildRows("OPD", "2026", {
    January: buildHospitalPdf("opd", "2026/OPD_JAN_2026.pdf"),
    February: buildHospitalPdf("opd", "2026/OPD_FAB_2026.pdf"),
  }),
};

const hospitalIpdByYear: DocumentsByYear = {
  "2023": buildRows("IPD", "2023", {
    January: buildHospitalPdf("ipd", "2023/JANUARY 2023.pdf"),
    February: buildHospitalPdf("ipd", "2023/FEBRUARY 2023.pdf"),
    March: buildHospitalPdf("ipd", "2023/MARCH 2023.pdf"),
    April: buildHospitalPdf("ipd", "2023/APRIL 2023.pdf"),
    May: buildHospitalPdf("ipd", "2023/may23.pdf"),
    June: buildHospitalPdf("ipd", "2023/ipd_jun_2023.pdf"),
    July: buildHospitalPdf("ipd", "2023/ipd_jul_2023.pdf"),
    August: buildHospitalPdf("ipd", "2023/ipd_aug_2023.pdf"),
    September: buildHospitalPdf("ipd", "2023/ipd_sep_2023.pdf"),
    October: buildHospitalPdf("ipd", "2023/ipd_oct_2023.jpeg"),
    November: buildHospitalPdf("ipd", "2023/ipd_nov_2023.pdf"),
    December: buildHospitalPdf("ipd", "2023/Ipd_dec2023.pdf"),
  }),
  "2024": buildRows("IPD", "2024", {
    January: buildHospitalPdf("ipd", "2024/JANUARY_2024.pdf"),
    February: buildHospitalPdf("ipd", "2024/februarys_2024.pdf"),
    March: buildHospitalPdf("ipd", "2024/Mar_2024.pdf"),
    April: buildHospitalPdf("ipd", "2024/IPDApril2024.pdf"),
    May: buildHospitalPdf("ipd", "2024/IPDMAY2024.pdf"),
    June: buildHospitalPdf("ipd", "2024/IPD_JUNE.pdf"),
    July: buildHospitalPdf("ipd", "2024/ipdjuly24.pdf"),
    August: buildHospitalPdf("ipd", "2024/ipd_aug_24.pdf"),
    September: buildHospitalPdf("ipd", "2024/ipd_sep_24.pdf"),
    October: buildHospitalPdf("ipd", "2024/IPD(Oct2024).pdf"),
    November: buildHospitalPdf("ipd", "2024/IPD(Nov2024).pdf"),
    December: buildHospitalPdf("ipd", "2024/IPD_dec_24.pdf"),
  }),
  "2025": buildRows("IPD", "2025", {
    January: buildHospitalPdf("ipd", "2025/ipd_jan25.pdf"),
    February: buildHospitalPdf("ipd", "2025/IPD_feb25.pdf"),
    March: buildHospitalPdf("ipd", "2025/IPD_March_25.pdf"),
    April: buildHospitalPdf("ipd", "2025/IPDAPRIL2025.pdf"),
    May: buildHospitalPdf("ipd", "2025/IPDMAY2025.pdf"),
    June: buildHospitalPdf("ipd", "2025/IPDJUN2025.pdf"),
    July: buildHospitalPdf("ipd", "2025/IPDJULY2025.pdf"),
    August: buildHospitalPdf("ipd", "2025/IPD_August2025.pdf"),
    September: buildHospitalPdf("ipd", "2025/IPDSEPT2025.pdf"),
    October: buildHospitalPdf("ipd", "2025/IPDOCT2025.pdf"),
    November: buildHospitalPdf("ipd", "2025/IPD_Nov2025.pdf"),
    December: buildHospitalPdf("ipd", "2025/IPD_Dec2025.pdf"),
  }),
  "2026": buildRows("IPD", "2026", {
    January: buildHospitalPdf("ipd", "2026/IPD_JAN_2026.pdf"),
    February: buildHospitalPdf("ipd", "2026/IPD_FAB_2026.pdf"),
  }),
};

const hospitalBedOccupancyByYear: DocumentsByYear = {
  "2023": buildRows("Bed Occupancy", "2023", {
    January: buildHospitalPdf("bed-occupancy", "2023/JANUARY 2023.pdf"),
    February: buildHospitalPdf("bed-occupancy", "2023/FEBRUARY 2023.pdf"),
    March: buildHospitalPdf("bed-occupancy", "2023/MARCH 2023.pdf"),
    April: buildHospitalPdf("bed-occupancy", "2023/APRIL 2023.pdf"),
    May: buildHospitalPdf("bed-occupancy", "2023/May2023.pdf"),
    June: buildHospitalPdf("bed-occupancy", "2023/bed_jun_2023.pdf"),
    July: buildHospitalPdf("bed-occupancy", "2023/bed_jul_2023.pdf"),
    August: buildHospitalPdf("bed-occupancy", "2023/bed_aug_2023.pdf"),
    September: buildHospitalPdf("bed-occupancy", "2023/bed_sep_2023.pdf"),
    October: buildHospitalPdf("bed-occupancy", "2023/bed_oct_2023.jpeg"),
    November: buildHospitalPdf("bed-occupancy", "2023/bed_nov_2023.pdf"),
    December: buildHospitalPdf("bed-occupancy", "2023/BedOccupancy_dec2023.pdf"),
  }),
  "2024": buildRows("Bed Occupancy", "2024", {
    January: buildHospitalPdf("bed-occupancy", "2024/JANUARY_2024.pdf"),
    February: buildHospitalPdf("bed-occupancy", "2024/februaryss_2024.pdf"),
    March: buildHospitalPdf("bed-occupancy", "2024/March_2024.pdf"),
    April: buildHospitalPdf("bed-occupancy", "2024/bedoccupancyaoril2024.pdf"),
    May: buildHospitalPdf("bed-occupancy", "2024/bedoccupancyaoril2024.pdf"),
    June: buildHospitalPdf("bed-occupancy", "2024/BED_JUNE.pdf"),
    July: buildHospitalPdf("bed-occupancy", "2024/bedoccupancyjuly24.pdf"),
    August: buildHospitalPdf("bed-occupancy", "2024/bed_aug_24.pdf"),
    September: buildHospitalPdf("bed-occupancy", "2024/bed_sep_24.pdf"),
    October: buildHospitalPdf("bed-occupancy", "2024/BedOccupancy(Oct2024).pdf"),
    November: buildHospitalPdf("bed-occupancy", "2024/BedOccupancy(Nov2024).pdf"),
    December: buildHospitalPdf("bed-occupancy", "2024/bed_occ_dec_4.pdf"),
  }),
  "2025": buildRows("Bed Occupancy", "2025", {
    January: buildHospitalPdf("bed-occupancy", "2025/bed_jan_25.pdf"),
    February: buildHospitalPdf("bed-occupancy", "2025/bed_occupancyfeb25.pdf"),
    March: buildHospitalPdf("bed-occupancy", "2025/Bed_March_25.pdf"),
    April: buildHospitalPdf("bed-occupancy", "2025/BEDOCCUPANCYAPRIL 2025.pdf"),
    May: buildHospitalPdf("bed-occupancy", "2025/BED OCCUPANCY MAY 2025.pdf"),
    June: buildHospitalPdf("bed-occupancy", "2025/BED OCCUPANCY JUN 2025.pdf"),
    July: buildHospitalPdf("bed-occupancy", "2025/BED OCCUPANCY JULY 2025 .pdf"),
    August: buildHospitalPdf("bed-occupancy", "2025/BEDOCCUPANCY_August2025.pdf"),
    September: buildHospitalPdf("bed-occupancy", "2025/BEDSEPT2025.pdf"),
    October: buildHospitalPdf("bed-occupancy", "2025/BEDOCT2025.pdf"),
    November: buildHospitalPdf("bed-occupancy", "2025/BED_Nov2025.pdf"),
    December: buildHospitalPdf("bed-occupancy", "2025/BED_Dec2025.pdf"),
  }),
  "2026": buildRows("Bed Occupancy", "2026", {
    January: buildHospitalPdf("bed-occupancy", "2026/BED_JAN_2026.pdf"),
    February: buildHospitalPdf("bed-occupancy", "2026/BED_FAB_2026.pdf"),
  }),
};

const hospitalDocumentYears = Object.keys(hospitalOpdByYear);

export {
  hospitalBedOccupancyByYear,
  hospitalDocumentYears,
  hospitalIpdByYear,
  hospitalOpdByYear,
};
