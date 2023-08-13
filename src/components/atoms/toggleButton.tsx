import * as React from "react";

const ToggleButton = ({
  label,
  onClick,
  checked,
}: {
  label?: string;
  onClick: () => void;
  checked: boolean;
}) => {
  const [active, setActive] = React.useState(checked);

  return (
    <div className="toggleButtonWithLabel">
      <div
        className="toggleButtonBackground"
        onClick={() => {
          onClick();
          setActive(!active);
        }}
      >
        {active ? (
          <div className="toggleCircle1"></div>
        ) : (
          <div className="toggleCircle2"></div>
        )}
      </div>
      {label}
    </div>
  );
};

export default ToggleButton;
