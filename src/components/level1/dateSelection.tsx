import * as React from "react";
import DateInput from "../atoms/dateInput";

const DateSelection = ({
  selectedDate1,
  selectedDate2,
  setSelectedDate1,
  setSelectedDate2,
  compareDate1,
  compareDate2,
  setCompareDate1,
  setCompareDate2,
}: {
  selectedDate1: string;
  selectedDate2: string;
  setSelectedDate1: React.Dispatch<React.SetStateAction<string>>;
  setSelectedDate2: React.Dispatch<React.SetStateAction<string>>;
  compareDate1: string;
  compareDate2: string;
  setCompareDate1: React.Dispatch<React.SetStateAction<string>>;
  setCompareDate2: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="dateSelection">
      <DateInput
        classes="dateSelectionInput"
        value={selectedDate1}
        setValue={setSelectedDate1}
        max={selectedDate2}
      />
      <span className="dateText">to</span>
      <DateInput
        classes="dateSelectionInput"
        value={selectedDate2}
        setValue={setSelectedDate2}
        min={selectedDate1}
      />
      <span className="dateText">compared with</span>
      <DateInput
        classes="dateSelectionInput"
        value={compareDate1}
        setValue={setCompareDate1}
        max={compareDate2}
      />
      <span className="dateText">to</span>
      <DateInput
        classes="dateSelectionInput"
        value={compareDate2}
        setValue={setCompareDate2}
        min={compareDate1}
      />
    </div>
  );
};

export default DateSelection;
