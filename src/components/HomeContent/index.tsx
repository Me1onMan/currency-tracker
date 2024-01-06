import React from "react";

import Card from "../Card/index";
import {
  CardsContainer,
  Indicator,
  Main,
  Quotes,
  SectionHeader,
  Stocks,
  UpdateInfo,
} from "./styled";

function HomeContent(): JSX.Element {
  return (
    <Main>
      <UpdateInfo>
        <Indicator />
        Last updated at 11:59pm
      </UpdateInfo>
      <Stocks>
        <SectionHeader>Stocks</SectionHeader>
        <CardsContainer>
          <Card />
          <Card />
        </CardsContainer>
      </Stocks>
      <Quotes>
        <SectionHeader>Quotes</SectionHeader>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </Quotes>
    </Main>
  );
}

export default HomeContent;
