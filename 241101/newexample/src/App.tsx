import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "establishRetrosansOTF";
  }
  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`;

const Header = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 0;
  color: #fff;
`;

const Title = styled.h1``;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100%;
  width: 500px;
  padding: 20px;
  background: #fff;
  border: 2px solid #667eea;
  border-radius: 8px;
`;

const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #667eea;
  border-radius: 8px;
`;

const App = () => {
  const hours = useRecoilValue(hourSelector);
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>DanDan Bord</Title>
        </Header>
        <Main>
          시간 계산 60 단위
          <Input
            value={minutes}
            onChange={onMinutesChange}
            type="number"
            placeholder="Minutes"
          />
          <Input value={hours} type="number" placeholder="Hours" />
        </Main>
      </Container>
    </>
  );
};

export default App;
