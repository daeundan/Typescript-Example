// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CourseOverview from "../pages/CourseOverview";
import Announcements from "../pages/Announcements";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/학교소개" element={<CourseOverview />} />
      <Route path="/학과공지" element={<Announcements />} />
      {/* 다른 페이지 라우팅 추가 */}
    </Routes>
  </Router>
);

export default AppRoutes;
