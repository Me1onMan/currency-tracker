import React, {
  Children,
  createContext,
  PureComponent,
  ReactNode,
} from "react";

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

type CurrencyHistoryData = IChartData[];

export interface ChartObserver {
  update: (newData: CurrencyHistoryData) => void;
}

export interface ChartSubjectInterface {
  addObserver: (subscriber: ChartObserver) => void;
  removeObserver: (subscriber: ChartObserver) => void;
  notifyObservers: () => void;
  updateChart: (newData: CurrencyHistoryData) => void;
  getChartData: () => CurrencyHistoryData;
}

interface ChartDataContextProps {
  children: ReactNode;
}

export const ChartDataContext = createContext<
  ChartSubjectInterface | undefined
>(undefined);

export class ChartSubject {
  private chartSubscribers: ChartObserver[] = [];

  private chartData: CurrencyHistoryData = [];

  addObserver(subscriber: ChartObserver) {
    console.log("addObserver", subscriber);

    this.chartSubscribers.push(subscriber);
  }

  removeObserver(subscriber: ChartObserver) {
    console.log("removeObserver");

    this.chartSubscribers = this.chartSubscribers.filter(
      (subjects) => subjects !== subscriber,
    );
  }

  notifyObservers() {
    console.log("notifyObservers");
    this.chartSubscribers.forEach((subscriber) =>
      subscriber.update(this.chartData),
    );
  }

  updateChart(newChartData: CurrencyHistoryData) {
    console.log("updateChart");
    console.log(newChartData);

    this.chartData = newChartData;
    this.notifyObservers();
  }

  getChartData() {
    console.log("getChartData");
    return this.chartData;
  }
}

class ChartDataProvider extends PureComponent<ChartDataContextProps> {
  chartSubject = new ChartSubject();

  render() {
    const { children } = this.props;
    return (
      <ChartDataContext.Provider value={this.chartSubject}>
        {children}
      </ChartDataContext.Provider>
    );
  }
}

export default ChartDataProvider;
