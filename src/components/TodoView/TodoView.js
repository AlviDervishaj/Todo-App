import React, { useState, useEffect, useRef } from "react";
import { RenderTodos } from "../RenderTodos/RenderTodos";
import { CreateTodo } from "../CreateTodo/CreateTodo";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoView.module.css";
export const TodoView = () => {
  const [todos, setTodos] = useState([]);
  const [isInputShown, setIsInputShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const todoInputRef = useRef();

  const createTodoFunction = () => {
    setIsInputShown(true);
  };
  const onBlurredHandler = (value) => {
    if (value.trim() === "") {
      return setIsInputShown(false);
    }
    //	create Todo
    createTodo(value);
    //	hide input
    setInputValue("");
    setIsInputShown(false);
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
  const onKeyDownHandler = (value) => {
    if (value === "Enter" && inputValue.trim() !== "") {
      createTodo(inputValue);
      //	clear input
      setInputValue("");
      setIsInputShown(false);
    } else if (value === "Backspace" && inputValue.trim() === "") {
      setInputValue("");
      setIsInputShown(false);
    }
  };

  useEffect(() => {
    //	focus input
    isInputShown && todoInputRef.current.focus();
  }, [isInputShown]);

  useEffect(() => {
    // get todos from localStorage
    const _todos = localStorage.getItem("todos");
    setTodos(JSON.parse(_todos) ?? []);
  }, []);

  useEffect(() => {
    function storeInLS() {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    window.addEventListener("beforeunload", storeInLS);

    return () => {
      window.removeEventListener("beforeunload", storeInLS);
    };
  }, [todos]);

  return (
    <section className={styles.todoView}>
      <RenderTodos
        todos={todos}
        isInputShown={isInputShown}
        onBlurredHandler={onBlurredHandler}
        onKeyDownHandler={onKeyDownHandler}
        inputValue={inputValue}
        setInputValue={setInputValue}
        todoInputRef={todoInputRef}
      />
      <CreateTodo createTodoFunction={createTodoFunction} />
    </section>
  );
};
