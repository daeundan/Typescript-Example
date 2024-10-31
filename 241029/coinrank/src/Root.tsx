// import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
// useRecoilValue는 아톰에 정의해놓은 값을 사용하기 위해 가져오는 것임

const GlobalStyle = createGlobalStyle`
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

  body {
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const App = () => {
  // 아톰으로 전역요소에 뿌려줄 것이니 useSatate는 필요가 없어졌다.
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark((current) => !current);
  // 아톰으로 값 찾아오기(인스턴스 형식) atoms에서 정의해놓은 isDarkAtom을 인자값(매개변수)로 받아 넘겨준다.
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {/* <Outlet context={{ isDark, toggleDark }} /> */}
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </ThemeProvider>
    </>
  );
};

export default App;
