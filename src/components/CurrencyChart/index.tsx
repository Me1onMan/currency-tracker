import React from "react";
import { Chart } from "react-google-charts";

import { CHART_OPTIONS } from "./config";
import { getChartDataFromResponse } from "./getChartDataFromResponse";
import { IProps, IState } from "./interfaces";

class CurrencyChart extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      chartData: null,
    };
  }

  static getDerivedStateFromProps({ responseData }: IProps) {
    const nextChartData = getChartDataFromResponse(responseData);

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
