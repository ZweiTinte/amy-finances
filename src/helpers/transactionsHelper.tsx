import { DropdownItem } from "../dropdownTypes";
import { TransactionItem } from "../transactionTypes";
import { getAccountName } from "./accountsHelper";
import { euroFormat, getDDItem } from "./helpers";
import { recPeriods, transTypes } from "./transactionConsts";

export function getTransactionType(transactionType: string): DropdownItem {
  return transTypes.filter((c) => {
    return c.value === transactionType;
  })[0];
}

export function getCategory(
  categories: DropdownItem[] | undefined
): DropdownItem {
  return categories === undefined ? { id: 0, value: "" } : categories[0];
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
  setTransactionReady: (ready: boolean) => void,
  categories: DropdownItem[]
): void {
  setName(data.name);
  setDate(data.date);
  setTransactionType(getTransactionType(data.transactionType));
  setCategory(getDDItem(data.category, categories));
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
      recPeriods.filter((p) => {
        return p.value === data.recurringPeriod;
      })[0]
    );
  }
  setTransactionReady(true);
}

export function getTransactionItems(
  transactions: Transaction[],
  accounts: Account[],
  categories: DropdownItem[]
): TransactionItem[] {
  return transactions.map((trans) => {
    return {
      id: trans.id?.toString() ?? "",
      type: trans.transactionType,
      date: trans.date,
      name: trans.name,
      category: getDDItem(trans.category, categories).value,
      amount: euroFormat.format(trans.amount),
      from: getAccountName(trans.from, accounts),
      to: getAccountName(trans.to, accounts),
    };
  });
}
