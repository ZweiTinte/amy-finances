import { DropdownItem } from "./components/atoms/dropdown";

export const orderTypes: DropdownItem[] = [
  { id: 1, value: "Buy" },
  { id: 2, value: "Sell" },
];

export async function fetchOrders(
  resolveFetching: (data: Order[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}orders`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function postOrder(
  resolvePost: () => void,
  date: string,
  orderType: string,
  stockId: number,
  amount: number,
  price: number,
  cost: number,
  from: DropdownItem,
  to: DropdownItem
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: date,
      orderType: orderType,
      stock: stockId,
      amount: amount,
      price: price,
      cost: cost,
      sum: orderType === "Buy" ? amount * price + cost : amount * price - cost,
      from: from.id,
      to: to.id,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolvePost).catch();
    })
    .catch();
}
