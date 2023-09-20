import { AccountItem } from "../accountTypes";
import { DropdownItem } from "../dropdownTypes";
import { euroFormat } from "./helpers";

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

export function getAccountItems(accounts: Account[]): AccountItem[] {
  return accounts.map((account) => {
    return {
      id: account.id.toString(),
      iban: account.iban,
      name: account.name,
      type: account.accountType,
      balance: euroFormat.format(account.balance),
    };
  });
}
