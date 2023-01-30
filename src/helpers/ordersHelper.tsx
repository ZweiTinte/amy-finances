import { DropdownItem } from "../components/atoms/dropdown";

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
