import { navigate } from "gatsby";
import * as React from "react";
import Button from "../../atoms/button";
import Dropdown, { DropdownItem, DropdownTypes } from "../../atoms/dropdown";
import Headline from "../../atoms/headline";
import { categories } from "../../../categoriesHelper";
import Multiselect from "../../atoms/multiselect";

const TransactionSidebarRight = ({
  transactions,
  setFilteredTransactions,
  filteredTransactionsData,
}: {
  transactions: Transaction[];
  filteredTransactionsData: Transaction[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const transactionsData: DropdownItem[] = filteredTransactionsData.map(
    (transaction) => {
      return { id: transaction.id, value: transaction.name };
    }
  );
  const [selectedTransaction, setSelectedTransaction] =
    React.useState<DropdownItem>(transactionsData[0]);
  const [selectedCategories, setSelectedCategories] =
    React.useState<DropdownItem[]>(categories);

  let years: string[] = [];
  transactions.forEach((trans) => {
    const year = new Date(trans.date).getFullYear().toString();
    if (!years.includes(year)) {
      years.push(year);
    }
  });
  let yearId = 0;
  const avaliableYears: DropdownItem[] = years.map((year) => {
    yearId++;
    return { id: yearId, value: year };
  });
  const [selectedYears, setSelectedYears] =
    React.useState<DropdownItem[]>(avaliableYears);

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
    <div className="sidebarRight">
      <Headline text={"TRANSACTIONS MENU"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton"}
        onClick={() => navigate("/transactions/new")}
        text={"Add New Transaction"}
      />
      <Headline text={"Edit Transaction"} style="sidebarSubHeadline" />
      <Dropdown
        dropDownItem={selectedTransaction}
        setDropdownItem={setSelectedTransaction}
        dropDownData={transactionsData}
        type={DropdownTypes.Id}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => navigate(`/transactions/${selectedTransaction.id}`)}
        text={"Edit"}
      />
      <Headline text={"FILTERS"} style="sidebarSubHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setFilteredTransactions(transactions);
          setSelectedCategories(categories);
          setSelectedYears(avaliableYears);
        }}
        text={"Reset Filters"}
      />
      <Headline text={"Selected Categories"} style="sidebarDescription" />
      <Multiselect
        dropDownItems={selectedCategories}
        setDropdownItems={setSelectedCategories}
        dropDownData={categories}
        items={categories}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedCategories([]);
        }}
        text={"Empty Selection"}
      />
      <div className="spaceUp"></div>
      <Headline text={"Selected Years"} style="sidebarDescription" />
      <Multiselect
        dropDownItems={selectedYears}
        setDropdownItems={setSelectedYears}
        dropDownData={avaliableYears}
        items={avaliableYears}
      />
    </div>
  );
};

export default TransactionSidebarRight;
