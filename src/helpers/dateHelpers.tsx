function getDays(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export function addMonths(date: string, months: number): string {
  const month = parseInt(date.substring(5, 7));
  const days = parseInt(date.substring(8, 10));
  let newDays = days;
  const monthSum = month + months;
  const year = parseInt(date.substring(0, 4));
  if (monthSum > 12) {
    const remainer = monthSum % 12;

    const newMonth = remainer ? remainer.toString() : "0" + remainer.toString();
    const newYear = Math.trunc(monthSum / 12) + year;
    if (days > getDays(newYear, remainer)) {
      newDays = getDays(newYear, remainer);
    }
    const newDaysString =
      newDays > 9 ? newDays.toString() : "0" + newDays.toString();
    return newYear.toString() + "-" + newMonth + "-" + newDaysString;
  } else {
    const newMonth =
      monthSum > 9 ? monthSum.toString() : "0" + monthSum.toString();
    if (days > getDays(year, monthSum)) {
      newDays = getDays(year, monthSum);
    }
    const newDaysString =
      newDays > 9 ? newDays.toString() : "0" + newDays.toString();
    return date.substring(0, 4) + "-" + newMonth + "-" + newDaysString;
  }
}
