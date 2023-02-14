import * as React from "react";
import Button from "../atoms/button";
import { DropdownItem } from "../atoms/dropdown";
import Headline from "../atoms/headline";
import Multiselect from "../atoms/multiselect";
import EmptyAllButtonGroup from "../level1/emptyAllButtonGroup";
import { getMonths, getYears } from "../../helpers/helpers";

const DividendSidebarContent = ({
  dividends,
  selectedYears,
  setSelectedYears,
  selectedMonths,
  setSelectedMonths,
  selectedAccounts,
  setSelectedAccounts,
  accounts,
  selectedStocks,
  setSelectedStocks,
  stocks,
}: {
  dividends: Dividend[];
  selectedYears: DropdownItem[];
  setSelectedYears: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedMonths: DropdownItem[];
  setSelectedMonths: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedAccounts: DropdownItem[];
  setSelectedAccounts: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  accounts: DropdownItem[];
  selectedStocks: DropdownItem[];
  setSelectedStocks: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  stocks: DropdownItem[];
}) => {
  return (
    <div className="sidebarRight">
      <Headline text={"DIVIDEND FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedYears(getYears(dividends));
          setSelectedMonths(getMonths(dividends));
          setSelectedAccounts(accounts);
          setSelectedStocks(stocks);
        }}
        text={"Reset Filters"}
      />
      <Headline text={"Selected Accounts"} style="sidebarDescription" />
      <Multiselect
        dropDownItems={selectedAccounts}
        setDropdownItems={setSelectedAccounts}
        dropDownData={accounts}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedAccounts([])}
        onAllClick={() => setSelectedAccounts(accounts)}
      />
      <Headline text={"Selected Stocks"} style="sidebarDescription" />
      <Multiselect
        dropDownItems={selectedStocks}
        setDropdownItems={setSelectedStocks}
        dropDownData={stocks}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedStocks([])}
        onAllClick={() => setSelectedStocks(stocks)}
      />
      <Headline text={"Selected Years"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedYears}
        setDropdownItems={setSelectedYears}
        dropDownData={getYears(dividends)}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedYears([])}
        onAllClick={() => setSelectedYears(getYears(dividends))}
      />
      <Headline text={"Selected Months"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedMonths}
        setDropdownItems={setSelectedMonths}
        dropDownData={getMonths(dividends)}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedMonths([])}
        onAllClick={() => setSelectedMonths(getMonths(dividends))}
      />
    </div>
  );
};

export default DividendSidebarContent;
