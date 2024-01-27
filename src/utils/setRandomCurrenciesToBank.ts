import { banks, IBank } from "@constants/banks";
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

const getCurrenciesCodes = () => {
  const currenciesResponse: ICurrency = JSON.parse(
    localStorage.getItem(CURRENCIES_DATA),
  );
  const currenciesCodes = [];
  for (const currency in currenciesResponse.data) {
    currenciesCodes.push(currenciesResponse.data[currency].code);
  }
  return currenciesCodes;
};

export const setRandomCurrenciesToBank = (currenciesCount: number): IBank[] => {
  const currenciesResponse = getCurrenciesCodes();

  return banks.map((bank: IBank) => {
    for (let i = 0; i < currenciesCount; i++) {
      const currencyCode =
        currenciesResponse[
          Math.floor(Math.random() * (currenciesResponse.length - 1))
        ];
      if (!bank.currencies.includes(currencyCode)) {
        bank.currencies.push(currencyCode);
      }
    }
    return bank;
  });
};
