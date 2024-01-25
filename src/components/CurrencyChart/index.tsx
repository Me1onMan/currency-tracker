import React from "react";
import { Chart } from "react-google-charts";
import { formatDateReadable } from "@utils/formatDate";

import { CHART_OPTIONS } from "./config";
import { IProps, IState } from "./interfaces";

class CurrencyChart extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      chartData: null,
    };
  }

  static getDerivedStateFromProps({ responseData }: IProps) {
    const nextChartData = responseData.map((el) => [
      `${formatDateReadable(el.time_period_start)}`,
      el.rate_low,
      el.rate_open,
      el.rate_close,
      el.rate_high,
    ]);
    nextChartData.unshift(["Day", "", "", "", ""]);

    return {
      chartData: nextChartData,
    };
  }

  render() {
    const { chartData } = this.state;

    return (
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="400px"
        data={chartData}
        options={CHART_OPTIONS}
      />
    );
  }
}

export default CurrencyChart;
