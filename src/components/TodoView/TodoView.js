import React, { useState, useEffect, useRef } from "react";
import { RenderTodos } from "../RenderTodos/RenderTodos";
import { CreateTodo } from "../CreateTodo/CreateTodo";
import styles from "./TodoView.module.css";
export const TodoView = ({ createTodo }) => {
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
    //	focus inpuT anytime the input is shown
    isInputShown && todoInputRef.current.focus();
  }, [isInputShown]);
  return (
    <section className={styles.todoView}>
      <RenderTodos
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
