function getDays(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export function addMonths(date: string, months: number): string {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(5, 7));
  const days = parseInt(date.substring(8, 10));
  let newDays = days;
  let newMonth = month.toString();
  let newYear = year;
  const monthSum = month + months;
  if (monthSum > 12) {
    const remainer = monthSum % 12;
    newMonth = remainer > 9 ? remainer.toString() : "0" + remainer.toString();
    newYear = Math.trunc(monthSum / 12) + year;
    if (days > getDays(newYear, remainer)) {
      newDays = getDays(newYear, remainer);
    }
  } else {
    newMonth = monthSum > 9 ? monthSum.toString() : "0" + monthSum.toString();
    if (days > getDays(year, monthSum)) {
      newDays = getDays(year, monthSum);
    }
  }
  const newDaysString =
    newDays > 9 ? newDays.toString() : "0" + newDays.toString();
  return newYear.toString() + "-" + newMonth + "-" + newDaysString;
}
