interface ICurrencies {
  [currencyCode: string]: {
    code: string;
    name?: string;
    value: number;
  };
}

export interface IProps {
  onClose: () => void;
  targetCurrency: string;
  currencies: ICurrencies;
}
