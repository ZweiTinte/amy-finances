import * as React from "react";
import DateInput from "../atoms/dateInput";
import NumberInput from "../atoms/numberInput";
import Dropdown from "../atoms/dropdown";
import { DropdownItem, DropdownTypes } from "../../dropdownTypes";
import { recPeriods } from "../../helpers/transactionConsts";

const RecurringForm = ({
  recurringEnd,
  setRecurringGap,
  recurringGap,
  recurringPeriod,
  setRecurringEnd,
  setRecurringPeriod,
}: {
  recurringEnd: string;
  setRecurringEnd: React.Dispatch<React.SetStateAction<string>>;
  recurringGap: string;
  setRecurringGap: React.Dispatch<React.SetStateAction<string>>;
  recurringPeriod: DropdownItem;
  setRecurringPeriod: React.Dispatch<React.SetStateAction<DropdownItem>>;
}) => {
  return (
    <>
      <div className="formRow">
        <label className="formLabel">End-Date:</label>
        <DateInput value={recurringEnd} setValue={setRecurringEnd} />
      </div>
      <div className="formRow">
        <label className="formLabel">Gap:</label>
        <NumberInput value={recurringGap} setValue={setRecurringGap} />
      </div>
      <div className="formRow">
        <label className="formLabel">Period:</label>
        <Dropdown
          dropDownItem={recurringPeriod}
          setDropdownItem={setRecurringPeriod}
          dropDownData={recPeriods}
          type={DropdownTypes.Value}
          verticalForm={false}
        />
      </div>
    </>
  );
};

export default RecurringForm;
