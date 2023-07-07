import * as React from "react";

const DateInput = ({
  value,
  setValue,
  classes,
  min,
  max,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  classes?: string;
  min?: string;
  max?: string;
}) => {
  return (
    <input
      className={classes || ""}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type="date"
      min={min}
      max={max}
    />
  );
};

export default DateInput;
