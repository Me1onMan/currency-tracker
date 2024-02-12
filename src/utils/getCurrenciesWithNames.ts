import { currencyNames, targetCurrencies } from "@constants/currency";
import currencyIconPaths from "@constants/iconPaths";

interface ICurrencies {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      name?: string;
      value: number;
      icon?: string;
    };
  };
}

const getCurrenciesWithNames = (currenciesData: ICurrencies): ICurrencies => {
  const currencyDataWithName: ICurrencies = {
    meta: currenciesData.meta,
    data: {},
  };

  targetCurrencies.forEach((code: string) => {
    currencyDataWithName.data[code] = {
      code,
      name: currencyNames[code],
      value: currenciesData.data[code].value,
      icon: currencyIconPaths[code],
    };
  });
  return currencyDataWithName;
};

export default getCurrenciesWithNames;
