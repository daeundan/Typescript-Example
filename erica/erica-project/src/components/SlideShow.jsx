// src/components/SlideShow.jsx
import React from "react";
import MainImg from "../image/main.jpg";
import styled from "styled-components";

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  background-image: url(${MainImg});
  background-size: cover;
  background-position: center;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const LeftButton = styled(Button)`
  left: 10px;
`;

const RightButton = styled(Button)`
  right: 10px;
`;

const SlideText = styled.div`
  text-align: center;
  padding-top: 150px;
  color: white;
  font-size: 24px;
`;

const SlideShow = () => {
  return (
    <SlideContainer>
      <LeftButton>◀</LeftButton>
      <SlideText>슬라이드</SlideText>
      <RightButton>▶</RightButton>
    </SlideContainer>
  );
};

export default SlideShow;
