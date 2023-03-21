import { DropdownItem } from "../components/atoms/dropdown";

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
