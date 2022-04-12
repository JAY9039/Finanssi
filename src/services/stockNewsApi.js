import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const stockNewsHeader =   {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '3d409e9c37mshdb2e0ee37d3d840p13e5a9jsn4ab8decfb5fc'
  }
  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
  
  const createRequest = (url) => ({url, headers: stockNewsHeader})

  export const stockNewsApi = createApi({
    reducerPath: 'stockNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getStockNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
  
  export const { useGetStockNewsQuery } = stockNewsApi;