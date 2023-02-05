import * as React from "react";
import Button from "../atoms/button";
import { DropdownItem } from "../atoms/dropdown";
import Headline from "../atoms/headline";
import Multiselect from "../atoms/multiselect";
import EmptyAllButtonGroup from "../level1/emptyAllButtonGroup";
import { getMonths, getYears } from "../../helpers/helpers";

const OrderSidebarContent = ({
  orders,
  selectedYears,
  setSelectedYears,
  selectedMonths,
  setSelectedMonths,
  selectedAccounts,
  setSelectedAccounts,
  accounts,
}: {
  orders: Order[];
  selectedYears: DropdownItem[];
  setSelectedYears: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedMonths: DropdownItem[];
  setSelectedMonths: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedAccounts: DropdownItem[];
  setSelectedAccounts: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  accounts: DropdownItem[];
}) => {
  return (
    <div className="sidebarRight">
      <Headline text={"ORDER FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedYears(getYears(orders));
          setSelectedMonths(getMonths(orders));
          setSelectedAccounts(accounts);
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
      <Headline text={"Selected Years"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedYears}
        setDropdownItems={setSelectedYears}
        dropDownData={getYears(orders)}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedYears([])}
        onAllClick={() => setSelectedYears(getYears(orders))}
      />
      <Headline text={"Selected Months"} style="sidebarDescription spaceUp" />
      <Multiselect
        dropDownItems={selectedMonths}
        setDropdownItems={setSelectedMonths}
        dropDownData={getMonths(orders)}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedMonths([])}
        onAllClick={() => setSelectedMonths(getMonths(orders))}
      />
    </div>
  );
};

export default OrderSidebarContent;
