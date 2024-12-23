// 재귀함수
const myFunc = (number) => {
  // 기저 조건 설정
  if (number > 10) return;
  console.log(number);
  myFunc(number + 1);
};

myFunc(1);

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   return a + b;
// };

// const funcB = () => {
//   let c = 10;
//   let d = 5;
//   return c + d;
// };

// funcA();
// funcB();

const funcC = () => {
  let a = 10;
  let b = 5;
  return a - b;
};

const funcD = () => {
  let c = 10;
  let d = 5;
  let e = funcC();
  return c + d + e;
};

funcC();
funcD();

console.log(funcC(), funcD());
