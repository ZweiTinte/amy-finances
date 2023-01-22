import { DropdownItem } from "./components/atoms/dropdown";

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

export function getTransactionsData(
  filteredTransactionsData: Transaction[]
): DropdownItem[] {
  return filteredTransactionsData.map((transaction) => {
    return { id: transaction.id, value: transaction.name };
  });
}
