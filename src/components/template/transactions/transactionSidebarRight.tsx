import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import { categories } from "../../../helpers/categoriesHelper";
import { getMonths, getYears } from "../../../helpers/filtersHelper";
import TransactionSidebarContent from "../../level2/transactionSidebarContent";

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
  const [selectedAccounts, setSelectedAccounts] =
    React.useState<DropdownItem[]>(accounts);
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getYears(transactions)
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    getMonths(transactions)
  );

  React.useEffect(() => {
    const filteredCategories: string[] = selectedCategories.map((category) => {
      return category.value;
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
        filteredCategories.includes(trans.category)
      );
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
      selectedAccounts={selectedAccounts}
      setSelectedAccounts={setSelectedAccounts}
      accounts={accounts}
    />
  );
};

export default TransactionSidebarRight;
