import React from "react";
import { DropdownItem } from "../dropdownTypes";

export function itemAction(e: React.KeyboardEvent<HTMLDivElement>) {
  const target = e.currentTarget as HTMLElement;
  if (target !== null) {
    if (e.key === "ArrowDown" && target.nextSibling !== null) {
      (target.nextSibling as HTMLDivElement)?.focus();
    } else if (e.key === "ArrowUp" && target.previousSibling !== null) {
      const prevEl = target.previousSibling;
      (prevEl as HTMLElement).focus();
      setTimeout(() => {
        if (prevEl instanceof HTMLInputElement) {
          const end = prevEl.value.length;
          prevEl.setSelectionRange(end, end);
        }
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
    (e.currentTarget.nextSibling as HTMLDivElement)?.focus();
  }
  if (
    e.key === "ArrowDown" &&
    target &&
    target.nextSibling?.firstChild !== null
  ) {
    (e.currentTarget.nextSibling?.firstChild as HTMLDivElement)?.focus();
  }
}

export function getTransactionSuggestions(
  transactions: Transaction[] | undefined
): DropdownItem[] {
  let suggestionNames: { name: string; amount: number }[] = [];
  if (transactions) {
    transactions.forEach((trans) => {
      let suggestion = suggestionNames.filter((sug) => {
        return sug.name === trans.name;
      })[0];
      if (suggestion) {
        suggestion.amount++;
      } else {
        suggestionNames.push({ name: trans.name, amount: 1 });
      }
    });
  }
  suggestionNames.sort((a, b) => {
    return b.amount - a.amount;
  });
  return suggestionNames.map((sug, i) => {
    return { id: i, value: sug.name };
  });
}
