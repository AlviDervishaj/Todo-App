import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// Styling
import styles from "./App.module.css";
// Components
import { Navigation } from "./components/Navigation/Navigation";
import { TodoView } from "./components/TodoView/TodoView";
// todo context
export const TodoContext = createContext();
export const HandleCheckboxChangeContext = createContext();

export const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  // get todos from local storage when component is mounting
  // useEffect(() => {
  //   // get todos from localStorage
  //   const _todos = localStorage.getItem("todos");
  //   setTodos(JSON.parse(_todos) ?? []);
  // }, []);
  // store todos in local storage before navigating away from page
  useEffect(() => {
    // store in local storage
    function storeInLS() {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    //  add event listener to handle before unload event
    window.addEventListener("beforeunload", storeInLS);
    // clean up function
    return () => {
      window.removeEventListener("beforeunload", storeInLS);
    };
  }, [todos]);

  const handleCheckboxChange = (value, uid) => {
    todos.map((_todo) => {
      if (_todo.uid === uid) {
        // clear local storage
        localStorage.clear();
        _todo.markedAsDone = value;
      }
      return _todo;
    });
    // update todos
    setTodos([...todos]);
  };
  const createTodo = (text) => {
    const todoObject = {
      uid: uuidv4(),
      text,
      markedAsDone: false,
      dateCreated: new Date().toLocaleDateString(),
    };
    //	update todos array
    setTodos([...todos, todoObject]);
  };
  return (
    <main className={styles.app}>
      <TodoContext.Provider value={todos}>
        <HandleCheckboxChangeContext.Provider value={handleCheckboxChange}>
          <section className={styles.todoView}>
            <Navigation />
            <TodoView createTodo={createTodo} />
          </section>
        </HandleCheckboxChangeContext.Provider>
      </TodoContext.Provider>
    </main>
  );
};
