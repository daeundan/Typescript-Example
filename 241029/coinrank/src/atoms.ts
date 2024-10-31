import { atom } from "recoil";
// atom 은 함수 역할, 포괄적으로 값을 보관은 하나, 함수역할을 한다. 안의 값은 미정(오픈시켜놓는다) 객체든 배열이든 상관 없다.

// 변수 선언, 넣고싶은 값 넣기
export const isDarkAtom = atom({
  // key는 식별자 역할(리액트쿼리와 비슷한 구조를 띈다.)
  key: "isDark",
  default: false,
});
