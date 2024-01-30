import React, {
  ChangeEvent,
  JSX,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { targetCurrencies } from "@constants/currency";

import { IProps } from "./interfaces";
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
}: IProps): JSX.Element {
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

  const closeModal = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) onClose();
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
    <ModalWrapper onClick={closeModal}>
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
        <CloseBtn onClick={closeModal} type="button">
          CLOSE
        </CloseBtn>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default ModalCurrency;
