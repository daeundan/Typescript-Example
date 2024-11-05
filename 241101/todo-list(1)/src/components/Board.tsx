import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { ToDo, toDoState } from "../atoms";

const Wrapper = styled.div`
  background: linear-gradient(to top, #243949 0%, #517fa4 100%); // 수정된 부분
  color: #fff;
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 85%;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 4px;
  border: none;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: dodgerblue;
    color: #fff;
  }
`;

interface AreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

// Area 컴포넌트에 AreaProps 타입을 적용
const Area = styled.div<AreaProps>`
  width: 100%;
  background: ${(props) =>
    props.isDraggingOver
      ? "#000"
      : props.isDraggingFromThis
      ? "#000"
      : "linear-gradient(to top, #dfe9f3 0%, white 100%)"}; // dodgerblue를 linear-gradient로 변경
  padding: 10px;
  border-radius: 8px;
`;

interface BoardProps {
  toDos: ToDo[];
  boardId: string;
}

interface FormProps {
  toDo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormProps>();
  const onVaild = ({ toDo }: FormProps) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };

    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });

    setValue("toDo", "");
  };
  // const inputRef = useRef<HTMLInputElement>(null); // inputRef를 인스턴스화
  // console.log(inputRef);
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }, 5000);
  // };
  return (
    <Wrapper>
      {/* <input ref={inputRef} type="text" placeholder="Please..." />
      <button onClick={onClick}>Click</button> */}
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onVaild)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task On ${boardId}`}
        />
        <Btn>Click</Btn>
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
