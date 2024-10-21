// src/components/DropdownMenu.jsx
import { Link } from "react-router-dom";

const DropdownMenu = ({ items }) => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {items.map((item) => (
      <li key={item}>
        <Link to={`/${item}`}>{item}</Link>
      </li>
    ))}
  </ul>
);

export default DropdownMenu;
