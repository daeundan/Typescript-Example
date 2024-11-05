import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface DraggingProps {
  isDragging: boolean;
}

const Card = styled.div<DraggingProps>`
  background: ${(props) =>
    props.isDragging
      ? props.theme.cardColor
      : "linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.40) 120%) #989898"};
  background-blend-mode: multiply;
  color: ${(props) => (props.isDragging ? "#181818" : "#fff")};
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 10px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface DraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({ toDoId, toDoText, index }: DraggableCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
