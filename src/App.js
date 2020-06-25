import React, { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import Footer from "./Footer";
import Header from "./Header";

export default function App(props) {
  const [todos, setTodos] = useState([]);

  function addItem(todo) {
    setTodos(prevtodos => {
      return [...prevtodos, todo];
    });
  }

  function deleteItem(id) {
    setTodos(prevItem => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateTodo add={addItem} />
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          id={index}
          content={item.content}
          delete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}
