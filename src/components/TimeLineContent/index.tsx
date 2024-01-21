// @ts-expect-error @ as src
import CurrencyChart from "@components/CurrencyChart/index";
// @ts-expect-error @ as src
import ModalChartManual from "@components/ModalChartManual/index";
// @ts-expect-error @ as src
import ToastChart from "@components/ToastChart";
// @ts-expect-error @ as src
import { targetCurrencies } from "@constants/currency";
// @ts-expect-error @ as src
import {
  ChartDataContext,
  ChartObserver,
  ChartSubjectInterface,
} from "@contexts/ChartObserver";
// @ts-expect-error @ as src
import { formatDateForRequest } from "@utils/formatDate";
import axios from "axios";
import React, { ChangeEvent } from "react";
import { createPortal } from "react-dom";

import {
  Container,
  DateInput,
  Option,
  OptionBtn,
  OptionsContainer,
  Select,
} from "./styled";

const CoinAPIKey = "339D80B2-D84C-493C-AA2D-2B69EA31703B";

interface IProps {}

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

interface IState {
  responseData: IChartData[] | null;
  baseCurrency: string;
  targetCurrency: string;
  isShowModal: boolean;
  dateFrom: string;
  dateTo: string;
  isShowToast: boolean;
}

class TimeLine extends React.Component<IProps, IState> {
  static contextType? = ChartDataContext;

  observer!: ChartObserver;

  context!: ChartSubjectInterface;

  constructor(props: IProps) {
    super(props);
    this.state = {
      responseData: null,
      baseCurrency: "BTC",
      targetCurrency: "USD",
      isShowModal: false,
      dateFrom: "",
      dateTo: "",
      isShowToast: false,
    };
    this.changeDateFrom = this.changeDateFrom.bind(this);
    this.changeDateTo = this.changeDateTo.bind(this);
    this.getDataForChart = this.getDataForChart.bind(this);
  }

  componentDidMount() {
    this.getData();

    this.observer = {
      update: (newData: IChartData[]) => {
        console.log("observer.update");

        this.setState({ responseData: newData }, () => {
          console.log("Length: ", newData.length);
          if (newData.length === 30) {
            this.setState({ isShowToast: true });
            setTimeout(() => {
              this.setState({ isShowToast: false });
            }, 2000);
          }
        });
      },
    };
    this.context.addObserver(this.observer);
    const newData = this.context.getChartData();
    this.setState({ responseData: newData });
  }

  componentWillUnmount(): void {
    this.context.removeObserver(this.observer);
  }

  getData() {
    const { baseCurrency, targetCurrency, dateFrom, dateTo } = this.state;
    const dateFromDefault = formatDateForRequest(Date.now() - 2678400000);
    const today = formatDateForRequest(Date.now());

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://rest.coinapi.io/v1/exchangerate/${baseCurrency}/${targetCurrency}/history?period_id=1DAY&time_start=${
        dateFrom || dateFromDefault
      }&time_end=${dateTo || today}`,
      headers: {
        Accept: "text/json",
        "X-CoinAPI-Key": CoinAPIKey,
      },
    };

    axios(config)
      .then((response) => {
        console.log("CHART SENT REQUEST...");
        localStorage.setItem("chartData", JSON.stringify(response.data));
        this.setState({ responseData: response.data });
        this.context.updateChart(response.data);
        const newData = this.context.getChartData();
        this.setState({ responseData: newData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDataForChart() {
    this.getData();
  }

  openModal() {
    this.setState({ isShowModal: true });
  }

  closeModal() {
    this.setState({ isShowModal: false });
  }

  changeDateFrom(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ dateFrom: e.target.value });
  }

  changeDateTo(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ dateTo: e.target.value });
  }

  changeBaseCurrency(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({ baseCurrency: e.target.value });
  }

  changeTargetCurrency(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({ targetCurrency: e.target.value });
  }

  changeChartValue(newEl: IChartData) {
    this.setState((prevState) => ({
      responseData: prevState.responseData.map((prevEl: IChartData) =>
        prevEl.time_period_start === newEl.time_period_start ? newEl : prevEl,
      ),
    }));
    this.closeModal();
  }

  render() {
    const modalContainer = document.getElementById("modal");

    const {
      baseCurrency,
      isShowModal,
      isShowToast,
      responseData,
      targetCurrency,
      dateFrom,
      dateTo,
    } = this.state;

    return (
      <>
        <Container id="cy-timeline">
          <OptionsContainer>
            <label>
              From
              <Select
                onChange={(e) => this.changeBaseCurrency(e)}
                value={baseCurrency}
              >
                <Option disabled>Base currency</Option>
                {targetCurrencies.map((code: string) => (
                  <Option value={code} key={code}>
                    {code}
                  </Option>
                ))}
              </Select>
            </label>
            <label>
              To
              <Select
                onChange={(e) => this.changeTargetCurrency(e)}
                value={targetCurrency}
              >
                <Option disabled>Target currency</Option>
                {targetCurrencies.map((code: string) => (
                  <Option value={code} key={code}>
                    {code}
                  </Option>
                ))}
              </Select>
            </label>
            <label htmlFor="dateFrom">
              From
              <DateInput
                id="dateFrom"
                type="date"
                onChange={this.changeDateFrom}
                value={dateFrom}
              />
            </label>
            <label htmlFor="dateTo">
              To
              <DateInput
                id="dateTo"
                type="date"
                onChange={this.changeDateTo}
                value={dateTo}
              />
            </label>
            <OptionBtn onClick={() => this.openModal()}>Manual</OptionBtn>
            <OptionBtn onClick={this.getDataForChart}>Go</OptionBtn>
          </OptionsContainer>
          {responseData && <CurrencyChart responseData={responseData} />}
        </Container>
        {isShowModal &&
          createPortal(
            <ModalChartManual
              onClose={() => this.closeModal()}
              chartData={responseData}
              onChangeValues={(newEl: IChartData) =>
                this.changeChartValue(newEl)
              }
            />,
            modalContainer,
          )}
        {isShowToast && createPortal(<ToastChart />, modalContainer)}
      </>
    );
  }
}

export default TimeLine;
