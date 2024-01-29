import { formatDate } from "@utils/formatDate";
import { IChartData } from "./interfaces";

export function getChartDataFromResponse(responseData: IChartData[]) {
  const nextChartData = responseData.map((el) => [
    `${formatDate(el.time_period_start, "dd.MM.yyyy")}`,
    el.rate_low,
    el.rate_open,
    el.rate_close,
    el.rate_high,
  ]);
  nextChartData.unshift(["Day", "", "", "", ""]);

  return nextChartData;
}
