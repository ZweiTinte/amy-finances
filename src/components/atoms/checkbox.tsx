import * as React from "react";

const Checkbox = ({
  label,
  onClick,
  checked,
}: {
  label: string;
  onClick: () => void;
  checked: boolean;
}) => {
  return (
    <div className="checkbox">
      <input type="checkbox" onClick={onClick} />
      {checked && (
        <div onClick={onClick} className="checkmark">
          X
        </div>
      )}
      <label className="checkboxLabel" onClick={onClick}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
