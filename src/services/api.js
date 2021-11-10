import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinlore-cryptocurrency.p.rapidapi.com/api/global/",
  "x-rapidapi-key": "884f46e107msh8e6d0969eccbb16p11a973jsn639998c9fab8",
};
const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com/api";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/global/"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
