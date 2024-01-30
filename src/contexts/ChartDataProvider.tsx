import React, { createContext, PureComponent, ReactNode } from "react";

import ChartSubject from "./ChartObserver";

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

export interface ChartObserver {
  update(_: IChartData[]): void;
}

export interface ChartSubjectInterface {
  addObserver: (subscriber: ChartObserver) => void;
  removeObserver: (subscriber: ChartObserver) => void;
  notifyObservers: () => void;
  updateChart: (newData: IChartData[]) => void;
  getChartData: () => IChartData[];
}

export const ChartDataContext = createContext<
  ChartSubjectInterface | undefined
>(undefined);

interface IProps {
  children: ReactNode;
}

export class ChartDataProvider extends PureComponent<IProps> {
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
