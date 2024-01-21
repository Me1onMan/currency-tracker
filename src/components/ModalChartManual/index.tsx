// @ts-expect-error @ as src
import { formatDateReadable } from "@utils/formatDate";
import React, { ChangeEvent, useState } from "react";

import {
  Button,
  Input,
  InputGridContainer,
  ModalContainer,
  ModalWrapper,
  Select,
} from "./styled";

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
  onClose: () => void;
  chartData: IChartData[];
  onChangeValues: (newEl: IChartData) => void;
}

function ModalChartManual({ onClose, chartData, onChangeValues }: IProps) {
  const [selectedDate, setSelectedDate] = useState<IChartData>(chartData[0]);

  const changeDate = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(
      chartData.find((el) => el.time_period_start === e.target.value),
    );
  };

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate((prevSD) => ({
      ...prevSD,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <Select value={selectedDate.time_period_start} onChange={changeDate}>
          <option disabled>DATE</option>
          {chartData.map((el) => (
            <option value={el.time_period_start} key={el.time_period_start}>
              {formatDateReadable(el.time_period_start)}
            </option>
          ))}
        </Select>
        <InputGridContainer>
          <label htmlFor="rate_low">
            Low
            <Input
              id="rate_low"
              value={selectedDate.rate_low}
              onChange={changeValue}
              placeholder="Low"
            />
          </label>
          <label htmlFor="rate_high">
            High
            <Input
              id="rate_high"
              value={selectedDate.rate_high}
              onChange={changeValue}
              placeholder="High"
            />
          </label>
          <label htmlFor="rate_open">
            Open
            <Input
              id="rate_open"
              value={selectedDate.rate_open}
              onChange={changeValue}
              placeholder="Open"
            />
          </label>
          <label htmlFor="rate_close">
            Close
            <Input
              id="rate_close"
              value={selectedDate.rate_close}
              onChange={changeValue}
              placeholder="Close"
            />
          </label>
        </InputGridContainer>
        <Button onClick={() => onChangeValues(selectedDate)} type="button">
          APPLY
        </Button>
        <Button onClick={onClose} type="button">
          RETURN
        </Button>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ModalChartManual;
