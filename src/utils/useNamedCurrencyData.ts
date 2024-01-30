import { useEffect, useState } from "react";

import getCurrenciesWithNames from "./getCurrenciesWithNames";
import getCurrencyData from "./getCurrencyData";

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

export default function useNamedCurrencyData() {
  const [namedCurrencyData, setNamedCurrencyData] =
    useState<currencyResponse | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const responseData = await getCurrencyData();
        const currencyWithNames = getCurrenciesWithNames(responseData);
        setNamedCurrencyData(currencyWithNames);
      } catch (error) {
        throw new Error(`Error while loading currency data: ${error}`);
      }
    };

    loadData();
  }, []);

  return namedCurrencyData;
}
