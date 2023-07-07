import * as React from "react";
import DateSelections from "../../level2/dateSelections";

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

  React.useEffect(() => {
    if (transactions && categories) {
      const newSelection = transactions.filter((trans) => {
        return trans.date <= selectedDate2 && trans.date >= selectedDate1;
      });
      const incomeTransaction = newSelection.filter((trans) => {
        return (
          categories.filter((cat) => {
            return cat.id === trans.category;
          })[0].type === 1
        );
      });
      let newIncome = 0;
      incomeTransaction.forEach((trans) => {
        newIncome += trans.amount;
      });
      setIncome(newIncome);
    }
  }, [selectedDate1, selectedDate2, transactions, categories]);

  React.useEffect(() => {
    if (transactions && categories) {
      const newSelection = transactions.filter((trans) => {
        return trans.date <= compareDate2 && trans.date >= compareDate1;
      });
      const incomeTransaction = newSelection.filter((trans) => {
        return (
          categories.filter((cat) => {
            return cat.id === trans.category;
          })[0].type === -1
        );
      });
      let newIncome = 0;
      incomeTransaction.forEach((trans) => {
        newIncome += trans.amount;
      });
      setCompareIncome(newIncome);
    }
  }, [compareDate1, compareDate2, transactions, categories]);

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
          <span className="dateText">{income}</span>
          <span className="dateText">compared to</span>
          <span className="dateText">{compareIncome}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsOverview;
