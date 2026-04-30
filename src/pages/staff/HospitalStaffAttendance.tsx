import {
  hospitalStaffAttendanceByYear,
  staffAttendanceYears,
} from "../../data/staffAttendance";
import StaffAttendancePage from "./StaffAttendancePage";

const HospitalStaffAttendance = () => {
  return (
    <StaffAttendancePage
      title="Hospital Staff Attendance"
      years={staffAttendanceYears}
      attendanceByYear={hospitalStaffAttendanceByYear}
    />
  );
};

export default HospitalStaffAttendance;
