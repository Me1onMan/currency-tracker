// import CurrencyAPI from '@everapi/currencyapi-js';
import axios from "axios";
import React, { useEffect, useState } from "react";

import { currencyNames, targetCurrencies } from "../../constants/currency";
import Card from "../Card/index";
import {
  CardsContainer,
  Indicator,
  Main,
  Quotes,
  SectionHeader,
  // Stocks,
  UpdateInfo,
} from "./styled";

type currencyResponse = {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      value: number;
    };
  };
};

type currencyDataWithNamesType = {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      name: string;
      value: number;
    };
  };
};

function Loading(): JSX.Element {
  // console.log("Loading...");
  return <h3>LOADING...</h3>;
}

function HomeContent(): JSX.Element {
  // const client = new CurrencyAPI('cur_live_A1EqusuOPUwszJMymwnAoeqG1muIzyr1X7CwNn4t');
  const [responseData, setResponseData] =
    useState<currencyDataWithNamesType | null>(null);

  // useEffect(() => {
  //   client.latest({
  //     base_currency: 'USD',
  //     currencies: targetCurrencies
  //   }).then((response: currencyResponse) => {
  //     // console.log("GET RESPONSE");
  //     setResponseData(response);
  //   });
  // },[]);

  function saveTargetCurrenciesData(
    currenciesData: currencyResponse,
  ): currencyDataWithNamesType {
    const currencyDataWithName: currencyDataWithNamesType = {
      meta: currenciesData.meta,
      data: {},
    };

    targetCurrencies.forEach((code) => {
      currencyDataWithName.data[code] = {
        code,
        name: currencyNames[code],
        value: currenciesData.data[code].value,
      };
    });
    return currencyDataWithName;
  }

  useEffect(() => {
    if (localStorage.getItem("currencyData")) {
      setResponseData(
        saveTargetCurrenciesData(
          JSON.parse(localStorage.getItem("currencyData")),
        ),
      );
      return;
    }
    axios
      .get(
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_A1EqusuOPUwszJMymwnAoeqG1muIzyr1X7CwNn4t",
      )
      .then((response: { data: currencyResponse }) => {
        console.log("SEND REQUEST...");
        localStorage.setItem("currencyData", JSON.stringify(response.data));
        const currencyDataWithName: currencyDataWithNamesType =
          saveTargetCurrenciesData(response.data);
        setResponseData(currencyDataWithName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Main>
      <UpdateInfo>
        <Indicator />
        {responseData ? (
          `Last updated ${responseData.meta.last_updated_at}`
        ) : (
          <Loading />
        )}
      </UpdateInfo>
      {/* <Stocks>
        <SectionHeader>Stocks</SectionHeader>
        <CardsContainer>
          <Card currencyCode="USD" currencies={responseData.data} key="USD"/>
          <Card currencyCode="EUR" currencies={responseData.data} key="EUR"/>
        </CardsContainer>
      </Stocks> */}
      <Quotes>
        <SectionHeader>Quotes</SectionHeader>
        <CardsContainer>
          {responseData &&
            targetCurrencies.map((el) => (
              <Card currencyCode={el} currencies={responseData.data} key={el} />
            ))}
        </CardsContainer>
      </Quotes>
    </Main>
  );
}

export default HomeContent;
