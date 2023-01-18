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

    setTodos([{ id: Date.now(), todo, status: false }, ...todos]);
    setTodo("");
  };
  console.log(todos);
  const handleClick = (id) => {
    const boom = todos.filter((item) => item.id !== id);

    setTodos(boom);
  };
  // console.log(todos.map((item) => item.status));
  const checker = (id) => {
    let mapped = todos.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : { ...item };
    });
    setTodos(mapped);
    console.log(mapped);
  };

  // const handleEdit = (id) => {
  //   const dhoom = todos.find((i) => i.id === id);
  //   setTodo(dhoom.todo);
  //   setEditId(dhoom.id);
  // };
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>My Todo List</h1>

          <form className="form" onSubmit={clickHandler}>
            <input
              value={todo}
              placeholder="Title..."
              required
              onChange={(e) => setTodo(e.target.value)}
            />

            <button className="btn" type="submit">
              {editId ? "EDIT" : "ADD"}
            </button>
          </form>
        </header>

        <ul>
          {todos.map((item) => (
            <li className="list-item" key={item.id}>
              <div
                className={item.status ? "check" : "uncheck"}
                onClick={() => checker(item.id)}
              >
                {item.todo}
              </div>
              {/* <button onClick={() => handleEdit(item.id)}>Edit</button> */}
              <button className="close" onClick={() => handleClick(item.id)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
