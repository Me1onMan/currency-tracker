import { formatDate } from "@utils/formatDate";

export function checkMaxDate(date: string): string {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  const [dateYear, dateMonth, dateDay] = date.split("-").map((el) => +el);

  if (dateYear < todayYear) return date;
  if (dateMonth < todayMonth) return date;
  if (dateDay <= todayDay) return date;
  return formatDate(today.getTime(), "yyyy-MM-dd");
}
