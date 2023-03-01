import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import TransactionSidebarContent from "../../level3/transactionSidebarContent";
import { getMonths, getYears } from "../../../helpers/helpers";
import {
  categories,
  transactionTypes,
} from "../../../helpers/transactionsHelper";

const TransactionSidebarRight = ({
  transactions,
  accounts,
  setFilteredTransactions,
}: {
  transactions: Transaction[];
  accounts: DropdownItem[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const [selectedCategories, setSelectedCategories] =
    React.useState<DropdownItem[]>(categories);
  const [selectedTypes, setSelectedTypes] =
    React.useState<DropdownItem[]>(transactionTypes);
  const [selectedAccounts, setSelectedAccounts] =
    React.useState<DropdownItem[]>(accounts);
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    localStorage.getItem("selectedYears") !== null
      ? JSON.parse(localStorage.getItem("selectedYears") as string)
      : getYears(transactions)
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    localStorage.getItem("selectedMonths") !== null
      ? JSON.parse(localStorage.getItem("selectedMonths") as string)
      : getMonths(transactions)
  );
  const [hideFutureTransactions, setHideFutureTransactions] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const filteredCategories: string[] = selectedCategories.map((category) => {
      return category.value;
    });
    const filteredTypes: string[] = selectedTypes.map((transactionType) => {
      return transactionType.value;
    });
    const filteredYears: string[] = selectedYears.map((year) => {
      return year.value;
    });
    const filteredMonths: number[] = selectedMonths.map((month) => {
      return month.id;
    });
    const filteredAccounts: number[] = selectedAccounts.map((account) => {
      return account.id;
    });
    const newTransactions = transactions.filter((trans) => {
      return (
        (filteredAccounts.includes(trans.from) ||
          filteredAccounts.includes(trans.to)) &&
        filteredMonths.includes(new Date(trans.date).getMonth()) &&
        filteredYears.includes(new Date(trans.date).getFullYear().toString()) &&
        filteredCategories.includes(trans.category) &&
        (hideFutureTransactions ? new Date(trans.date) < new Date() : true) &&
        filteredTypes.includes(trans.transactionType)
      );
    });
    localStorage.setItem("selectedYears", JSON.stringify(selectedYears));
    localStorage.setItem("selectedMonths", JSON.stringify(selectedMonths));
    setFilteredTransactions(newTransactions);
  }, [
    selectedCategories,
    selectedYears,
    selectedMonths,
    selectedAccounts,
    hideFutureTransactions,
    selectedTypes,
  ]);

  return (
    <TransactionSidebarContent
      transactions={transactions}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      selectedTypes={selectedTypes}
      setSelectedTypes={setSelectedTypes}
      selectedYears={selectedYears}
      setSelectedYears={setSelectedYears}
      selectedMonths={selectedMonths}
      setSelectedMonths={setSelectedMonths}
      selectedAccounts={selectedAccounts}
      setSelectedAccounts={setSelectedAccounts}
      accounts={accounts}
      hideFutureTransactions={hideFutureTransactions}
      setHideFutureTransactions={setHideFutureTransactions}
    />
  );
};

export default TransactionSidebarRight;
