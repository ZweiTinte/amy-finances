import * as React from "react";
import TransactionSidebarContent from "../../level3/transactionSidebarContent";
import { getDDItem, getMonths, getYears } from "../../../helpers/helpers";
import { transTypes } from "../../../helpers/transactionConsts";
import { DropdownItem } from "../../../dropdownTypes";
import { getFromLocalStorage } from "../../../helpers/storageHelper";

const TransactionSidebarRight = ({
  transactions,
  accounts,
  setFilteredTransactions,
  categories,
}: {
  transactions: Transaction[];
  accounts: DropdownItem[];
  categories: DropdownItem[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const [selectedCategories, setSelectedCategories] =
    React.useState<DropdownItem[]>(categories);
  const [selectedTypes, setSelectedTypes] =
    React.useState<DropdownItem[]>(transTypes);
  const [selectedAccounts, setSelectedAccounts] =
    React.useState<DropdownItem[]>(accounts);
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getFromLocalStorage("selectedYears", getYears(transactions))
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    getFromLocalStorage("selectedMonths", getMonths(transactions))
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
        filteredCategories.includes(
          getDDItem(trans.category, categories).value
        ) &&
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
      categories={categories}
    />
  );
};

export default TransactionSidebarRight;
