import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../features/todos/todosSlice";

export default function TodoList() {
  const [text, setText] = useState("");
  const items = useSelector((s) => s.todos.items);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    dispatch(addTodo(t));
    setText("");
  };

  return (
    <div className="card">
      <h2 className="title">TODO</h2>

      <form onSubmit={submit} className="row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add task…"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="list">
        {items.map((it) => (
          <li
            key={it.id}
            onClick={() => dispatch(toggleTodo(it.id))}
            className={it.done ? "done" : ""}
          >
            {it.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
