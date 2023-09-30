import { DropdownItem } from "../dropdownTypes";
import { OrderItem } from "../orderTypes";
import { getAccountName } from "./accountsHelper";
import { euroFormat } from "./helpers";
import { getStocks } from "./stocksHelper";

export const orderTypes: DropdownItem[] = [
  { id: 1, value: "Buy" },
  { id: 2, value: "Sell" },
];

export function calculateOrderSum(
  orderType: string,
  amount: string,
  price: string,
  cost: string
) {
  return orderType === "Buy"
    ? parseInt(amount) * parseFloat(price) + parseFloat(cost)
    : parseInt(amount) * parseFloat(price) - parseFloat(cost);
}

export function getOrderType(type: string) {
  return orderTypes.filter((orderType) => {
    return type === orderType.value;
  })[0];
}

export const orderItemFields: string[] = [
  "Id",
  "Date",
  "Type",
  "Isin",
  "Name",
  "Amount",
  "Price",
  "Cost",
  "Sum",
  "From",
  "To",
];

export function getOrderItems(
  orders: Order[],
  accounts: Account[],
  stocks: Stock[]
): OrderItem[] {
  return orders.map((order) => {
    const stock: Stock = getStocks(order.stock, stocks)[0];
    return {
      id: order.id?.toString() ?? "",
      date: order.date,
      type: order.orderType,
      isin: stock?.isin ?? "",
      name: stock?.name ?? "",
      amount: order.amount.toString(),
      price: euroFormat.format(order.price),
      cost: euroFormat.format(order.cost),
      sum: euroFormat.format(order.sum),
      from: getAccountName(order.from, accounts),
      to: getAccountName(order.to, accounts),
    };
  });
}
