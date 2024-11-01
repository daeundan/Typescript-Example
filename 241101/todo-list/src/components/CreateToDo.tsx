import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toDoState, categoryState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const [category] = useRecoilState(categoryState);

  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("toDo", { required: true })}
        placeholder="할 일을 입력하세요"
      />
      <Button type="submit">ADD</Button>
    </Form>
  );
};

export default CreateToDo;
