import { DropdownItem } from "../dropdownTypes";
import { getDDItem } from "./helpers";

export function getTransactionsData(
  filteredTransactionsData: Transaction[]
): DropdownItem[] {
  return filteredTransactionsData.map((transaction) => {
    return { id: transaction.id || 0, value: transaction.name };
  });
}

export function getAccountTypes(accounts: Account[]): DropdownItem[] {
  let accountTypes: string[] = [];
  accounts.forEach((account) => {
    if (!accountTypes.includes(account.accountType)) {
      accountTypes.push(account.accountType);
    }
  });
  let id = -1;
  return accountTypes.map((accountType) => {
    id++;
    return { id: id, value: accountType };
  });
}

export function getFilteredTransactions(
  transactions: Transaction[],
  filteredAccounts: number[],
  filteredMonths: number[],
  filteredYears: string[],
  filteredTypes: string[],
  filteredCategories: string[],
  hideFutureTransactions: boolean,
  categories: DropdownItem[]
) {
  return transactions.filter((trans) => {
    return (
      (filteredAccounts.includes(trans.from) ||
        filteredAccounts.includes(trans.to)) &&
      filteredMonths.includes(new Date(trans.date).getMonth()) &&
      filteredYears.includes(new Date(trans.date).getFullYear().toString()) &&
      filteredCategories.includes(
        getDDItem(trans.category, categories).value
      ) &&
      (hideFutureTransactions ? new Date(trans.date) < new Date() : true) &&
      filteredTypes.includes(trans.transactionType)
    );
  });
}
