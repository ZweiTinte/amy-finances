import { navigate } from "gatsby";
import * as React from "react";
import Button from "../atoms/button";
import Dropdown, { DropdownItem, DropdownTypes } from "../atoms/dropdown";
import Headline from "../atoms/headline";
import { categories } from "../../categoriesHelper";
import Multiselect from "../atoms/multiselect";
import { getTransactionsData, getYears } from "../../filtersHelper";

const TransactionSidebarContent = ({
  transactions,
  setFilteredTransactions,
  filteredTransactionsData,
  selectedTransaction,
  setSelectedTransaction,
  selectedCategories,
  setSelectedCategories,
  selectedYears,
  setSelectedYears,
}: {
  transactions: Transaction[];
  filteredTransactionsData: Transaction[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  selectedTransaction: DropdownItem;
  setSelectedTransaction: React.Dispatch<React.SetStateAction<DropdownItem>>;
  selectedCategories: DropdownItem[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedYears: DropdownItem[];
  setSelectedYears: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
}) => {
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
        dropDownData={getTransactionsData(filteredTransactionsData)}
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
          setSelectedYears(getYears(transactions));
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
      <Headline text={"Selected Years"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedYears}
        setDropdownItems={setSelectedYears}
        dropDownData={getYears(transactions)}
        items={getYears(transactions)}
      />
    </div>
  );
};

export default TransactionSidebarContent;
