import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./TodoForm.css";

export default function TodoForm() {
  return (
    <div className="todo-form">
      <span className="p-float-label">
        <InputText autoComplete="off" id="username" />
        <label htmlFor="username">Write new task</label>
      </span>
      <Button label="Add Task" aria-label="Submit" />
    </div>
  );
}
