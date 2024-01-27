import React, { ChangeEvent } from "react";
import { createPortal } from "react-dom";
import CurrencyChart from "@components/CurrencyChart/index";
import ModalChartManual from "@components/ModalChartManual/index";
import ToastChart from "@components/ToastChart";
import { targetCurrencies } from "@constants/currency";
import { CHART_DATA } from "@constants/localStorage";
import {
  ChartDataContext,
  ChartObserver,
  ChartSubjectInterface,
} from "@contexts/ChartDataProvider";
import { formatDateForRequest } from "@utils/formatDate";
import axios from "axios";

import { checkMaxDate } from "./checkMaxDate";
import { IChartData, IProps, IState } from "./interfaces";
import SelectComponent from "./Select";
import {
  Container,
  DateInput,
  // Option,
  OptionBtn,
  OptionsContainer,
  // Select,
} from "./styled";

class TimeLine extends React.Component<IProps, IState> {
  observer!: ChartObserver;

  context: ChartSubjectInterface;

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
    this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
    this.changeTargetCurrency = this.changeTargetCurrency.bind(this);
    this.changeDateFrom = this.changeDateFrom.bind(this);
    this.changeDateTo = this.changeDateTo.bind(this);
    this.getDataForChart = this.getDataForChart.bind(this);
  }

  componentDidMount() {
    const { context } = this;
    let { observer } = this;
    this.getData();

    observer = {
      update: (newData: IChartData[]) => {
        this.setState({ responseData: newData }, () => {
          if (newData.length === 30) {
            this.setState({ isShowToast: true });
            setTimeout(() => {
              this.setState({ isShowToast: false });
            }, 2000);
          }
        });
      },
    };
    context.addObserver(observer);
    const newData = context.getChartData();
    this.setState({ responseData: newData });
  }

  componentWillUnmount(): void {
    const { context, observer } = this;
    context.removeObserver(observer);
  }

  getData() {
    const { context } = this;
    const { baseCurrency, targetCurrency, dateFrom, dateTo } = this.state;
    const dateFromDefault = formatDateForRequest(Date.now() - 2592000000); // 30 days ago
    const today = formatDateForRequest(Date.now());
    this.setState({
      dateFrom: dateFrom === "" ? dateFromDefault : checkMaxDate(dateFrom),
      dateTo: dateTo === "" ? today : checkMaxDate(dateTo),
    });

    const apiRequest = process.env.COIN_API_REQUEST;
    const apiKey = process.env.COIN_API_KEY;

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiRequest}/${baseCurrency}/${targetCurrency}/history?period_id=1DAY&time_start=${
        dateFrom || dateFromDefault
      }&time_end=${dateTo || today}`,
      headers: {
        Accept: "text/json",
        "X-CoinAPI-Key": apiKey,
      },
    };

    axios(config)
      .then((response) => {
        localStorage.setItem(CHART_DATA, JSON.stringify(response.data));
        this.setState({ responseData: response.data });
        context.updateChart(response.data);
        const newData = context.getChartData();
        this.setState({ responseData: newData });
      })
      .catch((error) => {
        throw new Error(`Error while loading chart data: ${error}`);
      });
  }

  getDataForChart() {
    const { dateFrom, dateTo } = this.state;
    this.setState({
      dateFrom: checkMaxDate(dateFrom),
      dateTo: checkMaxDate(dateTo),
    });
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

  changeBaseCurrency(value: string) {
    this.setState({ baseCurrency: value });
  }

  changeTargetCurrency(value: string) {
    this.setState({ targetCurrency: value });
  }

  // changeBaseCurrency(e: ChangeEvent<HTMLSelectElement>) {
  //   this.setState({ baseCurrency: e.target.value });
  // }

  // changeTargetCurrency(e: ChangeEvent<HTMLSelectElement>) {
  //   this.setState({ targetCurrency: e.target.value });
  // }

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
      targetCurrency,
      dateFrom,
      dateTo,
      responseData,
      isShowModal,
      isShowToast,
    } = this.state;

    return (
      <>
        <Container id="cy-timeline">
          <OptionsContainer>
            <SelectComponent
              labelName="From"
              optionName="Base currency"
              targetCurrencies={targetCurrencies}
              selectedCurrency={baseCurrency}
              onChange={(el: string) => this.changeBaseCurrency(el)}
            />
            <SelectComponent
              labelName="To"
              optionName="Target currency"
              targetCurrencies={targetCurrencies}
              selectedCurrency={targetCurrency}
              onChange={this.changeTargetCurrency}
            />
            {/* <label>
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
            </label> */}
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
                max={formatDateForRequest(Date.now())}
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

TimeLine.contextType = ChartDataContext;

export default TimeLine;
