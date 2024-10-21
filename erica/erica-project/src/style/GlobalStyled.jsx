import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none; /* 리스트 스타일을 none으로 설정 */
  }

  body {
    font-family: Arial, sans-serif; /* 기본 폰트 설정 */
    background-color: #f0f0f0; /* 기본 배경색 설정 */
    color: #333; /* 기본 글자 색 설정 */
  }
`;

export default GlobalStyled;
