import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBox";
import WeatherBtn from "./components/WeatherBtn";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://c.wallhere.com/photos/54/0d/1680x1050_px_Adobe_Photoshop_digital_art_Four_Seasons_landscape_rainbows-793480.jpg!d")
    center/cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const cites = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${API_KEY}&units=metric`; // 도시 이름 소문자로 변환
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (city) {
      // city가 업데이트될 때만 호출
      getWeatherByCity();
      // console.log("city", city);
    }
  }, [city]);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Contents>
          <WeatherBox weather={weather} />
          <WeatherBtn cities={cites} setCity={setCity} />
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;
