import * as React from "react";
import { getMonths, getYears } from "../../../helpers/helpers";
import OrderSidebarContent from "../../level3/orderSidebarContent";
import { DropdownItem } from "../../../dropdownTypes";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../../../helpers/storageHelper";

const OrderSidebarRight = ({
  orders,
  accounts,
  stocks,
  setFilteredOrders,
  setFiltered,
}: {
  orders: Order[];
  accounts: DropdownItem[];
  stocks: DropdownItem[];
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}) => {
  const [selectedAccounts, setSelectedAccounts] = React.useState<
    DropdownItem[]
  >(getFromLocalStorage("selectedOrdersAccounts", accounts));
  const [selectedStocks, setSelectedStocks] = React.useState<DropdownItem[]>(
    getFromLocalStorage("selectedOrdersStocks", stocks)
  );
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getFromLocalStorage("selectedOrdersYears", getYears(orders))
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    getFromLocalStorage("selectedOrdersMonths", getMonths(orders))
  );

  React.useEffect(() => {
    const filteredYears: string[] = selectedYears.map((year) => {
      return year.value;
    });
    const filteredMonths: number[] = selectedMonths.map((month) => {
      return month.id;
    });
    const filteredAccounts: number[] = selectedAccounts.map((account) => {
      return account.id;
    });
    const filteredStocks: number[] = selectedStocks.map((stock) => {
      return stock.id;
    });
    const newOrders = orders.filter((order) => {
      return (
        (filteredAccounts.includes(order.from) ||
          filteredAccounts.includes(order.to)) &&
        filteredStocks.includes(order.stock) &&
        filteredMonths.includes(new Date(order.date).getMonth()) &&
        filteredYears.includes(new Date(order.date).getFullYear().toString())
      );
    });
    setLocalStorage("selectedOrdersAccounts", selectedAccounts);
    setLocalStorage("selectedOrdersStocks", selectedStocks);
    setLocalStorage("selectedOrdersYears", selectedYears);
    setLocalStorage("selectedOrdersMonths", selectedMonths);
    setFilteredOrders(newOrders);
    setFiltered(true);
  }, [selectedYears, selectedMonths, selectedAccounts, selectedStocks]);

  return (
    <OrderSidebarContent
      orders={orders}
      selectedYears={selectedYears}
      setSelectedYears={setSelectedYears}
      selectedMonths={selectedMonths}
      setSelectedMonths={setSelectedMonths}
      selectedAccounts={selectedAccounts}
      setSelectedAccounts={setSelectedAccounts}
      setSelectedStocks={setSelectedStocks}
      selectedStocks={selectedStocks}
      accounts={accounts}
      stocks={stocks}
    />
  );
};

export default OrderSidebarRight;
