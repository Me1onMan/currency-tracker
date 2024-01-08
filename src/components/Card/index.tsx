import React, { useState } from "react";
import { createPortal } from "react-dom";

import icon from "../../assets/Dollar-Icon.png";
import ModalCurrency from "../ModalCurrency/index";
import { CardContainer, Icon, TextContainer, Title, Value } from "./styled";

type allCurrenciesType = {
  [currencyCode: string]: {
    code: string;
    name: string;
    value: number;
  };
};

type CardContentProps = {
  currencyCode: string;
  currencies: allCurrenciesType;
};

function Card({ currencyCode, currencies }: CardContentProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const modalContainer = document.getElementById("modal");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardContainer onClick={openModal}>
        <Icon src={icon} />
        <TextContainer>
          <Title>{currencies[currencyCode].name}</Title>
          <Value>R$ {currencies[currencyCode].value}</Value>
        </TextContainer>
      </CardContainer>
      {showModal &&
        createPortal(
          <ModalCurrency
            onClose={closeModal}
            targetCurrency={currencyCode}
            currencies={currencies}
          />,
          modalContainer,
        )}
    </>
  );
}

export default Card;
