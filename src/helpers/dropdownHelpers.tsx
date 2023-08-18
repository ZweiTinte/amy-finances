import { DropdownItem } from "../dropdownTypes";
import { getDDItem } from "./helpers";

export function getTransactionSuggestions(
  transactions: Transaction[] | undefined
): DropdownItem[] {
  const names: string[] = [];
  const suggestionNames: { name: string; amount: number }[] = [];
  transactions?.forEach((trans) => {
    if (!names.includes(trans.name)) {
      names.push(trans.name);
      suggestionNames.push({ name: trans.name, amount: 0 });
    }
  });
  if (transactions) {
    transactions.forEach((trans) => {
      let suggestion = suggestionNames.filter((sug) => {
        return sug.name === trans.name;
      })[0];
      suggestion.amount++;
    });
  }
  suggestionNames.sort((a, b) => {
    return b.amount - a.amount;
  });
  return suggestionNames.map((sug, i) => {
    return { id: i, value: sug.name };
  });
}

export function getCategorySuggestions(
  transactions: Transaction[] | undefined,
  categories: DropdownItem[] | undefined
): DropdownItem[] {
  let suggestionIds: { id: number; amount: number }[] =
    categories?.map((cat) => {
      return { id: cat.id, amount: 0 };
    }) || [];
  if (transactions) {
    transactions.forEach((trans) => {
      let suggestion = suggestionIds.filter((sug) => {
        return sug.id === trans.category;
      })[0];
      suggestion.amount++;
    });
  }
  suggestionIds.sort((a, b) => {
    return b.amount - a.amount;
  });
  return suggestionIds.map((sug) => {
    return getDDItem(sug.id, categories || []);
  });
}
