import "styled-components";
// 테마 타입 정의
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string; // 백그라운드 색상
    boardColor: string;
    cardColor: string;
  }
}
