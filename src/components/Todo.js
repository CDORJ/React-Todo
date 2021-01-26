import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleListItem(props.item.id)}
      className={`item${props.item.completed ? " purchased" : ""}`}
    >
      <p>{props.item.task}</p>
      <p>Hello World</p>
    </div>
  );
};
export default Todo;
