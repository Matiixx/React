import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./TodoForm.css";
import useStore from "../../store/useStore";

export default function TodoForm() {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef();
  const addToDo = useStore((state) => state.addToDo);

  const handleClick = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      addToDo(newTask);
      setNewTask("");
      inputRef.current.classList.remove("p-filled");
    }
  };

  return (
    <div className="todo-form">
      <span className="p-float-label">
        <InputText
          id="task-input"
          autoComplete="off"
          value={newTask}
          ref={inputRef}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <label htmlFor="username">Write new task</label>
      </span>
      <Button label="Add Task" aria-label="Submit" onClick={handleClick} />
    </div>
  );
}
