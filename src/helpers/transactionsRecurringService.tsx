import { addMonths } from "./dateHelpers";

export function getRecurringTransactions(item: Transaction): Transaction[] {
  let recurringTransactions = [];
  let recurringDate = new Date(item.date);
  if (item.recurringPeriod && item.recurringEnd && item.recurringGap) {
    let loop = 1;
    while (recurringDate <= new Date(item.recurringEnd)) {
      const itemCopy = structuredClone(item);
      itemCopy.date = recurringDate.toISOString().split("T")[0];
      recurringTransactions.push(itemCopy);
      if (item.recurringPeriod === "Day") {
        recurringDate.setDate(recurringDate.getDate() + item.recurringGap);
      } else if (item.recurringPeriod === "Week") {
        recurringDate.setDate(recurringDate.getDate() + item.recurringGap * 7);
      } else if (item.recurringPeriod === "Month") {
        recurringDate = new Date(
          addMonths(
            new Date(item.date).toISOString().split("T")[0],
            item.recurringGap * loop
          )
        );
      } else if (item.recurringPeriod === "Year") {
        recurringDate = new Date(
          addMonths(
            new Date(item.date).toISOString().split("T")[0],
            item.recurringGap * 12 * loop
          )
        );
      }
      loop++;
    }
    recurringTransactions.shift();
  }
  return recurringTransactions;
}
