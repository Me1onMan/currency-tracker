import axios from "axios";
import Card from "components/Card/index";
import UpdateIndicator from "components/UpdateIndicator/index";
import React, { useEffect, useState } from "react";

// @ts-expect-error @ as src
import {
  CurrencyNames,
  currencyNames,
  targetCurrencies,
} from "@/constants/currency";

import { CardsContainer, Main, Quotes, SectionHeader } from "./styled";

type currencyResponse = {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      name?: string;
      value: number;
    };
  };
};

const formatDate = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
};

function HomeContent(): JSX.Element {
  const [responseData, setResponseData] = useState<currencyResponse | null>(
    null,
  );

  function saveTargetCurrenciesData(
    currenciesData: currencyResponse,
  ): currencyResponse {
    const currencyDataWithName: currencyResponse = {
      meta: currenciesData.meta,
      data: {},
    };

    targetCurrencies.forEach((code: CurrencyNames) => {
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
      const data: currencyResponse = JSON.parse(
        localStorage.getItem("currencyData"),
      );

      const currentDate = new Date().getTime();
      const updatedAt = new Date(data.meta.last_updated_at).getTime();

      if (formatDate(updatedAt) === formatDate(currentDate)) {
        setResponseData(
          saveTargetCurrenciesData(
            JSON.parse(localStorage.getItem("currencyData")),
          ),
        );
        return;
      }
    }
    axios
      .get(
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_A1EqusuOPUwszJMymwnAoeqG1muIzyr1X7CwNn4t",
      )
      .then((response: { data: currencyResponse }) => {
        localStorage.setItem("currencyData", JSON.stringify(response.data));
        const currencyDataWithName: currencyResponse = saveTargetCurrenciesData(
          response.data,
        );
        setResponseData(currencyDataWithName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Main>
      {responseData && (
        <UpdateIndicator
          lastUpdatedAt={formatDate(
            new Date(responseData.meta.last_updated_at).getTime(),
          )}
        />
      )}
      <Quotes>
        <SectionHeader>Quotes</SectionHeader>
        <CardsContainer>
          {responseData &&
            targetCurrencies.map((el: string) => (
              <Card currencyCode={el} currencies={responseData.data} key={el} />
            ))}
        </CardsContainer>
      </Quotes>
    </Main>
  );
}

export default HomeContent;
