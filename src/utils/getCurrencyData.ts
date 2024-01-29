import axios from "axios";
import { CURRENCIES_DATA } from "@constants/localStorage";

import { formatDate } from "./formatDate";

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

export default async function getCurrencyData() {
  const cachedData = localStorage.getItem(CURRENCIES_DATA);

  if (cachedData) {
    const currencyData: currencyResponse = JSON.parse(cachedData);
    if (
      formatDate(currencyData.meta.last_updated_at, "dd.MM.yyyy") ===
      formatDate(Date.now(), "dd.MM.yyyy")
    )
      return JSON.parse(cachedData);
  }

  try {
    const response = await axios.get(URL_API);
    const currencyData: currencyResponse = response.data;

    localStorage.setItem(CURRENCIES_DATA, JSON.stringify(currencyData));

    return currencyData;
  } catch (error) {
    throw new Error(`Error occurred while fetching: ${error}`);
  }
}
