import React from "react";
import { Todo } from "../Todo/Todo";
import { NoTodos } from "../NoTodos/NoTodos";
import styles from "./RenderTodos.module.css";
import { CreateTodoInput } from "../CreateTodoInput/CreateTodoInput";
export const RenderTodos = ({
  todos,
  isInputShown,
  onBlurredHandler,
  onKeyDownHandler,
  inputValue,
  setInputValue,
  todoInputRef,
}) => {
  return (
    <section className={styles.todoViewScroll}>
      {todos.length > 0 || isInputShown ? (
        <>
          {todos.map((todo) => (
            <div className={styles.todoHolder} key={todo.uid}>
              <Todo todo={todo} />
            </div>
          ))}
          {isInputShown && (
            <CreateTodoInput
              inputRef={todoInputRef}
              onBlurHandler={onBlurredHandler}
              onKeyDownHandler={onKeyDownHandler}
              inputValue={inputValue}
              changeInputValue={setInputValue}
            />
          )}
        </>
      ) : (
        <NoTodos />
      )}
    </section>
  );
};
