import React from "react";
import PropTypes from "prop-types";

export function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "0.5em 1em", fontSize: "1em" }}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};
