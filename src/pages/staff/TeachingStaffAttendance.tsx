import {
  staffAttendanceYears,
  teachingStaffAttendanceByYear,
} from "../../data/staffAttendance";
import StaffAttendancePage from "./StaffAttendancePage";

const TeachingStaffAttendance = () => {
  return (
    <StaffAttendancePage
      title="Teaching Staff Attendance"
      years={staffAttendanceYears}
      attendanceByYear={teachingStaffAttendanceByYear}
    />
  );
};

export default TeachingStaffAttendance;
