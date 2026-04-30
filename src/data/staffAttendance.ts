import type { DocumentTableRow } from "../components/shared/DocumentTable";
import getPublicAssetPath from "../utils/assetPath";

const placeholderHref = "#";
const getAttendancePdf = (relativePath: string) =>
  getPublicAssetPath(`/Staff/attendance/${relativePath}`);

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

type AttendanceMonth = (typeof monthNames)[number];
type AttendanceMonthMap = Partial<Record<AttendanceMonth, string>>;
type AttendanceByYear = Record<string, DocumentTableRow[]>;

const buildAttendanceRows = (
  prefix: string,
  year: string,
  publishedMonths: AttendanceMonthMap = {},
): DocumentTableRow[] =>
  monthNames.map((month, index) => {
    const pdfHref = publishedMonths[month];

    return {
      id: index + 1,
      title: `${prefix} (${month})`,
      href: pdfHref ?? placeholderHref,
      isPublished: Boolean(pdfHref),
      year,
      month,
    };
  });

const teachingStaffAttendanceByYear: AttendanceByYear = {
  "2023": buildAttendanceRows("ATTENDANCE TEACHING STAFF", "2023", {
    January: getAttendancePdf("2023/JANUARY2023.pdf"),
    March: getAttendancePdf("2023/MARCH2023.pdf"),
    April: getAttendancePdf("2023/APRIL2023.pdf"),
    May: getAttendancePdf("2023/may2023.pdf"),
    June: getAttendancePdf("2023/jun2023.pdf"),
    July: getAttendancePdf("2023/jul2023.pdf"),
    August: getAttendancePdf("2023/aug2023.pdf"),
    October: getAttendancePdf("2023/oct23.pdf"),
    November: getAttendancePdf("2023/nov23.pdf"),
    December: getAttendancePdf("2023/dec-2023.pdf"),
  }),
  "2024": buildAttendanceRows("ATTENDANCE TEACHING STAFF", "2024", {
    January: getAttendancePdf("2024/JAN_TEACHING_STAFF.pdf"),
    February: getAttendancePdf("2024/Feb_TEACHING_STAFF.pdf"),
    March: getAttendancePdf("2024/March_TEACHING_STAFF.pdf"),
    April: getAttendancePdf("2024/APRILTEACHINGATTENDANCE.pdf"),
    May: getAttendancePdf("2024/MAYTEACHINGATTENDANCE24.pdf"),
    June: getAttendancePdf("2024/juneteachingstaff24.pdf"),
    July: getAttendancePdf("2024/julyteaching24.pdf"),
    August: getAttendancePdf("2024/Teaching_Aug_24.pdf"),
    September: getAttendancePdf("2024/TeachingSeptember.pdf"),
    October: getAttendancePdf("2024/TeachingStaff_OCTOBER2024.pdf"),
    November: getAttendancePdf("2024/TeachingStaff_NOVEMBER2024.pdf"),
    December: getAttendancePdf("2024/TeachingStaff_DECEMBER.pdf"),
  }),
  "2025": buildAttendanceRows("ATTENDANCE TEACHING STAFF", "2025", {
    January: getAttendancePdf("2025/TeachingStaff_JANUARY-25.pdf"),
    February: getAttendancePdf("2025/TeachingStaff_FEB-25.pdf"),
    March: getAttendancePdf("2025/TeachingStaff_MARCH-25.pdf"),
    April: getAttendancePdf("2025/April_Attendance_2025_Teaching.pdf"),
    May: getAttendancePdf("2025/May_Teaching_Attendance_2025.pdf"),
    June: getAttendancePdf("2025/TeachingStaff_Jun2025.pdf"),
    July: getAttendancePdf("2025/TeachingStaff_July2025.pdf"),
    August: getAttendancePdf("2025/TeachingStaff_August2025.pdf"),
    September: getAttendancePdf("2025/TeachingStaff_September2025.pdf"),
    October: getAttendancePdf("2025/TeachingStaff_OCTOBER_ 2025.pdf"),
    November: getAttendancePdf("2025/TeachingStaff_NOV_2025.pdf"),
    December: getAttendancePdf("2025/TeachingStaff_DEC_2025.pdf"),
  }),
  "2026": buildAttendanceRows("ATTENDANCE TEACHING STAFF", "2026", {
    January: getAttendancePdf("2026/TeacherStaff_Jan_2026.pdf"),
    February: getAttendancePdf("2026/TeacherStaff_Feb_2026.pdf"),
    March: getAttendancePdf("2026/Teaching_Staff_March_2026.pdf"),
  }),
};

const nonTeachingStaffAttendanceByYear: AttendanceByYear = {
  "2023": buildAttendanceRows("ATTENDANCE NON TEACHING STAFF", "2023", {
    January: getAttendancePdf("non-teaching/2023/JANUARY 2023.pdf"),
    February: getAttendancePdf("non-teaching/2023/FEBRUARY 2023.pdf"),
    March: getAttendancePdf("non-teaching/2023/MARCH 2023.pdf"),
    April: getAttendancePdf("non-teaching/2023/4.pdf"),
    May: getAttendancePdf("non-teaching/2023/MAY2023.pdf"),
    June: getAttendancePdf("non-teaching/2023/6.pdf"),
    July: getAttendancePdf("non-teaching/2023/jul_2023.pdf"),
    August: getAttendancePdf("non-teaching/2023/Aug_2023.pdf"),
    September: getAttendancePdf("non-teaching/2023/sep_2023.pdf"),
    October: getAttendancePdf("non-teaching/2023/oct_2023.pdf"),
    November: getAttendancePdf("non-teaching/2023/nov_2023.pdf"),
    December: getAttendancePdf("non-teaching/2023/dec-2023.pdf"),
  }),
  "2024": buildAttendanceRows("ATTENDANCE NON TEACHING STAFF", "2024", {
    January: getAttendancePdf("non-teaching/2024/jan_non_teaching.pdf"),
    February: getAttendancePdf("non-teaching/2024/feb_non_teaching.pdf"),
    March: getAttendancePdf("non-teaching/2024/march_non_teaching.pdf"),
    April: getAttendancePdf("non-teaching/2024/APRILNONTEACHING.pdf"),
    May: getAttendancePdf("non-teaching/2024/Maynonteaching24.pdf"),
    June: getAttendancePdf("non-teaching/2024/june non teaching.pdf"),
    July: getAttendancePdf("non-teaching/2024/julynonteaching.pdf"),
    August: getAttendancePdf("non-teaching/2024/NonTeaching_Aug_24.pdf"),
    September: getAttendancePdf(
      "non-teaching/2024/TECHNICAL & OTHER STAFF SEPTEMBER.pdf",
    ),
    October: getAttendancePdf("non-teaching/2024/Non_Teaching_OCTOBER.pdf"),
    November: getAttendancePdf("non-teaching/2024/Non_Teaching_NOVEMBER.pdf"),
    December: getAttendancePdf(
      "non-teaching/2024/Non_Teaching_DECEMBER-24.pdf",
    ),
  }),
  "2025": buildAttendanceRows("ATTENDANCE NON TEACHING STAFF", "2025", {
    January: getAttendancePdf("non-teaching/2025/Non_TeachingJAN25.pdf"),
    February: getAttendancePdf("non-teaching/2025/Non_Teachin_FEB25.pdf"),
    March: getAttendancePdf("non-teaching/2025/Non_Teaching_MARCH-25.pdf"),
    April: getAttendancePdf("non-teaching/2025/Non_Teaching_APRIL 2025.pdf"),
    May: getAttendancePdf("non-teaching/2025/Non_TeachingMAY_2025.pdf"),
    June: getAttendancePdf("non-teaching/2025/Non_Teaching_JUNE2025.pdf"),
    July: getAttendancePdf("non-teaching/2025/Non_Teaching_JULY2025.pdf"),
    August: getAttendancePdf("non-teaching/2025/Non_Teaching_August 2025.pdf"),
    September: getAttendancePdf(
      "non-teaching/2025/Non_Teaching_SEPTEMBER2025.pdf",
    ),
    October: getAttendancePdf(
      "non-teaching/2025/Non_Teaching_OCTOBER_ 2025.pdf",
    ),
    November: getAttendancePdf("non-teaching/2025/Non_Teaching_NO_ 2025.pdf"),
    December: getAttendancePdf("non-teaching/2025/Non_Tea_DEC2025.pdf"),
  }),
  "2026": buildAttendanceRows("ATTENDANCE NON TEACHING STAFF", "2026", {
    January: getAttendancePdf("non-teaching/2026/Non_Tea_JAN_2026.pdf"),
    February: getAttendancePdf("non-teaching/2026/Non_Tea_FEB_ 2026.pdf"),
    March: getAttendancePdf("non-teaching/2026/Non_Teaching_MARCH_2026.pdf"),
  }),
};

const hospitalStaffAttendanceByYear: AttendanceByYear = {
  "2023": buildAttendanceRows("ATTENDANCE HOSPITAL STAFF", "2023", {
    January: getAttendancePdf("hospital/2023/1.pdf"),
    February: getAttendancePdf("hospital/2023/2.pdf"),
    March: getAttendancePdf("hospital/2023/3.pdf"),
    April: getAttendancePdf("hospital/2023/4.pdf"),
    May: getAttendancePdf("hospital/2023/5.pdf"),
    June: getAttendancePdf("hospital/2023/6.pdf"),
    July: getAttendancePdf("hospital/2023/7.pdf"),
    August: getAttendancePdf("hospital/2023/8.pdf"),
    September: getAttendancePdf("hospital/2023/sep-2023.pdf"),
    November: getAttendancePdf(
      "hospital/2023/NOVEMBER-HOSPITAL-STAFF 2023.pdf",
    ),
    December: getAttendancePdf("hospital/2023/dec-2023.pdf"),
  }),
  "2024": buildAttendanceRows("ATTENDANCE HOSPITAL STAFF", "2024", {
    January: getAttendancePdf("hospital/2024/JAN_HOSPITAL.pdf"),
    February: getAttendancePdf("hospital/2024/Feb_HOSPITAL.pdf"),
    March: getAttendancePdf("hospital/2024/March_HOSPITAL.pdf"),
    May: getAttendancePdf("hospital/2024/Mayhospital24.pdf"),
    June: getAttendancePdf("hospital/2024/JUNE HOSPITAL 24.pdf"),
    July: getAttendancePdf("hospital/2024/hosjuly24.pdf"),
    August: getAttendancePdf("hospital/2024/Hospital_Aug_24.pdf"),
    September: getAttendancePdf("hospital/2024/Hospital_Staff_September.pdf"),
    October: getAttendancePdf("hospital/2024/HOSPITAL OCTOBER_organized.pdf"),
    November: getAttendancePdf("hospital/2024/HospitalNov24.pdf"),
    December: getAttendancePdf("hospital/2024/HOSPITAL_DECEMBER.pdf"),
  }),
  "2025": buildAttendanceRows("ATTENDANCE HOSPITAL STAFF", "2025", {
    January: getAttendancePdf("hospital/2025/Hospital_Jan25.pdf"),
    February: getAttendancePdf("hospital/2025/Hospital_feb25_staff.pdf"),
    March: getAttendancePdf("hospital/2025/Hospital_March_Attendance_2025.pdf"),
    April: getAttendancePdf("hospital/2025/APRIL 2025.pdf"),
    May: getAttendancePdf("hospital/2025/May 2025.pdf"),
    June: getAttendancePdf("hospital/2025/June 2025.pdf"),
    July: getAttendancePdf("hospital/2025/July_2025.pdf"),
    August: getAttendancePdf("hospital/2025/August 2025.pdf"),
    September: getAttendancePdf("hospital/2025/September 2025.pdf"),
    October: getAttendancePdf("hospital/2025/October 2025.pdf"),
    November: getAttendancePdf("hospital/2025/NOVEMBER_ 2025.pdf"),
    December: getAttendancePdf("hospital/2025/Hospitalatt_DEC_2025.pdf"),
  }),
  "2026": buildAttendanceRows("ATTENDANCE HOSPITAL STAFF", "2026", {
    January: getAttendancePdf("hospital/2026/HospitalAttend_JAN_2026.pdf"),
    February: getAttendancePdf("hospital/2026/Hospital_Att_FEB_2026.pdf"),
    March: getAttendancePdf("hospital/2026/Hospital_Att_MARCH_2026.pdf"),
  }),
};

const staffAttendanceYears = Object.keys(teachingStaffAttendanceByYear);

export {
  hospitalStaffAttendanceByYear,
  nonTeachingStaffAttendanceByYear,
  staffAttendanceYears,
  teachingStaffAttendanceByYear,
};
