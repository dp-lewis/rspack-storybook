import React from "react";
import PropTypes from "prop-types";

export function Button({ label, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};