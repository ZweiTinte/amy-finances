import { DropdownItem } from "../components/atoms/dropdown";
import { addMonths } from "./dateHelpers";
import {
  categories,
  recurringPeriods,
  transactionTypes,
} from "./transactionConsts";

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
    setRecurringGap(data.recurringGap.toString());
    setRecurringPeriod(
      recurringPeriods.filter((p) => {
        return p.value === data.recurringPeriod;
      })[0]
    );
  }
  setTransactionReady(true);
}

export function getRecurringTransactions(item: Transaction): Transaction[] {
  let recurringTransactions = [];
  let recurringDate = new Date(item.date);
  if (item.recurringPeriod && item.recurringEnd && item.recurringGap) {
    while (recurringDate < new Date(item.recurringEnd)) {
      const itemCopy = structuredClone(item);
      itemCopy.date = recurringDate.toISOString().split("T")[0];
      recurringTransactions.push(itemCopy);
      if (item.recurringPeriod === "Day") {
        recurringDate.setDate(recurringDate.getDate() + item.recurringGap);
      } else if (item.recurringPeriod === "Week") {
        recurringDate.setDate(recurringDate.getDate() + item.recurringGap * 7);
      } else if (item.recurringPeriod === "Month") {
        recurringDate = new Date(
          addMonths(
            recurringDate.toISOString().split("T")[0],
            item.recurringGap
          )
        );
      } else if (item.recurringPeriod === "Year") {
        recurringDate = new Date(
          addMonths(
            recurringDate.toISOString().split("T")[0],
            item.recurringGap * 12
          )
        );
      }
    }
  }
  return recurringTransactions;
}
