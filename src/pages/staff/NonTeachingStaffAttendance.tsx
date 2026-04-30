import {
  nonTeachingStaffAttendanceByYear,
  staffAttendanceYears,
} from "../../data/staffAttendance";
import StaffAttendancePage from "./StaffAttendancePage";

const NonTeachingStaffAttendance = () => {
  return (
    <StaffAttendancePage
      title="Non Teaching Staff Attendance"
      years={staffAttendanceYears}
      attendanceByYear={nonTeachingStaffAttendanceByYear}
    />
  );
};

export default NonTeachingStaffAttendance;
