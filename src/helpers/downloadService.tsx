import { DropdownItem } from "../dropdownTypes";
import { getAccountName } from "./accountsHelper";
import { euroFormat, getDDItem } from "./helpers";

export function sanitizeCSV(
  text: string,
  char: string = ";",
  replacement: string = ","
): string {
  return text.split(char).join(replacement);
}

export function download(
  filename: string,
  transactions: Transaction[],
  categories: DropdownItem[],
  accounts: Account[]
): void {
  const csvData =
    "ID;Type;Date;Name;Category;Amount;From;To\n" +
    transactions
      .map((transaction) => {
        const row = [];
        row.push(sanitizeCSV(transaction.id?.toString() ?? ""));
        row.push(sanitizeCSV(transaction.transactionType));
        row.push(sanitizeCSV(transaction.date));
        row.push(sanitizeCSV(transaction.name));
        row.push(
          sanitizeCSV(getDDItem(transaction.category, categories).value)
        );
        row.push(sanitizeCSV(euroFormat.format(transaction.amount)));
        row.push(sanitizeCSV(getAccountName(transaction.from, accounts)));
        row.push(sanitizeCSV(getAccountName(transaction.to, accounts)));
        return row.join(";");
      })
      .join("\n");
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csvData)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
