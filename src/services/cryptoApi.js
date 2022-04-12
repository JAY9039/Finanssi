import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeader = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3d409e9c37mshdb2e0ee37d3d840p13e5a9jsn4ab8decfb5fc'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeader})
 export const cryptoApi = createApi({
     reducerPath: 'cryptoApi',
     baseQuery: fetchBaseQuery({baseUrl }),
     endpoints: (builder) => ({
         getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
         }),
         getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
         getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
      
          // Note: To access this endpoint you need premium plan
          getExchanges: builder.query({
            query: () => createRequest('/exchanges')
          }),
        }),
      });
      
      export const {
        useGetCryptosQuery,
        useGetCryptoDetailsQuery,
        useGetExchangesQuery,
        useGetCryptoHistoryQuery,
      } = cryptoApi;