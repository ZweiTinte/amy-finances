import * as React from "react";

const TextInput = ({
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
      type="text"
    />
  );
};

export default TextInput;
