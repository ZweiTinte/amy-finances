import { DropdownItem } from "../components/atoms/dropdown";

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

export const formValidationMessage: string =
  "Please fill out all fields and use '.' as separator for numbers!";

export function fieldsValid(fields: string[]): boolean {
  let valid = true;
  fields.forEach((field) => {
    if (field.replaceAll(" ", "").length === 0) {
      valid = false;
    }
  });
  return valid;
}

export const euroFormat = Intl.NumberFormat("de-DE", {
  useGrouping: true,
  currency: "EUR",
  style: "currency",
});

export function getYears(transactions: any[]): DropdownItem[] {
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

export function getMonths(transactions: any[]): DropdownItem[] {
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
