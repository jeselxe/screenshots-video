export function listDates(startDate, endDate) {
  let dateRange = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dateRange.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateRange;
}

export function parseDate(date) {
  const d = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  return { slash: d.join("/"), dash: d.join("-") };
}
