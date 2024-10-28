import styled from "styled-components";

// 스타일컴포넌트 라이브러리 모듈에 타입이 있다는 것을 선언한다.
// 타입은 객체 형태로 정의한다. 객체 = interface타입으로 정의한다.
// interface 다음 정의 이름은 바꿀 수 있다.
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
  }
}
