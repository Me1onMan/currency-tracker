// @ts-expect-error @ as src
import { formatDateReadable } from "@utils/formatDate";
import React from "react";
import { Chart } from "react-google-charts";

const options = {
  legend: "none",
  color: "#fff",
  bar: { groupWidth: "50%" },
  backgroundColor: "none",
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#f03646" },
    risingColor: { strokeWidth: 0, fill: "#00c789" },
  },
  chartArea: {
    backgroundColor: "none",
  },
};

interface IChartData {
  rate_close: number;
  rate_high: number;
  rate_low: number;
  rate_open: number;
  time_close?: string;
  time_open?: string;
  time_period_end?: string;
  time_period_start: string;
}

interface IProps {
  responseData: IChartData[];
}

interface IState {
  chartData: IChartData[] | null;
}

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
        options={options}
      />
    );
  }
}

export default CurrencyChart;
