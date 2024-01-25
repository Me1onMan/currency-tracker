interface ICurrencies {
  [currencyCode: string]: {
    code: string;
    name?: string;
    value: number;
  };
}

export interface IProps {
  currencyCode: string;
  currencies: ICurrencies;
}
