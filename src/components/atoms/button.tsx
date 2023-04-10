import * as React from "react";

interface ButtonProps extends TextProps {
  color?: string;
  onClick: (params: any) => void;
}

const Button = ({ text, color, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={color || ""}>
      {text}
    </button>
  );
};

export default Button;
