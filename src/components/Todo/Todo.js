import React, { useState, useRef, useContext } from "react";
import styles from "./Todo.module.css";
import Draggable from "react-draggable";
import { CheckBox } from "../Checkbox/CheckBox";
import { HandleCheckboxChangeContext } from "../../App";

export const Todo = ({ todo }) => {
  const [isDragging, setIsDragging] = useState({
    value: false,
    start: 0,
  });
  const todoRef = useRef();

  const handleCheckboxChange = useContext(HandleCheckboxChangeContext);

  function onStart(event) {
    if (event.changedTouches) {
      setIsDragging({
        value: true,
        start: event.changedTouches[0].clientX,
      });
    }
  }

  function onStop(event) {
    if (event.changedTouches) {
      if (Math.abs(event.changedTouches[0].clientX - isDragging.start) <= 5) {
        handleClick();
      }
      setIsDragging({
        value: false,
        start: 0,
      });
    }
  }

  function handleClick() {
    handleCheckboxChange(!todo.markedAsDone, todo.uid);
  }

  return (
    <Draggable
      nodeRef={todoRef}
      axis="x"
      defaultPosition={{ x: 0, y: 0 }}
      onStart={onStart}
      onStop={onStop}
      bounds={{ left: -150, right: 150 }}
      position={!isDragging.value ? { x: 0, y: 0 } : undefined}
      scale={1}
    >
      <div ref={todoRef} className={styles.todoComponent}>
        <CheckBox todo={todo} onClick={handleClick} />
      </div>
    </Draggable>
  );
};
