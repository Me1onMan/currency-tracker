import axios from "axios";
// import { useEffect, useState } from "react";
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

// api key should be in another file (.env)
const URL_API =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_A1EqusuOPUwszJMymwnAoeqG1muIzyr1X7CwNn4t";
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

// export function useCurrencyData() {
//     const [currencyData, setCurrencyData] = useState<currencyResponse | undefined>();

//     useEffect(() => {
//         const loadData = async () => {
//             await axios
//             .get(URL_API)
//             .then((response: { data: currencyResponse }) => {
//               localStorage.setItem(CURRENCIES_LOCAL_STORAGE, JSON.stringify(response.data));
//               setCurrencyData(response.data);
//             })
//             .catch((error) => {
//                 throw new Error(`Error load data from currencyapi.com: ${error}`);
//             });
//         }

//         const responseData: currencyResponse = JSON.parse(localStorage.getItem(CURRENCIES_LOCAL_STORAGE));

//         if (!responseData) {
//             loadData();
//         } else if (
//             formatDateReadable(responseData.meta.last_updated_at) !==
//             formatDateReadable(Date.now())
//             ) {
//             loadData();
//         } else {
//             setCurrencyData(responseData);
//         }

//     }, [])

//     return currencyData;
// }
