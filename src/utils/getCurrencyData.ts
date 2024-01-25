import axios from "axios";

import { formatDateReadable } from "./formatDate";

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

const apiRequest = process.env.CURRENCY_API_REQUEST;
const apiKey = process.env.CURRENCY_API_KEY;
const URL_API = `${apiRequest}${apiKey}`;
const CURRENCIES_LOCAL_STORAGE = "currencyData";

export default async function getCurrencyData() {
  const cachedData = localStorage.getItem(CURRENCIES_LOCAL_STORAGE);

  if (cachedData) {
    const currencyData: currencyResponse = JSON.parse(cachedData);
    if (
      formatDateReadable(currencyData.meta.last_updated_at) ===
      formatDateReadable(Date.now())
    )
      return JSON.parse(cachedData);
  }

  try {
    const response = await axios.get(URL_API);
    const currencyData: currencyResponse = response.data;

    localStorage.setItem(
      CURRENCIES_LOCAL_STORAGE,
      JSON.stringify(currencyData),
    );

    return currencyData;
  } catch (error) {
    throw new Error(`Error occurred while fetching: ${error}`);
  }
}
