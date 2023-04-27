import * as React from "react";
import Dropdown from "../atoms/dropdown";
import { DropdownItem, DropdownTypes } from "../../dropdownTypes";

const FromToForm = ({
  from,
  setFrom,
  accounts,
  to,
  setTo,
}: {
  from: DropdownItem;
  setFrom: React.Dispatch<React.SetStateAction<DropdownItem>>;
  accounts: DropdownItem[];
  to: DropdownItem;
  setTo: React.Dispatch<React.SetStateAction<DropdownItem>>;
}) => {
  return (
    <>
      <div className="formRow">
        <label className="formLabel">From:</label>
        <Dropdown
          dropDownItem={from}
          setDropdownItem={setFrom}
          dropDownData={accounts}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
      <div className="formRow">
        <label className="formLabel">To:</label>
        <Dropdown
          dropDownItem={to}
          setDropdownItem={setTo}
          dropDownData={accounts}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
    </>
  );
};

export default FromToForm;
