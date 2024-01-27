import React, { JSX, useState } from "react";
import { createPortal } from "react-dom";
import ModalCurrency from "@components/ModalCurrency/index";
import { getIconFileName } from "@utils/getIconFileName";
import useImageLoader from "@utils/useImageLoader";

import { IProps } from "./interfaces";
import { CardContainer, Icon, TextContainer, Title, Value } from "./styled";

const modalContainer = document.getElementById("modal");

function Card({ currencyCode, currencies }: IProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const iconFileName = getIconFileName(currencies[currencyCode].name);
  const icon = useImageLoader(iconFileName);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardContainer className="cy-card" onClick={openModal}>
        <Icon
          src={icon}
          alt={currencyCode}
          title={currencies[currencyCode].name}
        />
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
