import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 40px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 10px 4px 20px rgba(0, 0, 0, 0.6);
`;

const City = styled.h1`
  font-size: 22px;
`;

const Weather = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

const Desc = styled.h3`
  font-size: 26px;
`;

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <Wrapper>
      <City>도시 : {weather ?? weather?.name}</City>
      <Weather>
        온도 : {weather ?? weather?.main.temp}℃ 습도 : {""}
        {weather ?? weather?.main.humidity}%
      </Weather>
      <Desc>현재 날씨 : {weather ?? weather?.weather[0].description}</Desc>
    </Wrapper>
  );
};

export default WeatherBox;
