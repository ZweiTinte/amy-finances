import * as React from "react";

interface ButtonProps extends TextProps {
  color?: string;
  onClick: (params: any) => void;
  disabled?: boolean;
  children?: JSX.Element;
}

const Button = ({
  text,
  color,
  onClick,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={disabled ? "disabledButton" : color || ""}
      disabled={disabled}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
