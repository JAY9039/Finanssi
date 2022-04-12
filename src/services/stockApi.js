import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const stockApiHeader = {
    'x-rapidapi-host': 'nse-data1.p.rapidapi.com',
    'x-rapidapi-key': '3d409e9c37mshdb2e0ee37d3d840p13e5a9jsn4ab8decfb5fc'
}

const baseUrl = 'https://nse-data1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: stockApiHeader})
 export const stockApi = createApi({
     reducerPath: 'stockApi',
     baseQuery: fetchBaseQuery({baseUrl}),
     endpoints: (builder) => ({
         getStocks: builder.query({
            query: () => createRequest('/current_ipo_issue'),
         }),
         getNiftyStock: builder.query({
            query: (count) => createRequest(`/nifty_fifty_indices_data?limit=${count}`),
         }),
         getTopgainers: builder.query({
            query: (count) => createRequest('/top_gainers'),
         }),
     })
 });

 export const {
     useGetStocksQuery, useGetNiftyStockQuery,useGetTopgainersQuery
 } = stockApi