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
    localStorage.getItem("currencyData"),
  );
  const currenciesCodes = [];
  for (const currency in currenciesResponse.data) {
    currenciesCodes.push(currenciesResponse.data[currency].code);
  }
  return currenciesCodes;
};
