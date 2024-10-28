import React, { useContext } from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { ToDoListContext } from "../contexts/ToDoContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface Props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const ToDoList = () => {
  // useContext 사용! 부모에게 값을 Props로 받지 않고 TODOLIstContext로 받기
  const { toDoList, onDelete } = useContext(ToDoListContext);
  return (
    <Container>
      {toDoList.map((todo, index) => (
        <ToDoItem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default ToDoList;
