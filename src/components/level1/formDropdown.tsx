import * as React from "react";
import Dropdown, { DropdownItem, DropdownTypes } from "../atoms/dropdown";

const FormDropdown = ({
  dropDownItem,
  setDropdownItem,
  dropDownData,
  dropdownName,
}: {
  dropDownItem: DropdownItem;
  setDropdownItem: React.Dispatch<React.SetStateAction<DropdownItem>>;
  dropDownData: DropdownItem[];
  dropdownName: string;
}) => {
  return (
    <div className="formRow">
      <label className="formLabel">{dropdownName}</label>
      <Dropdown
        dropDownItem={dropDownItem}
        setDropdownItem={setDropdownItem}
        dropDownData={dropDownData}
        type={DropdownTypes.Value}
        verticalForm={false}
      />
    </div>
  );
};

export default FormDropdown;
