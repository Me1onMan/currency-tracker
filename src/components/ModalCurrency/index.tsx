// @ts-expect-error @ as src
import { targetCurrencies } from "@constants/currency";
import React, { ChangeEvent, useEffect, useState } from "react";

import {
  CloseBtn,
  DropdownBtn,
  DropdownDiv,
  Header,
  Input,
  Item,
  ItemBtn,
  List,
  ModalContainer,
  ModalWrapper,
} from "./styled";

type allCurrenciesType = {
  [currencyCode: string]: {
    code: string;
    name?: string;
    value: number;
  };
};

interface ModalContentProps {
  onClose: () => void;
  targetCurrency: string;
  currencies: allCurrenciesType;
}

const convert = (
  fromValue: number,
  fromCurrencyValue: number,
  toCurrencyVlaue: number,
): number => {
  if (!fromValue) return 0;
  return (fromValue / fromCurrencyValue) * toCurrencyVlaue;
};

function ModalCurrency({
  onClose,
  targetCurrency,
  currencies,
}: ModalContentProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(targetCurrencies[0]);
  const [inputValue, setInputValue] = useState<number>(1);
  const [resultValue, setResultValue] = useState<number>(
    convert(
      inputValue,
      currencies[targetCurrency].value,
      currencies[selectedCurrency].value,
    ),
  );

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(Number.parseFloat(e.target.value));
  };

  const handleOpen = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const selectCurrency = (currencyCode: string): void => {
    setIsOpen(false);
    setSelectedCurrency(currencyCode);
  };

  useEffect(() => {
    setResultValue(
      convert(
        inputValue,
        currencies[targetCurrency].value,
        currencies[selectedCurrency].value,
      ),
    );
  }, [inputValue, selectedCurrency]);

  return (
    <ModalWrapper>
      <ModalContainer className="cy-modal">
        <Header>{`${targetCurrency} (${currencies[targetCurrency].name})`}</Header>
        <Input
          className="cy-input"
          type="number"
          min="0"
          value={inputValue || "0"}
          onChange={handleInput}
        />
        <DropdownDiv>
          <DropdownBtn
            className="cy-dropdown"
            onClick={handleOpen}
          >{`${selectedCurrency} (${currencies[selectedCurrency].name})`}</DropdownBtn>
          {isOpen && (
            <List>
              {targetCurrencies.map((code: string) => (
                <Item key={code}>
                  <ItemBtn
                    className="cy-dropdown-item"
                    onClick={() => selectCurrency(code)}
                  >{`${code} (${currencies[code].name})`}</ItemBtn>
                </Item>
              ))}
            </List>
          )}
        </DropdownDiv>
        <Input className="cy-output" value={resultValue} readOnly />
        <CloseBtn onClick={onClose} type="button">
          CLOSE
        </CloseBtn>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ModalCurrency;
