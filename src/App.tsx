import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Topbar from "./layout/Topbar";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(240,180,41,0.16),transparent_32%),linear-gradient(180deg,#fcfbf7_0%,#f6f4ee_100%)] text-slate-800">
      <Topbar />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
