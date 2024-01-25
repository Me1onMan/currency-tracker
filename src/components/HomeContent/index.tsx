import React, { JSX } from "react";
import Card from "@components/Card/index";
import UpdateIndicator from "@components/UpdateIndicator/index";
import { targetCurrencies } from "@constants/currency";
import { formatDateReadable } from "@utils/formatDate";
import useNamedCurrencyData from "@utils/useNamedCurrencyData";

import { CardsContainer, Main, Quotes, SectionHeader } from "./styled";

function HomeContent(): JSX.Element {
  const responseData = useNamedCurrencyData();

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
