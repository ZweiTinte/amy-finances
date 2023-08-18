import * as React from "react";
import { DropdownItem } from "../../dropdownTypes";

const DropdownElement = ({
  dropdownClass,
  item,
  onClick,
  onKeyDown,
}: {
  dropdownClass: string;
  item: DropdownItem;
  onClick: (e: React.SyntheticEvent) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      tabIndex={0}
      className={dropdownClass}
      key={item.id}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {item.value}
    </div>
  );
};

export default DropdownElement;
