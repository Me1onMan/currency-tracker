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

  const inputs = [
    {
      id: "rate_low",
      label: "Low",
      value: selectedDate.rate_low,
    },
    {
      id: "rate_high",
      label: "High",
      value: selectedDate.rate_high,
    },
    {
      id: "rate_open",
      label: "Open",
      value: selectedDate.rate_open,
    },
    {
      id: "rate_close",
      label: "Close",
      value: selectedDate.rate_close,
    },
  ];

  const changeDate = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(
      chartData.find((el) => el.time_period_start === e.target.value),
    );
  };

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate((prevSD) => ({
      ...prevSD,
      [e.target.id]: +e.target.value,
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
          {inputs.map((el) => (
            <label htmlFor={el.id} key={el.id}>
              {el.label}
              <Input
                id={el.id}
                value={el.value}
                onChange={changeValue}
                placeholder={el.label}
              />
            </label>
          ))}
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
