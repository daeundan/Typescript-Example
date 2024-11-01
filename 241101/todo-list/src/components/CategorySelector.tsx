// src/components/CategorySelector.tsx
import { useRecoilState } from "recoil";
import { categoryState, Category } from "../atoms";

const categories: Category[] = ["To Do", "Doing", "Done"];

const CategorySelector = () => {
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value as Category)}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
