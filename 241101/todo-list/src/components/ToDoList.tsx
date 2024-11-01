// src/components/ToDoList.tsx
import { useRecoilValue } from "recoil";
import { toDoState, categoryState } from "../atoms";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  const category = useRecoilValue(categoryState);
  const filteredToDos = toDos.filter((toDo) => toDo.category === category);

  return (
    <ul>
      {filteredToDos.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
