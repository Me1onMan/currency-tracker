import { ChartObserver } from "./ChartDataProvider";

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

class ChartSubject {
  private chartSubscribers: ChartObserver[] = [];

  private chartData: IChartData[] = [];

  addObserver(subscriber: ChartObserver) {
    this.chartSubscribers.push(subscriber);
  }

  removeObserver(subscriber: ChartObserver) {
    this.chartSubscribers = this.chartSubscribers.filter(
      (subjects) => subjects !== subscriber,
    );
  }

  notifyObservers() {
    this.chartSubscribers.forEach((subscriber) =>
      subscriber.update(this.chartData),
    );
  }

  updateChart(newChartData: IChartData[]) {
    this.chartData = newChartData;
    this.notifyObservers();
  }

  getChartData() {
    return this.chartData;
  }
}

export default ChartSubject;
