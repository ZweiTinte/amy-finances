import * as React from "react";
import { Link } from "gatsby";

interface LinkProps extends TextProps {
  to: string;
  disabled?: boolean;
  children?: JSX.Element;
  target?: string;
  classes?: string;
  title?: string;
}

const LinkButton = ({
  text,
  to,
  disabled = false,
  children,
  target,
  classes,
  title,
}: LinkProps) => {
  return (
    <Link
      to={disabled ? "" : to}
      className={disabled ? "disabledLink" : classes || "link"}
      target={target}
      title={title}
    >
      {children}
      {text}
    </Link>
  );
};

export default LinkButton;
