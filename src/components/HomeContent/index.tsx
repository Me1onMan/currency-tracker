// @ts-expect-error @ as src
import Card from "@components/Card/index";
// @ts-expect-error @ as src
import UpdateIndicator from "@components/UpdateIndicator/index";
// @ts-expect-error @ as src
import { targetCurrencies } from "@constants/currency";
// @ts-expect-error @ as src
import { formatDateReadable } from "@utils/formatDate";
import React from "react";

import { CardsContainer, Main, Quotes, SectionHeader } from "./styled";
// @ts-expect-error @ as src
import useNamedCurrencyData from "@utils/useNamedCurrencyData";

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
