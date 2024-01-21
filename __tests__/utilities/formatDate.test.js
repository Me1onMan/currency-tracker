import { formatDateReadable, formatDateForRequest } from "@utils/formatDate";

test("Format date from ms and ISO to dd.MM.yyyy", () => {
  const dateMS = 1705839843544; // 21.01.2024
  const dateISO = "2024-01-20T00:00:00.0000000Z"; // 20.01.2024

  expect(formatDateReadable(dateMS)).toEqual("21.01.2024");
  expect(formatDateReadable(dateISO)).toEqual("20.01.2024");
  expect(formatDateForRequest(dateMS)).toEqual("2024-01-21");
});
