import * as React from "react";
import { Link } from "gatsby";

interface LinkProps extends TextProps {
  to: string;
  disabled?: boolean;
  children?: JSX.Element;
  target?: string;
}

const LinkButton = ({
  text,
  to,
  disabled = false,
  children,
  target,
}: LinkProps) => {
  return (
    <Link
      to={disabled ? "" : to}
      className={disabled ? "disabledLink" : "link"}
      target={target}
    >
      {children}
      {text}
    </Link>
  );
};

export default LinkButton;
