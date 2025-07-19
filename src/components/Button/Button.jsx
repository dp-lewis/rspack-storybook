import React from "react";
import styles from "./Button.module.css";

export function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
}
