export interface IProps {}

export interface IChartData {
  rate_close: number;
  rate_high: number;
  rate_low: number;
  rate_open: number;
  time_close?: string;
  time_open?: string;
  time_period_end?: string;
  time_period_start: string;
}

export interface IState {
  responseData: IChartData[] | null;
  baseCurrency: string;
  targetCurrency: string;
  isShowModal: boolean;
  dateFrom: string;
  dateTo: string;
  isShowToast: boolean;
}
