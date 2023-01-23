import * as React from "react";
import Button from "../atoms/button";

const EmptyAllButtonGroup = ({
  onEmptyClick,
  onAllClick,
}: {
  onEmptyClick: () => void;
  onAllClick: () => void;
}) => {
  return (
    <div className="formRowSmall">
      <Button
        color={"sidebarSmallButton spaceUp"}
        onClick={onEmptyClick}
        text={"Empty"}
      />
      <Button
        color={"sidebarSmallButton spaceUp"}
        onClick={onAllClick}
        text={"All"}
      />
    </div>
  );
};

export default EmptyAllButtonGroup;
