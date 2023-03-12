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

export const recurringPeriods: DropdownItem[] = [
  { id: 1, value: "Day" },
  { id: 2, value: "Week" },
  { id: 3, value: "Month" },
  { id: 4, value: "Year" },
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

export function resolveTransactionFetching(
  data: Transaction,
  accounts: DropdownItem[],
  setName: (name: string) => void,
  setDate: (date: string) => void,
  setTransactionType: (transactionType: DropdownItem) => void,
  setCategory: (category: DropdownItem) => void,
  setAmount: (amount: string) => void,
  setFrom: (account: DropdownItem) => void,
  setTo: (account: DropdownItem) => void,
  setRecurringEnd: (end: string) => void,
  setRecurringGap: (gap: string) => void,
  setRecurringPeriod: (period: DropdownItem) => void,
  setTransactionReady: (ready: boolean) => void
): void {
  setName(data.name);
  setDate(data.date);
  setTransactionType(getTransactionType(data.transactionType));
  setCategory(getCategory(data.category));
  setAmount(data.amount.toString());
  setFrom(
    accounts.filter((a) => {
      return a.id === data.from;
    })[0]
  );
  setTo(
    accounts.filter((a) => {
      return a.id === data.to;
    })[0]
  );
  if (data.recurringEnd && data.recurringGap && data.recurringPeriod) {
    setRecurringEnd(data.recurringEnd);
    setRecurringGap(data.recurringGap);
    setRecurringPeriod(
      recurringPeriods.filter((p) => {
        return p.value === data.recurringPeriod;
      })[0]
    );
  }
  setTransactionReady(true);
}
