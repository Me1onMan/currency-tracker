import { CURRENCIES_DATA } from "@constants/localStorage";

interface ICurrency {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      value: number;
    };
  };
}

export const getCurrenciesCodes = () => {
  const currenciesResponse: ICurrency = JSON.parse(
    localStorage.getItem(CURRENCIES_DATA),
  );
  const currenciesCodes = [];
  for (const currency in currenciesResponse.data) {
    currenciesCodes.push(currenciesResponse.data[currency].code);
  }
  return currenciesCodes;
};
