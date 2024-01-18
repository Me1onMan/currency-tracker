export const targetCurrencies = [
  "USD",
  "ARS",
  "CAD",
  "JPY",
  "AUD",
  "CNY",
  "EUR",
  "BTC",
  "TRY",
  "BYN",
];

export type CurrencyNames = {
  [code: string]: string;
};

export const currencyNames: CurrencyNames = {
  USD: "Commercial Dollar",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  BTC: "Bitcoin",
  BYN: "Belarusian Rouble",
  CAD: "Canadian Dollar",
  CNY: "Chinese Yuan",
  EUR: "Euro",
  TRY: "Turkish Lira",
  JPY: "Japanese Yen",
};
