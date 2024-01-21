// @ts-expect-error @ as src
import Card from "@components/Card/index";
// @ts-expect-error @ as src
import UpdateIndicator from "@components/UpdateIndicator/index";
// @ts-expect-error @ as src
import { targetCurrencies } from "@constants/currency";
// @ts-expect-error @ as src
import { formatDateReadable } from "@utils/formatDate";
// @ts-expect-error @ as src
import { getCurrenciesWithNames } from "@utils/getCurrenciesWithNames";
import axios from "axios";
import React, { useEffect, useState } from "react";

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

function HomeContent(): JSX.Element {
  const [responseData, setResponseData] = useState<currencyResponse | null>(
    null,
  );

  useEffect(() => {
    if (localStorage.getItem("currencyData")) {
      const data: currencyResponse = JSON.parse(
        localStorage.getItem("currencyData"),
      );

      const currentDate = new Date().getTime();
      const updatedAt = new Date(data.meta.last_updated_at).getTime();

      if (formatDateReadable(updatedAt) === formatDateReadable(currentDate)) {
        setResponseData(
          getCurrenciesWithNames(
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
        const currencyDataWithName: currencyResponse = getCurrenciesWithNames(
          response.data,
        );
        setResponseData(currencyDataWithName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Main id="cy-home">
      {responseData && (
        <UpdateIndicator
          lastUpdatedAt={formatDateReadable(
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
