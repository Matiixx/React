import "./TodosList.css";
import React from "react";
import useStore from "../../store/useStore";
import ToDoPanel from "./ToDoPanel/ToDoPanel";

export default function TodosList() {
  const toDoList = useStore((state) => state.toDoList);

  return (
    <div className="todos-list">
      {toDoList &&
        toDoList.map((el) => {
          return <ToDoPanel key={el.id} todo={el} />;
        })}
    </div>
  );
}
