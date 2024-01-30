export const formatDate = (
  incomeDate: number | string,
  pattern: "dd.MM.yyyy" | "yyyy-MM-dd",
): string => {
  const date = new Date(incomeDate);
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const result = pattern
    .replace("dd", day)
    .replace("MM", month)
    .replace("yyyy", year);
  return result;
};
