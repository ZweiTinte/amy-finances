import { DropdownItem } from "../components/atoms/dropdown";

export const accountTypes = [
  { id: 0, value: "Cash" },
  { id: 1, value: "Stock" },
  { id: 2, value: "Clearing" },
];

export const emptyAccountDDItem: DropdownItem = { id: 0, value: "Empty" };

export function getAccountName(accountId: number, accounts: Account[]): string {
  if (accountId === 0) {
    return "";
  } else {
    return accounts.filter((account) => {
      return account.id === accountId;
    })[0].name;
  }
}

export function getAccountDDItem(accountId: number, accounts: DropdownItem[]) {
  return accounts.filter((a) => {
    return a.id === accountId;
  })[0];
}
