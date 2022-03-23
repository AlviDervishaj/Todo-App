import React  from "react";
import createTodosStyling from "./CreateTodo.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
export const CreateTodo = ({createTodoFunction}) => {
  return (
    <button className={createTodosStyling.createTodoButton} onClick={() => createTodoFunction()}>
      <FontAwesomeIcon icon={faCirclePlus}/>
      <p className={createTodosStyling.createTodosText}>New Todo</p>
    </button>
  );
};