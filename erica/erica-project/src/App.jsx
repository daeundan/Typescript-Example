import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DepartmentIntroduction from "./components/menucomponents/DepartmentIntroduction";
import Notices from "./components/menucomponents/Notices";
import ClinicalPartners from "./components/menucomponents/ClinicalPartners";
import Qualifications from "./components/menucomponents/Qualifications";
import ResearchGroup from "./components/menucomponents/ResearchGroup";
import GalleryTherapy from "./components/menucomponents/GalleryTherapy";
import AlumniCommunity from "./components/menucomponents/AlumniCommunity";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/department/introduction"
          element={<DepartmentIntroduction />}
        />
        <Route path="/notices" element={<Notices />} />
        <Route path="/clinical-partners" element={<ClinicalPartners />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/research-group" element={<ResearchGroup />} />
        <Route path="/gallery-therapy" element={<GalleryTherapy />} />
        <Route path="/alumni-community" element={<AlumniCommunity />} />
        {/* 나머지 라우트 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
