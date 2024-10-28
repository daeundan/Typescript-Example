import React, { ChangeEvent } from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 8px;
`;

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // 타입 수정
}

const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={onChange} />; // 수정된 onChange 사용
};

export default TextInput;
