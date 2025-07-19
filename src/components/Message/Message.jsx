import React from "react";
import styles from "./Message.module.css";

const typeClass = {
  info: styles.info,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

export function Message({ type = "info", children }) {
  return (
    <div className={`${styles.message} ${typeClass[type] || styles.info}`} role="alert">
      {children}
    </div>
  );
}
