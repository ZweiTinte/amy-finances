import * as React from "react";

const Button = ({ text, color, onClick }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} className={color || ""}>
        {text}
      </button>
    </>
  );
};

export default Button;
