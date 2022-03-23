import React, { useRef } from "react";
import styles from "./Todo.module.css";
import Checkbox from "react-custom-checkbox";
// import Draggable from "react-draggable";
export const Todo = ({ todo }) => {
  // const [isDragging, setIsDragging] = useState(false);
  const todoRef = useRef();
  const handleCheckboxChange = (value) => {
    // mark todo as done
    const todos = JSON.parse(localStorage.getItem("todos"));
    const newTodos = todos.map((_todo) => {
      if (_todo.uid === todo.id) {
        // clear local storage
        localStorage.clear();
        _todo.markedAsDone = value;
      }
      return _todo;
    });
    todo.markedAsDone = value;
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    // <Draggable
    //   axis="x"
    //   nodeRef={todoRef}
    //   defaultPosition={{ x: 0, y: 0 }}
    //   onDrag={() => {
    //     setIsDragging(true);
    //   }}
    //   onStop={() => {
    //     setIsDragging(false);
    //   }}
    //   bounds={{ left: -150, right: 150 }}
    //   position={!isDragging ? { x: 0, y: 0 } : undefined}
    //   scale={1}
    // >
    <div className={styles.todoComponent} ref={todoRef}>
      <Checkbox
        checked={todo.markedAsDone ? true : false}
        borderColor="#35a7ff"
        borderRadius={20}
        containerStyle={{ overflow: "hidden", cursor: "pointer" }}
        size={14}
        icon={<div className={styles.checked} />}
        label={<p className={styles.todoText}>{todo.text}</p>}
        onChange={(value) => handleCheckboxChange(value)}
      />
    </div>
    // </Draggable>
  );
};
