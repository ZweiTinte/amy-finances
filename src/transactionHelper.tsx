import { DropdownItem } from "./components/atoms/dropdown";

export const categories: DropdownItem[] = [
  { id: 1, value: "Clothing" },
  { id: 2, value: "Food" },
  { id: 3, value: "Money Transfer" },
  { id: 4, value: "Equipment" },
  { id: 5, value: "Entertainment" },
  { id: 6, value: "Income" },
  { id: 7, value: "Mobility" },
  { id: 8, value: "Subscriptions" },
  { id: 9, value: "Insurance" },
  { id: 10, value: "Bureaucracy" },
  { id: 11, value: "Presents" },
  { id: 12, value: "Home" },
  { id: 13, value: "Plushies" },
  { id: 14, value: "Education" },
];

export async function postTransaction(
  resolvePost: () => void,
  date: string,
  name: string,
  category: DropdownItem,
  amount: string,
  from: DropdownItem,
  to: DropdownItem
): Promise<void> {
  await fetch("http://localhost:3000/api/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: date,
      name: name,
      category: category.value,
      amount: parseFloat(amount),
      from: from.id,
      to: to.id,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolvePost).catch();
    })
    .catch();
}
