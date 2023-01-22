import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import { categories } from "../../../categoriesHelper";
import { getTransactionsData, getYears } from "../../../filtersHelper";
import TransactionSidebarContent from "../../level1/transactionSidebarContent";

const TransactionSidebarRight = ({
  transactions,
  setFilteredTransactions,
  filteredTransactionsData,
}: {
  transactions: Transaction[];
  filteredTransactionsData: Transaction[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const [selectedTransaction, setSelectedTransaction] =
    React.useState<DropdownItem>(
      getTransactionsData(filteredTransactionsData)[0]
    );
  const [selectedCategories, setSelectedCategories] =
    React.useState<DropdownItem[]>(categories);
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getYears(transactions)
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
    setFilteredTransactions(newTransactions);
  }, [selectedCategories, selectedYears]);

  return (
    <TransactionSidebarContent
      transactions={transactions}
      filteredTransactionsData={filteredTransactionsData}
      setFilteredTransactions={setFilteredTransactions}
      selectedTransaction={selectedTransaction}
      setSelectedTransaction={setSelectedTransaction}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      selectedYears={selectedYears}
      setSelectedYears={setSelectedYears}
    />
  );
};

export default TransactionSidebarRight;
