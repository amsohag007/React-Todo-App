import React from "react";

function TodoItem(props) {
  // const completedStyle = {
  //   fontStyle: "italic",
  //   color: "#cdcdcd",
  //   textDecoration: "line-through"
  // };
  function handleClick() {
    props.delete(props.id);
  }
  return (
    <div className="todo-item">
      <div>
        <p>{props.content}</p>
      </div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default TodoItem;
