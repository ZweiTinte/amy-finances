import * as React from "react";

const NumberInput = ({
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
      type="number"
      step={"0.01"}
    />
  );
};

export default NumberInput;
