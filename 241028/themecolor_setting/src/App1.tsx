import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
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

const Container = styled.div`
  // theme 찾아올 때는 무조건 달러 + 중괄호 + 안에 콜백
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App1 = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div>
      <Globalstyle />
      <Container>
        <Title>Hello World!</Title>
        <form>
          <input
            onChange={onChange}
            value={value}
            type="text"
            placeholder="username"
          />
        </form>
      </Container>
    </div>
  );
};

export default App1;
