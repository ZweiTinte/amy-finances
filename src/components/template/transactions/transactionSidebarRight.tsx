import * as React from "react";
import TransactionSidebarContent from "../../level3/transactionSidebarContent";
import { getMonths, getYears } from "../../../helpers/helpers";
import { transTypes } from "../../../helpers/transactionConsts";
import { DropdownItem } from "../../../dropdownTypes";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../../../helpers/storageHelper";
import { getFilteredTransactions } from "../../../helpers/filtersHelper";

const TransactionSidebarRight = ({
  transactions,
  accounts,
  setFilteredTransactions,
  categories,
  setFiltered,
}: {
  transactions: Transaction[];
  accounts: DropdownItem[];
  categories: DropdownItem[];
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const [selectedCategories, setSelectedCategories] = React.useState<
    DropdownItem[]
  >(getFromLocalStorage("selectedCategories", categories));
  const [selectedTypes, setSelectedTypes] =
    React.useState<DropdownItem[]>(transTypes);
  const [selectedAccounts, setSelectedAccounts] = React.useState<
    DropdownItem[]
  >(getFromLocalStorage("selectedAccounts", accounts));
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getFromLocalStorage("selectedYears", getYears(transactions))
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    getFromLocalStorage("selectedMonths", getMonths(transactions))
  );
  const [hideFutureTransactions, setHideFutureTransactions] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const newTransactions = getFilteredTransactions(
      transactions,
      selectedAccounts.map((account) => {
        return account.id;
      }),
      selectedMonths.map((month) => {
        return month.id;
      }),
      selectedYears.map((year) => {
        return year.value;
      }),
      selectedTypes.map((transactionType) => {
        return transactionType.value;
      }),
      selectedCategories.map((category) => {
        return category.value;
      }),
      hideFutureTransactions,
      categories
    );
    setLocalStorage("selectedYears", selectedYears);
    setLocalStorage("selectedMonths", selectedMonths);
    setLocalStorage("selectedAccounts", selectedAccounts);
    setLocalStorage("selectedCategories", selectedCategories);
    setFilteredTransactions(newTransactions);
    setFiltered(true);
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
