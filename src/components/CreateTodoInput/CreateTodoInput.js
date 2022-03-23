import React from "react";
import styles from "./CreateTodoInput.module.css";

export const CreateTodoInput = ({inputRef, onBlurHandler, changeInputValue, inputValue, onKeyDownHandler}) => {
	return <input type="text" name={"todo-text"} ref={inputRef} className={styles.todoInput}
	              placeholder={"New todo ..."} onBlur={(event) => onBlurHandler(event.target.value)}
	              value={inputValue} onChange={(event) => changeInputValue(event.target.value)}
	              onKeyDown={(event) => onKeyDownHandler(event.key)}
	/>
}