import * as React from "react";

const Checkbox = ({
  label,
  onClick,
  checked,
  form = false,
}: {
  label?: string;
  onClick: () => void;
  checked: boolean;
  form?: boolean;
}) => {
  return (
    <div
      className={form ? "formCheckboxContainer" : "defaultCheckboxContainer"}
    >
      <input
        type="checkbox"
        className={form ? "formCheckbox" : "defaultCheckbox"}
        onClick={onClick}
      />
      {checked && (
        <div
          onClick={onClick}
          className={form ? "formCheckmark" : "defaultCheckmark"}
        >
          X
        </div>
      )}
      {label && (
        <label className="checkboxLabel" onClick={onClick}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
