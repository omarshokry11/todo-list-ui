import { useRef, useState } from "react";
import "./Style/App.scss";

export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleAddTodos = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="main-app-container">
      <div className="main-app-content">
        <h1>Todo list</h1>
        <ul>
          {todos.map(({ text, completed }, index) => (
            <div className="item" key={index}>
              <li onClick={() => handleItemDone(index)}>
                <p className="check-task">
                  {completed ? (
                    <span style={{ marginRight: "10px" }}>✔️</span>
                  ) : (
                    <span style={{ marginRight: "10px" }}>❌</span>
                  )}
                </p>
                <button className="btn-text">{text}</button>
              </li>
              <span
                className="btn-delete"
                onClick={() => handleDeleteItem(index)}
              >
                Delete
              </span>
            </div>
          ))}
        </ul>
        <input ref={inputRef} type="text" placeholder="Enter the todo...." />
        <button className="btn-add" onClick={handleAddTodos}>
          Add Todo
        </button>
      </div>
    </div>
  );
}
