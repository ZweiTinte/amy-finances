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
          const prevMonthLastDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            1
          );
          const prevMonthFirstDate = new Date(
            date.getFullYear() - (date.getMonth() > 0 ? 0 : 1),
            (date.getMonth() - 1 + 12) % 12,
            2
          );
          setSelectedDate1(firstDay.toDateString());
          setSelectedDate2(lastDay.toDateString());
          setCompareDate1(prevMonthFirstDate.toDateString());
          setCompareDate2(prevMonthLastDate.toDateString());
        }}
      />
      <Button
        text="Current Year / Previous Year"
        onClick={() => {
          const date = new Date();
          setSelectedDate1(new Date(date.getFullYear(), 0, 2).toDateString());
          setSelectedDate2(new Date(date.getFullYear(), 11, 32).toDateString());
          setCompareDate1(
            new Date(date.getFullYear() - 1, 0, 2).toDateString()
          );
          setCompareDate2(
            new Date(date.getFullYear() - 1, 11, 32).toDateString()
          );
        }}
      />
      <Button
        text="Current Month / Month of Previous Year"
        onClick={() => {
          const date = new Date();
          const y = date.getFullYear();
          const m = date.getMonth();
          const firstDay = new Date(y, m, 2);
          const lastDay = new Date(y, m + 1, 1);
          const firstDay2 = new Date(y - 1, m, 2);
          const lastDay2 = new Date(y - 1, m + 1, 1);
          setSelectedDate1(firstDay.toDateString());
          setSelectedDate2(lastDay.toDateString());
          setCompareDate1(firstDay2.toDateString());
          setCompareDate2(lastDay2.toDateString());
        }}
      />
    </div>
  );
};

export default DatePreSelection;
