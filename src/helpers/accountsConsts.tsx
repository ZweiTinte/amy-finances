import { DropdownItem } from "../dropdownTypes";

export const accountItemFields: string[] = [
  "Id",
  "Iban",
  "Name",
  "Type",
  "Balance",
];

export const accountTypes = [
  { id: 0, value: "Cash" },
  { id: 1, value: "Stock" },
  { id: 2, value: "Clearing" },
];

export const emptyAccountDDItem: DropdownItem = { id: 0, value: "Empty" };
