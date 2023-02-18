import { DropdownItem } from "../components/atoms/dropdown";

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
  { id: 15, value: "Health / Body" },
];

export const transactionTypes: DropdownItem[] = [
  { id: 1, value: "Set" },
  { id: 2, value: "Expected" },
  { id: 3, value: "Recurring" },
];

export function getTransactionType(transactionType: string): DropdownItem {
  return transactionTypes.filter((c) => {
    return c.value === transactionType;
  })[0];
}

export function getCategory(category: string): DropdownItem {
  return categories.filter((c) => {
    return c.value === category;
  })[0];
}
