import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: ToDo[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: [
      { id: 1, text: "칸반보드🤚🏻🤚🏿🤚🏽" },
      { id: 2, text: "타입스크립트" },
    ],
    Doing: [],
    Done: [],
  },
});
