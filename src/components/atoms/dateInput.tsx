import * as React from "react";

const DateInput = ({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type="date"
    />
  );
};

export default DateInput;
