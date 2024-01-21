import {
  CurrencyNames,
  currencyNames,
  targetCurrencies,
  // @ts-expect-error @ as src
} from "@constants/currency";

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

export const getCurrenciesWithNames = (
  currenciesData: currencyResponse,
): currencyResponse => {
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
};
