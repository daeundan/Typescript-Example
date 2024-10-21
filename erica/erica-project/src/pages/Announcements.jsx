import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #f00;
  width: 500px;
`;

const Announcements = () => {
  const notices = [
    {
      id: 1,
      title: "[모집] 2025학년도 1학기 대학원생 모집 안내",
      date: "2024-09-30",
      views: 2444,
    },
    {
      id: 2,
      title: "2024학년도 후기 실습체험 활동",
      date: "2024-09-24",
      views: 3093,
    },
    // 더 많은 공지 추가 가능
  ];

  return (
    <Container>
      <h2>공지사항</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.id}</td>
              <td>{notice.title}</td>
              <td>{notice.date}</td>
              <td>{notice.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Announcements;
