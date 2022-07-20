import "./ToDoPanel.css";
import React from "react";
import { Button } from "primereact/button";
import useStore from "../../../store/useStore";

export default function ToDoPanel({ todo }) {
  const removeTodo = useStore((state) => state.removeTodo);

  const handleClick = (id) => {
    console.log(id);
    removeTodo(id);
  };

  return (
    <div className="todo-panel">
      <div className="panel-buttons">
        <Button
          icon="pi pi-times"
          className="p-button-rounded p-button-danger"
          aria-label="Cancel"
          onClick={() => handleClick(todo?.id)}
        />
      </div>
      <div className="panel-body">{todo?.body}</div>
    </div>
  );
}
