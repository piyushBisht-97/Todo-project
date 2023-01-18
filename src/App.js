import "./styles.css";
import { useState } from "react";
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const clickHandler = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updateTodo = todos.map((t) =>
        t.id === editTodo.id ? { id: t.id, todo } : { id: t.id, todo: t.todo }
      );

      setTodos(updateTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    setTodos([{ id: Date.now(), todo }, ...todos]);
    setTodo("");
  };
  const handleClick = (id) => {
    const boom = todos.filter((item) => item.id !== id);

    setTodos(boom);
  };

  const handleEdit = (id) => {
    const dhoom = todos.find((i) => i.id === id);
    setTodo(dhoom.todo);
    setEditId(dhoom.id);
  };
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          
          <h1>My Todo List</h1>

        <form className="form" onSubmit={clickHandler}>
          <input
            value={todo}
            placeHolder="Title..."
            onChange={(e) => setTodo(e.target.value)}
          />

          <button className="btn" type="submit">{editId ? "EDIT" : "ADD"}</button>
        </form>
        </header>
        
        <ul>
          {todos.map((item) => (
            <li className="list-item" key={item.id}>
              {item.todo}
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleClick(item.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
