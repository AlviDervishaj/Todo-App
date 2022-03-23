import React from "react";
// Styling
import styles from "./App.module.css";
// Components
import { Navigation } from "./components/Navigation/Navigation";
import { TodoView } from "./components/TodoView/TodoView";
export const App = () => {
  return (
    <main className={styles.app}>
      <section className={styles.todoView}>
        <Navigation />
        <TodoView />
      </section>
    </main>
  );
};
