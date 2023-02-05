import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import { categories } from "../../../helpers/categoriesHelper";
import { getMonths, getYears } from "../../../helpers/helpers";
import OrderSidebarContent from "../../level2/orderSidebarContent";

const OrderSidebarRight = ({
  orders,
  accounts,
  stocks,
  setFilteredOrders,
}: {
  orders: Order[];
  accounts: DropdownItem[];
  stocks: DropdownItem[];
  setFilteredOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}) => {
  const [selectedAccounts, setSelectedAccounts] =
    React.useState<DropdownItem[]>(accounts);
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getYears(orders)
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    getMonths(orders)
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
    const newTransactions = orders.filter((trans) => {
      return (
        (filteredAccounts.includes(trans.from) ||
          filteredAccounts.includes(trans.to)) &&
        filteredMonths.includes(new Date(trans.date).getMonth()) &&
        filteredYears.includes(new Date(trans.date).getFullYear().toString())
      );
    });
    setFilteredOrders(newTransactions);
  }, [selectedYears, selectedMonths, selectedAccounts]);

  return (
    <OrderSidebarContent
      orders={orders}
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

export default OrderSidebarRight;
