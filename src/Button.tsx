import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.primary}>
      {label}
    </button>
  );
}
