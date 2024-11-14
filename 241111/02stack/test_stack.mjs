// 연결리스트를 활용해서 추상 구조화

import { Stack } from "./stack.mjs";

let stack = new Stack(); // 스택의 인스턴스 객체화

console.log(
  "================================ 첫번째 출력! ================================"
);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log(
  "================================ 두번째 출력! ================================"
);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);
console.log(`isEmpty: ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(stack.pop());
