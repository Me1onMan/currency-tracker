import React, { createContext, PureComponent, ReactNode } from "react";

type HistoryEntry = [
  string,
  string | number,
  string | number,
  string | number,
  string | number,
];

type CurrencyHistoryData = [...HistoryEntry][];

interface ChartObserver {
  update: (newData: CurrencyHistoryData) => void;
}

interface ChartSubjectInterface {
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

class ChartDataProvider extends PureComponent<ChartDataContextProps> {
  chartSubject = new ChartSubject();

  render() {
    return (
      <ChartDataContext.Provider value={this.chartSubject}>
        {this.props.children}
      </ChartDataContext.Provider>
    );
  }
}

export default ChartDataProvider;

export class ChartSubject {
  private chartSubscribers = [];
  private chartData = [];

  addObserver(subscriber) {
    console.log("addObserver", subscriber);

    this.chartSubscribers.push(subscriber);
  }

  removeObserver(subscriber) {
    console.log("removeObserver");

    this.chartSubscribers = this.chartSubscribers.filter(
      (subjects) => subjects !== subscriber,
    );
  }

  updateChart(newChartData) {
    console.log("updateChart");
    console.log(newChartData);

    this.chartData = newChartData;
  }

  notifyObservers() {
    console.log("notifyObservers");
    this.chartSubscribers.forEach((subscriber) =>
      subscriber.update(this.chartData),
    );
  }

  getChartData() {
    console.log("getChartData");
    return this.chartData;
  }
}
