import React, { ChangeEvent, JSX, MouseEvent, useState } from "react";
import { formatDate } from "@utils/formatDate";

import { IChartData, IProps } from "./interfaces";
import {
  Button,
  ButtonContainer,
  Input,
  InputGridContainer,
  ModalContainer,
  ModalWrapper,
  Select,
} from "./styled";

function ModalChartManual({
  onClose,
  chartData,
  onChangeValues,
}: IProps): JSX.Element {
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

  const closeModal = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalWrapper onClick={closeModal}>
      <ModalContainer>
        <Select value={selectedDate.time_period_start} onChange={changeDate}>
          <option disabled>DATE</option>
          {chartData.map((el) => (
            <option value={el.time_period_start} key={el.time_period_start}>
              {formatDate(el.time_period_start, "dd.MM.yyyy")}
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
        <ButtonContainer>
          <Button onClick={() => onChangeValues(selectedDate)} type="button">
            APPLY
          </Button>
          <Button onClick={closeModal} type="button">
            RETURN
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ModalChartManual;
