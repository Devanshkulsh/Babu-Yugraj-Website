import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Topbar from "./layout/Topbar";
// import Academics from "./pages/Academics";
// import Admissions from "./pages/Admissions";
// import Contact from "./pages/Contact";
// import Facilities from "./pages/Facilities";
import Home from "./pages/Home";
import AboutUs from "./pages/about/AboutUs";
import ManagementMessage from "./pages/about/ManagementMessage";
import OurTeam from "./pages/about/OurTeam";
import HospitalStaffAttendance from "./pages/staff/HospitalStaffAttendance";
import NonTeachingStaffAttendance from "./pages/staff/NonTeachingStaffAttendance";
import TeachingStaffAttendance from "./pages/staff/TeachingStaffAttendance";
import Infrastructure from "./pages/college/Infrastructure";
import PaperBookPublished from "./pages/college/PaperBookPublished";
import DocumentViewer from "./pages/DocumentViewer";
import BedOccupancyRecords from "./pages/hospital/BedOccupancyRecords";
import IpdRecords from "./pages/hospital/IpdRecords";
import OpdRecords from "./pages/hospital/OpdRecords";
import AcademicValues from "./pages/academics/AcademicValues";
import Course from "./pages/academics/Course";
import MeritWiseList from "./pages/student-corner/MeritWiseList";
import StudentList from "./pages/student-corner/StudentList";
import AdmissionProcess from "./pages/student-corner/admission-information/AdmissionProcess";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(240,180,41,0.16),transparent_32%),linear-gradient(180deg,#fcfbf7_0%,#f6f4ee_100%)] text-slate-800">
      <Topbar />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/managementMessage" element={<ManagementMessage />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route
          path="/staff/monthly-attendance/teaching-staff"
          element={<TeachingStaffAttendance />}
        />
        <Route
          path="/staff/monthly-attendance/non-teaching-staff"
          element={<NonTeachingStaffAttendance />}
        />
        <Route
          path="/staff/monthly-attendance/hospital-staff"
          element={<HospitalStaffAttendance />}
        />
        <Route
          path="/infrastructure"
          element={<Infrastructure />}
        />
        <Route
          path="/paper-book-published"
          element={<PaperBookPublished />}
        />
        <Route path="/hospital/opd" element={<OpdRecords />} />
        <Route path="/hospital/ipd" element={<IpdRecords />} />
        <Route
          path="/hospital/bed-occupancy"
          element={<BedOccupancyRecords />}
        />
        <Route path="/document-viewer" element={<DocumentViewer />} />
        <Route path="/academic-values" element={<AcademicValues />} />
        <Route path="/course" element={<Course />} />
        <Route path="/merit-list-students" element={<MeritWiseList />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/admissions" element={<Admissions />} /> */}
        {/* <Route path="/facilities" element={<Facilities />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
