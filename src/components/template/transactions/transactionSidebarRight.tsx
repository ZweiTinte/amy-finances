import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import { categories } from "../../../categoriesHelper";
import { getMonths, getYears } from "../../../filtersHelper";
import TransactionSidebarContent from "../../level2/transactionSidebarContent";

const TransactionSidebarRight = ({
  transactions,
  setFilteredTransactions,
}: {
  transactions: Transaction[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const [selectedCategories, setSelectedCategories] =
    React.useState<DropdownItem[]>(categories);
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getYears(transactions)
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    getMonths(transactions)
  );

  React.useEffect(() => {
    let newTransactions = transactions;
    const filteredCategories: string[] = selectedCategories.map((category) => {
      return category.value;
    });
    newTransactions = newTransactions.filter((trans) => {
      return filteredCategories.includes(trans.category);
    });
    const filteredYears: string[] = selectedYears.map((year) => {
      return year.value;
    });
    newTransactions = newTransactions.filter((trans) => {
      return filteredYears.includes(
        new Date(trans.date).getFullYear().toString()
      );
    });
    const filteredMonths: number[] = selectedMonths.map((month) => {
      return month.id;
    });
    newTransactions = newTransactions.filter((trans) => {
      return filteredMonths.includes(new Date(trans.date).getMonth());
    });
    setFilteredTransactions(newTransactions);
  }, [selectedCategories, selectedYears, selectedMonths]);

  return (
    <TransactionSidebarContent
      transactions={transactions}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      selectedYears={selectedYears}
      setSelectedYears={setSelectedYears}
      selectedMonths={selectedMonths}
      setSelectedMonths={setSelectedMonths}
    />
  );
};

export default TransactionSidebarRight;
