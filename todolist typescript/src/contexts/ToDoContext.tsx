// 타입 정의, 값 관리 컴포넌트
import { createContext, useState } from "react";

// 보내줄 값에 대한 타입 정의 역할
interface Context {
  toDoList: string[];
  onAdd: (toDo: string) => void;
  onDelete: (toDo: string) => void;
}

// 자식 요소들에게 보내줄 값에 대한 정의 역할
const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

// 실제 자식 요소들에게 값을 전달할 컴포넌트 함수 정의
interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState([
    "Typescript 복습하기",
    "Next.js 예습하기",
    "Node.js 공부하기",
  ]);

  const onAdd = (toDo: string) => {
    setToDoList([toDo, ...toDoList]);
  };

  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter((item) => item !== toDo));
  };
  // ToDoListContext는 프로바이더가 있어야 값을 보낼 수 있음 && 값을 전달해야 된다.
  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

// 해당 값을 내보내서 쓸 수 있도록 EXPORT 하기
export { ToDoListContext, ToDoListContextProvider };
