import React from "react";
import ArtPosterImg1 from "../image/poster01.jpg";
import ArtPosterImg2 from "../image/poster02.jpg";
import ArtPosterImg3 from "../image/poster03.png";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 45%; // 원하는 너비 설정
  display: "flex";
`;

// 이미지 스타일 정의
const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover; /* 이미지 비율 유지하며 영역 채우기 */
`;

// Flex 컨테이너 정의
const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 이미지 간격 균등 배분 */
  gap: 12px; /* 이미지 사이 간격 */
  margin: 10px 0;
`;

const Exhibitions = () => {
  return (
    <Wrapper>
      <h2>이달의 전시 활동</h2>
      <ImgContainer>
        <Img src={ArtPosterImg1} alt="Exhibition Poster1" />
        <Img src={ArtPosterImg2} alt="Exhibition Poster2" />
        <Img src={ArtPosterImg3} alt="Exhibition Poster" />
      </ImgContainer>
    </Wrapper>
  );
};

export default Exhibitions;
