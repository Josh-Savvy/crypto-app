import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coinsApiHeaders = {
  "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com",
  "x-rapidapi-key": "884f46e107msh8e6d0969eccbb16p11a973jsn639998c9fab8",
};
const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com/api";

const createRequest = (url) => ({
  url,
  headers: coinsApiHeaders,
  params: { start: "0", limit: "100" },
});

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest(`/tickers/`),
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
