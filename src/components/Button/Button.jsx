import React from "react";

export function Button({ label, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}

