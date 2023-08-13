import * as React from "react";
import DateSelections from "../../level2/dateSelections";
import { euroFormat } from "../../../helpers/helpers";
import ToggleButton from "../../atoms/toggleButton";

const StatisticsOverview = ({
  categories,
  transactions,
}: {
  categories?: Category[];
  transactions?: Transaction[];
}) => {
  const [selectedDate1, setSelectedDate1] = React.useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [selectedDate2, setSelectedDate2] = React.useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [compareDate1, setCompareDate1] = React.useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [compareDate2, setCompareDate2] = React.useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [income, setIncome] = React.useState<number>(0);
  const [compareIncome, setCompareIncome] = React.useState<number>(0);
  const [categoryType, setCategoryType] = React.useState(-1);

  React.useEffect(() => {
    if (transactions && categories) {
      const newSelection = transactions.filter((trans) => {
        return trans.date <= selectedDate2 && trans.date >= selectedDate1;
      });
      const incomeTransaction = newSelection.filter((trans) => {
        return (
          categories.filter((cat) => {
            return cat.id === trans.category;
          })[0].type === categoryType
        );
      });
      let newIncome = 0;
      incomeTransaction.forEach((trans) => {
        newIncome += trans.amount;
      });
      setIncome(newIncome);
    }
  }, [selectedDate1, selectedDate2, transactions, categories, categoryType]);

  React.useEffect(() => {
    if (transactions && categories) {
      const newSelection = transactions.filter((trans) => {
        return trans.date <= compareDate2 && trans.date >= compareDate1;
      });
      const incomeTransaction = newSelection.filter((trans) => {
        return (
          categories.filter((cat) => {
            return cat.id === trans.category;
          })[0].type === categoryType
        );
      });
      let newIncome = 0;
      incomeTransaction.forEach((trans) => {
        newIncome += trans.amount;
      });
      setCompareIncome(newIncome);
    }
  }, [compareDate1, compareDate2, transactions, categories, categoryType]);

  return (
    <div className="gameLayout">
      <div className="ordersCard">
        <DateSelections
          selectedDate1={selectedDate1}
          selectedDate2={selectedDate2}
          setSelectedDate1={setSelectedDate1}
          setSelectedDate2={setSelectedDate2}
          compareDate1={compareDate1}
          compareDate2={compareDate2}
          setCompareDate1={setCompareDate1}
          setCompareDate2={setCompareDate2}
        />
        <div>
          <span className="dateText">{euroFormat.format(income)}</span>
          <span className="dateText">compared to</span>
          <span className="dateText">{euroFormat.format(compareIncome)}</span>
        </div>
        <ToggleButton
          onClick={() => {
            const oldCat = categoryType * -1;
            setCategoryType(oldCat);
          }}
          checked={categoryType === 1}
          label={categoryType === 1 ? "Show Income" : "Show Expenses"}
        />
      </div>
    </div>
  );
};

export default StatisticsOverview;
