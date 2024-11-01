// src/atoms.ts
import { atom } from "recoil";

export type Category = "To Do" | "Doing" | "Done";

export interface IToDo {
  id: number;
  text: string;
  category: Category;
}

// 할 일 목록 상태
export const toDoState = atom<IToDo[]>({
  key: "toDoState",
  default: [],
});

// 현재 선택된 카테고리 상태
export const categoryState = atom<Category>({
  key: "categoryState",
  default: "To Do",
});
