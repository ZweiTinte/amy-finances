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
}

export function getTransactionSuggestions(
  transactions: Transaction[] | undefined
): DropdownItem[] {
  let suggestionNames: string[] = [];
  if (transactions) {
    transactions.forEach((trans) => {
      if (!suggestionNames.includes(trans.name)) {
        suggestionNames.push(trans.name);
      }
    });
  }
  return suggestionNames.map((sug, i) => {
    return { id: i, value: sug };
  });
}
