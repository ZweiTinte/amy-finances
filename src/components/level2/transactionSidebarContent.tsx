import * as React from "react";
import Button from "../atoms/button";
import { DropdownItem } from "../atoms/dropdown";
import Headline from "../atoms/headline";
import { categories } from "../../helpers/categoriesHelper";
import Multiselect from "../atoms/multiselect";
import EmptyAllButtonGroup from "../level1/emptyAllButtonGroup";
import { getMonths, getYears } from "../../helpers/helpers";

const TransactionSidebarContent = ({
  transactions,
  selectedCategories,
  setSelectedCategories,
  selectedYears,
  setSelectedYears,
  selectedMonths,
  setSelectedMonths,
  selectedAccounts,
  setSelectedAccounts,
  accounts,
}: {
  transactions: Transaction[];
  selectedCategories: DropdownItem[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedYears: DropdownItem[];
  setSelectedYears: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedMonths: DropdownItem[];
  setSelectedMonths: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedAccounts: DropdownItem[];
  setSelectedAccounts: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  accounts: DropdownItem[];
}) => {
  return (
    <div className="sidebarRightData">
      <Headline text={"TRANSACTION FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedCategories(categories);
          setSelectedYears(getYears(transactions));
          setSelectedMonths(getMonths(transactions));
          setSelectedAccounts(accounts);
        }}
        text={"Reset Filters"}
      />
      <Headline text={"Selected Categories"} style="sidebarDescription" />
      <Multiselect
        dropDownItems={selectedCategories}
        setDropdownItems={setSelectedCategories}
        dropDownData={categories}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedCategories([])}
        onAllClick={() => setSelectedCategories(categories)}
      />
      <Headline text={"Selected Accounts"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedAccounts}
        setDropdownItems={setSelectedAccounts}
        dropDownData={accounts}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedAccounts([])}
        onAllClick={() => setSelectedAccounts(accounts)}
      />
      <Headline text={"Selected Years"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedYears}
        setDropdownItems={setSelectedYears}
        dropDownData={getYears(transactions)}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedYears([])}
        onAllClick={() => setSelectedYears(getYears(transactions))}
      />
      <Headline text={"Selected Months"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedMonths}
        setDropdownItems={setSelectedMonths}
        dropDownData={getMonths(transactions)}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedMonths([])}
        onAllClick={() => setSelectedMonths(getMonths(transactions))}
      />
    </div>
  );
};

export default TransactionSidebarContent;
