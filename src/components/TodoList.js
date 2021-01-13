import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="shopping-list">
      {props.list.map((item) => (
        <Todo key={item.id} item={item} toggleListItem={props.toggleListItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Task
      </button>
    </div>
  );
};

export default TodoList;
