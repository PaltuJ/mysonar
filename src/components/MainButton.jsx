import React from "react";
import { Link } from "react-router-dom";

const MainButton = ({
  to,
  type = "button",
  onClick,
  customClass = "",
  children,
}) => {
  const classes = `main-button ${customClass}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default MainButton;
