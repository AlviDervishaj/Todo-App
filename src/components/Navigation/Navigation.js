import React from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
// import styles
import navigationStyles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export const Navigation = () => {
  return (
    <nav className={navigationStyles.navigation}>
      <button
        className={navigationStyles.navigationLink}
      >
        <FontAwesomeIcon icon={faAngleLeft}/>
        <p>Alvi's Todos</p>
      </button>
    </nav>
  );
};