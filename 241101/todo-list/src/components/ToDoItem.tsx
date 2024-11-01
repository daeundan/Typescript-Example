import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const ToDoItem = ({ id, text, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const changeCategory = (newCategory: "To Do" | "Doing" | "Done") => {
    setToDos((oldToDos) =>
      oldToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: newCategory } : toDo
      )
    );
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "To Do" && (
        <button onClick={() => changeCategory("To Do")}>To Do</button>
      )}
      {category !== "Doing" && (
        <button onClick={() => changeCategory("Doing")}>Doing</button>
      )}
      {category !== "Done" && (
        <button onClick={() => changeCategory("Done")}>Done</button>
      )}
    </li>
  );
};

export default ToDoItem;
