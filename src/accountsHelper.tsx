import { DropdownItem } from "./components/atoms/dropdown";

export const accountTypes = [
  { id: 0, value: "Cash" },
  { id: 1, value: "Stock" },
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
