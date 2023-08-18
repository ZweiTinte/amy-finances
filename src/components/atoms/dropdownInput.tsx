import * as React from "react";
import { inputKeyDownAction } from "../../helpers/dropdownKeyNavigation";

const DropdownInput = ({
  classes,
  onChange,
}: {
  classes: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <input
      type="text"
      className={classes}
      onChange={onChange}
      onKeyDown={(e) => {
        if (document.activeElement === inputRef?.current) {
          inputKeyDownAction(e);
        }
      }}
      autoFocus
      ref={inputRef}
    />
  );
};

export default DropdownInput;
