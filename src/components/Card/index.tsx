import ModalCurrency from "components/ModalCurrency/index";
import React, { useState } from "react";
import { createPortal } from "react-dom";

// @ts-expect-error @ as src
import useImageLoader from "@/utils/useImageLoader";

import { CardContainer, Icon, TextContainer, Title, Value } from "./styled";

type allCurrenciesType = {
  [currencyCode: string]: {
    code: string;
    name?: string;
    value: number;
  };
};

type CardContentProps = {
  currencyCode: string;
  currencies: allCurrenciesType;
};

const modalContainer = document.getElementById("modal");

function Card({ currencyCode, currencies }: CardContentProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const iconFileName = `${currencies[currencyCode].name.replace(
    " ",
    "-",
  )}-Icon.png`;
  const icon = useImageLoader(iconFileName);

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
