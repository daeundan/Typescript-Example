import { useState } from "react";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import Exhibitions from "../components/Exhibitions ";
import Announcements from "../components/Announcements"; // Announcements 컴포넌트 임포트

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      {/* 슬라이드 섹션 */}
      <SlideShow />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <Exhibitions />
        <Announcements /> {/* Announcements 컴포넌트 추가 */}
      </div>

      {/* 선택된 메뉴에 따른 동적 내용 */}
      <div style={{ marginTop: "20px" }}>
        {selectedMenu === "학과개요" && (
          <div>학과 개요 내용이 여기에 표시됩니다.</div>
        )}
        {selectedMenu === "공지사항" && <Announcements />}{" "}
        {/* Announcements 컴포넌트 호출 */}
      </div>
    </div>
  );
};

export default HomePage;
