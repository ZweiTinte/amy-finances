import * as React from "react";
import Button from "../atoms/button";

const DatePreSelection = ({
  setSelectedDate1,
  setSelectedDate2,
  setCompareDate1,
  setCompareDate2,
}: {
  setSelectedDate1: React.Dispatch<React.SetStateAction<string>>;
  setSelectedDate2: React.Dispatch<React.SetStateAction<string>>;
  setCompareDate1: React.Dispatch<React.SetStateAction<string>>;
  setCompareDate2: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="datePreSelection">
      <Button
        text="Current Month / Previous Month"
        onClick={() => {
          const date = new Date();
          const y = date.getFullYear();
          const m = date.getMonth();
          const firstDay = new Date(y, m, 2);
          const lastDay = new Date(y, m + 1, 1);
          const now = new Date();
          const prevMonthLastDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            1
          );
          const prevMonthFirstDate = new Date(
            now.getFullYear() - (now.getMonth() > 0 ? 0 : 1),
            (now.getMonth() - 1 + 12) % 12,
            2
          );
          setSelectedDate1(firstDay.toISOString().split("T")[0]);
          setSelectedDate2(lastDay.toISOString().split("T")[0]);
          setCompareDate1(prevMonthFirstDate.toISOString().split("T")[0]);
          setCompareDate2(prevMonthLastDate.toISOString().split("T")[0]);
        }}
      />
      <Button
        text="Current Year / Previous Year"
        onClick={() => {
          const date = new Date();
          setSelectedDate1(
            new Date(date.getFullYear(), 0, 2).toISOString().split("T")[0]
          );
          setSelectedDate2(
            new Date(date.getFullYear(), 11, 32).toISOString().split("T")[0]
          );
          setCompareDate1(
            new Date(date.getFullYear() - 1, 0, 2).toISOString().split("T")[0]
          );
          setCompareDate2(
            new Date(date.getFullYear() - 1, 11, 32).toISOString().split("T")[0]
          );
        }}
      />
    </div>
  );
};

export default DatePreSelection;
