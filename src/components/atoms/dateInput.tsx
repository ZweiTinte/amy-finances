import * as React from "react";

const DateInput = ({
  value,
  setValue,
  classes,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  classes?: string;
}) => {
  return (
    <input
      className={classes || ""}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type="date"
    />
  );
};

export default DateInput;
