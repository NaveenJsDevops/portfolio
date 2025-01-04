// styles is a prop
import React from "react";
const Button = ({ styles, text, icon, type = "button" }) => {
  const classNames = `py-3 px-4 bg-blue-gradient font-poppins font-medium text-[12px] text-primary outline-none ${styles ?? ''} rounded`;

  return (
    icon ? (
      <button
        type={type}  // Now the button type is dynamic
        className={classNames}
      >
        {React.createElement(icon)}&nbsp;{text}
      </button>
    ) : (
      <button
        type={type}  // Same here for the other case
        className={classNames}
      >
        {text}
      </button>
    )
  );
};

export default Button;
