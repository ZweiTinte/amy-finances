import { DropdownItem } from "./components/atoms/dropdown";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getYears(transactions: Transaction[]): DropdownItem[] {
  let years: string[] = [];
  transactions.forEach((trans) => {
    const year = new Date(trans.date).getFullYear().toString();
    if (!years.includes(year)) {
      years.push(year);
    }
  });
  let yearId = 0;
  return years.map((year) => {
    yearId++;
    return { id: yearId, value: year };
  });
}

export function getMonths(transactions: Transaction[]): DropdownItem[] {
  let months: number[] = [];
  transactions.forEach((trans) => {
    const month = new Date(trans.date).getMonth();
    if (!months.includes(month)) {
      months.push(month);
    }
    if (months.length === 12) {
      return;
    }
  });
  return months.map((month) => {
    return { id: month, value: monthNames[month] };
  });
}

export function getTransactionsData(
  filteredTransactionsData: Transaction[]
): DropdownItem[] {
  return filteredTransactionsData.map((transaction) => {
    return { id: transaction.id, value: transaction.name };
  });
}

export function getAccountTypes(accounts: Account[]): DropdownItem[] {
  let accountTypes: string[] = [];
  accounts.forEach((account) => {
    if (!accountTypes.includes(account.accountType)) {
      accountTypes.push(account.accountType);
    }
  });
  let id = 0;
  return accountTypes.map((accountType) => {
    id++;
    return { id: id, value: accountType };
  });
}
