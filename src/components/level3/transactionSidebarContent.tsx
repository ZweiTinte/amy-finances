import * as React from "react";
import Button from "../atoms/button";
import Headline from "../atoms/headline";
import { getMonths, getYears } from "../../helpers/helpers";
import Checkbox from "../atoms/checkbox";
import { categories, transactionTypes } from "../../helpers/transactionConsts";
import { TransactionSidebarContentProps } from "../../transactionTypes";
import MultiselectFilter from "../level2/multiselectFilter";

const TransactionSidebarContent = ({
  transactions,
  selectedCategories,
  setSelectedCategories,
  selectedTypes,
  setSelectedTypes,
  selectedYears,
  setSelectedYears,
  selectedMonths,
  setSelectedMonths,
  selectedAccounts,
  setSelectedAccounts,
  accounts,
  hideFutureTransactions,
  setHideFutureTransactions,
}: TransactionSidebarContentProps) => {
  return (
    <div className="sidebarRightData">
      <Headline text={"TRANSACTION FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedCategories(categories);
          setSelectedTypes(transactionTypes);
          setSelectedYears(getYears(transactions));
          setSelectedMonths(getMonths(transactions));
          setSelectedAccounts(accounts);
          setHideFutureTransactions(false);
        }}
        text={"Reset Filters"}
      />
      <MultiselectFilter
        selected={selectedCategories}
        setSelected={setSelectedCategories}
        data={categories}
        label={"Selected Categories"}
        style={"sidebarSubHeadline"}
      />
      <MultiselectFilter
        selected={selectedAccounts}
        setSelected={setSelectedAccounts}
        data={accounts}
        label={"Selected Accounts"}
      />
      <MultiselectFilter
        selected={selectedYears}
        setSelected={setSelectedYears}
        data={getYears(transactions)}
        label={"Selected Years"}
      />
      <MultiselectFilter
        selected={selectedMonths}
        setSelected={setSelectedMonths}
        data={getMonths(transactions)}
        label={"Selected Months"}
      />
      <MultiselectFilter
        selected={selectedTypes}
        setSelected={setSelectedTypes}
        data={transactionTypes}
        label={"Selected Types"}
      />
      <Checkbox
        label={"Hide Future Transactions"}
        onClick={() => setHideFutureTransactions(!hideFutureTransactions)}
        checked={hideFutureTransactions}
      />
    </div>
  );
};

export default TransactionSidebarContent;
