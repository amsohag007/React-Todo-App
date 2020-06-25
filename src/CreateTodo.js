import React, { useState } from "react";

export default function CreateTodo(props) {
  const [todo, setTodo] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTodo(prevTodo => {
      return { ...prevTodo, [name]: value };
    });
  }
  function handleClick(event) {
    props.add(todo);
    setTodo({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="content"
          onChange={handleChange}
          value={todo.content}
          placeholder="Enter your TodoItem"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
