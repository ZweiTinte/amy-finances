import { DropdownItem } from "../dropdownTypes";

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
    const year = new Date("date" in trans ? trans.date : trans.payDate)
      .getFullYear()
      .toString();
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
    const month = new Date(
      "date" in trans ? trans.date : trans.payDate
    ).getMonth();
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

export function getDDItem(id: number, data: DropdownItem[]): DropdownItem {
  return data.filter((c) => {
    return c.id === id;
  })[0];
}

export function getCategoryType(categoryType: number): string {
  if (categoryType === -1) {
    return "Expense";
  } else if (categoryType === 0) {
    return "Money Transfer";
  } else if (categoryType === 1) {
    return "Income";
  }
  return "";
}

export const categoryTypes: DropdownItem[] = [
  { id: -1, value: "Expense" },
  { id: 0, value: "Money Transfer" },
  { id: 1, value: "Income" },
];

export function getCategoryDDItem(categoryType: number): DropdownItem {
  return categoryTypes.filter((ct) => {
    return ct.id === categoryType;
  })[0];
}
