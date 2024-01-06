import React from "react";

import icon from "../../assets/Dollar-Icon.png";
import { CardContainer, Icon, TextContainer, Title, Value } from "./styled";

function Card(): JSX.Element {
  return (
    <CardContainer>
      <Icon src={icon} />
      <TextContainer>
        <Title>Commercial Dollar</Title>
        <Value>R$ 5,13</Value>
      </TextContainer>
    </CardContainer>
  );
}

export default Card;
