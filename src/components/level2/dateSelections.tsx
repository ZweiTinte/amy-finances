import * as React from "react";
import DatePreSelection from "../level1/datePreSelection";
import DateSelection from "../level1/dateSelection";

const DateSelections = ({
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
    <div>
      <DatePreSelection
        setSelectedDate1={setSelectedDate1}
        setSelectedDate2={setSelectedDate2}
        setCompareDate1={setCompareDate1}
        setCompareDate2={setCompareDate2}
      />
      <DateSelection
        selectedDate1={selectedDate1}
        selectedDate2={selectedDate2}
        setSelectedDate1={setSelectedDate1}
        setSelectedDate2={setSelectedDate2}
        compareDate1={compareDate1}
        compareDate2={compareDate2}
        setCompareDate1={setCompareDate1}
        setCompareDate2={setCompareDate2}
      />
    </div>
  );
};

export default DateSelections;
