import React from "react";
import { DropdownItem } from "../dropdownTypes";
import { getDDItem } from "./helpers";

export function itemAction(e: React.KeyboardEvent<HTMLDivElement>) {
  const target = e.currentTarget as HTMLElement;
  if (target !== null) {
    if (e.key === "ArrowDown" && target.nextSibling !== null) {
      (target.nextSibling as HTMLDivElement)?.focus();
      setTimeout(() => {
        (target.nextSibling?.parentElement as HTMLDivElement).scrollTop += 8;
      }, 1);
    } else if (e.key === "ArrowUp" && target.previousSibling !== null) {
      const prevEl = target.previousSibling;
      (prevEl as HTMLElement).focus();
      setTimeout(() => {
        (prevEl?.parentElement as HTMLDivElement).scrollTop -= 8;
      }, 1);
    } else if (e.key === "ArrowUp" && target.previousSibling === null) {
      const prevEl = target.parentElement?.previousSibling;
      (prevEl as HTMLElement).focus();
      setTimeout(() => {
        if (prevEl instanceof HTMLInputElement) {
          const end = prevEl.value.length;
          prevEl.setSelectionRange(end, end);
        }
      }, 1);
    } else if (e.key === "Enter") {
      target.click();
    }
  }
}

export function inputKeyDownAction(e: React.KeyboardEvent<HTMLInputElement>) {
  const target = e.currentTarget as HTMLElement;
  if (e.key === "ArrowDown" && target && target.nextSibling !== null) {
    (target.nextSibling as HTMLDivElement)?.focus();
  }
  if (
    e.key === "ArrowDown" &&
    target &&
    target.nextSibling?.firstChild !== null
  ) {
    (target.nextSibling?.firstChild as HTMLDivElement)?.focus();
    setTimeout(() => {
      (target.nextSibling as HTMLDivElement).scrollTop -= 20;
    }, 1);
  }
}

export function getTransactionSuggestions(
  transactions: Transaction[] | undefined
): DropdownItem[] {
  let suggestionNames: { name: string; amount: number }[] =
    transactions?.map((trans) => {
      return { name: trans.name, amount: 0 };
    }) || [];
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
