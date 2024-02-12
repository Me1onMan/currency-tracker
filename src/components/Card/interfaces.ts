interface ICurrencies {
  [currencyCode: string]: {
    code: string;
    name?: string;
    value: number;
    icon?: string;
  };
}

export interface IProps {
  currencyCode: string;
  currencies: ICurrencies;
}
