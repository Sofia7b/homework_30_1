import { useDispatch, useSelector } from "react-redux";
import { clearTodos } from "../features/todos/todosSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const count = useSelector((s) => s.todos.items.length);

  return (
    <footer className="footer">
      <span>{count} todo{count !== 1 ? "s" : ""}</span>
      <button onClick={() => dispatch(clearTodos())} disabled={count === 0}>
        Очистить TODO
      </button>
    </footer>
  );
}
