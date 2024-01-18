import axios from "axios";
import CurrencyChart from "components/CurrencyChart/index";
import ModalChartManual from "components/ModalChartManual/index";
import React, { ChangeEvent } from "react";
import { createPortal } from "react-dom";

import { targetCurrencies } from "../../constants/currency";
import {
  Container,
  DateInput,
  Option,
  OptionBtn,
  OptionsContainer,
  Select,
} from "./styled";
import { ChartDataContext } from "../../contexts/ChartObserver";
import ToastChart from "components/ToastChart";

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

const formatDate = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

class TimeLine extends React.Component<IProps, IState> {
  observer = null;

  static contextType? = ChartDataContext;

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
    console.log("componentDidMount");

    this.getData();

    this.observer = {
      update: (newData) => {
        console.log("observer.update");

        this.setState({ responseData: newData }, () => {
          console.log("Length: ", newData.length);
          if (newData.length >= 30) {
            this.setState({ isShowToast: true });
          }
        });
      },
    };
    this.context.addObserver(this.observer.update);
    const newData = this.context.getChartData();
    this.setState({ responseData: newData });
  }

  componentWillUnmount(): void {
    this.context.removeObserver(this.observer);
  }

  getData() {
    const { baseCurrency, targetCurrency, dateFrom, dateTo } = this.state;
    const dateFromDefault = formatDate(Date.now() - 2678400000);
    const today = formatDate(Date.now());

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
        console.log(response.data);
        localStorage.setItem("chartData", JSON.stringify(response.data));
        // this.setState({ responseData: response.data });
        this.context.updateChart(response.data);
        const newData = this.context.getChartData();
        this.setState({ responseData: newData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // getRandomValues() {
  //   const random = (min: number, max: number) => Math.random() * (max - min) + min;
  //   const result = [];
  //   const dateNow = formatDate(Date.now() - 2505600000);

  //   for (let i = 0; i < 30; i += 1) {
  //     const low = random(0, 100);
  //     const high = random(low + 1, 100);
  //     const open = random(low, high);
  //     const close = random(low, high);
  //     result.push({
  //       rate_low: low,
  //       rate_high: high,
  //       rate_open: open,
  //       rate_close: close,
  //       time_period_start: dateNow,
  //     });
  //   }

  //   this.setState({ responseData: result });
  // }

  openModal() {
    this.setState({ isShowModal: true });
  }

  getDataForChart() {
    this.getData();
  }

  closeModal() {
    this.setState({ isShowModal: false });
  }

  changeDateFrom(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    this.setState({ dateFrom: e.target.value });
  }

  changeDateTo(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
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
        <Container>
          <OptionsContainer>
            <label>
              From
              <Select
                onChange={(e) => this.changeBaseCurrency(e)}
                value={baseCurrency}
              >
                <Option disabled>Base currency</Option>
                {targetCurrencies.map((code) => (
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
                {targetCurrencies.map((code) => (
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
            {/* <OptionBtn onClick={() => this.getRandomValues()}>Random</OptionBtn> */}
          </OptionsContainer>
          {responseData && <CurrencyChart responseData={responseData} />}
        </Container>
        {isShowModal &&
          createPortal(
            <ModalChartManual
              onClose={() => this.closeModal()}
              chartData={responseData}
              onChangeValues={(newEl) => this.changeChartValue(newEl)}
            />,
            modalContainer,
          )}
        {isShowToast && <ToastChart />}
      </>
    );
  }
}

export default TimeLine;
