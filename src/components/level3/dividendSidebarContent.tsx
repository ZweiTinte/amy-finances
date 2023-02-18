import * as React from "react";
import Button from "../atoms/button";
import { DropdownItem } from "../atoms/dropdown";
import Headline from "../atoms/headline";
import { getMonths, getYears } from "../../helpers/helpers";
import MultiselectFilter from "../level2/multiselectFilter";

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
    <div className="sidebarRightData">
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
      <MultiselectFilter
        selected={selectedAccounts}
        setSelected={setSelectedAccounts}
        data={accounts}
        label={"Selected Accounts"}
        style={"sidebarSubHeadline"}
      />
      <MultiselectFilter
        selected={selectedStocks}
        setSelected={setSelectedStocks}
        data={stocks}
        label={"Selected Stocks"}
      />
      <MultiselectFilter
        selected={selectedYears}
        setSelected={setSelectedYears}
        data={getYears(dividends)}
        label={"Selected Years"}
      />
      <MultiselectFilter
        selected={selectedMonths}
        setSelected={setSelectedMonths}
        data={getMonths(dividends)}
        label={"Selected Months"}
      />
    </div>
  );
};

export default DividendSidebarContent;
