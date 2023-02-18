import * as React from "react";
import Headline from "../atoms/headline";
import Multiselect from "../atoms/multiselect";
import EmptyAllButtonGroup from "../level1/emptyAllButtonGroup";
import { DropdownItem } from "../atoms/dropdown";

const MultiselectFilter = ({
  selected,
  setSelected,
  data,
  label,
  style,
}: {
  selected: DropdownItem[];
  setSelected: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  data: DropdownItem[];
  label: string;
  style?: string;
}) => {
  return (
    <>
      <Headline text={label} style={style || "sidebarDescription spaceUp"} />
      <Multiselect
        dropDownItems={selected}
        setDropdownItems={setSelected}
        dropDownData={data}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelected([])}
        onAllClick={() => setSelected(data)}
      />
    </>
  );
};

export default MultiselectFilter;
