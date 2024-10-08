import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const WeatherBtn = ({ setCity }) => {
  // MediaCapabilities를 필요한 데이터로 정의합니다.
  const cities = ["Seoul", "New York", "Tokyo"]; // 예시로 몇 개의 도시 이름을 추가했습니다.

  return (
    <ButtonGroup>
      <Button variant="primary">Current Location</Button>
      {cities.map((city, index) => (
        <Button
          onClick={() => {
            setCity(city); // setCity를 호출할 수 있습니다.
          }}
          variant="secondary"
          key={index}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherBtn;
