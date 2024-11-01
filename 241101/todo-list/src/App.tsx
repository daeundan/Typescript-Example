// src/App.tsx
import { RecoilRoot } from "recoil";
import CategorySelector from "./components/CategorySelector";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <RecoilRoot>
      <h1>To-Do List</h1>
      <CategorySelector />
      <CreateToDo />
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;
