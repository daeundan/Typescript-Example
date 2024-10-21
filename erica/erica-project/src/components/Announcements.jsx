import React from "react";
import styled from "styled-components";

const AnnouncementContainer = styled.div`
  width: 500px;
  margin-bottom: 20px;
`;

const AnnouncementItem = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 18px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Announcements = () => {
  const announcementsData = [
    { id: 1, text: "공지사항 1" },
    { id: 2, text: "공지사항 2" },
    { id: 3, text: "공지사항 3" },
    { id: 4, text: "공지사항 4" },
    { id: 5, text: "공지사항 5" },
    { id: 6, text: "공지사항 6" },
    { id: 7, text: "공지사항 7" },
  ];

  return (
    <AnnouncementContainer>
      <h2>공지사항</h2>
      {announcementsData.map((announcement) => (
        <AnnouncementItem key={announcement.id}>
          {announcement.text}
        </AnnouncementItem>
      ))}
    </AnnouncementContainer>
  );
};

export default Announcements;
