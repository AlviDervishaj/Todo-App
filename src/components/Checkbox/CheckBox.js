import styles from "./Checkbox.module.css";

export const CheckBox = ({ todo, onClick }) => {
  return (
    <div className={styles.parent} onClick={() => onClick()}>
      <span
        className={`${styles.checkbox} ${
          todo.markedAsDone ? styles.markedAsDone : styles.emptyCheckbox
        }`}
      />
      <p
        className={`${styles.todoText} ${
          todo.markedAsDone ? styles.todoTextLineThrough : styles.todoTextNormal
        }`}
      >
        {todo.text}
      </p>
    </div>
  );
};
