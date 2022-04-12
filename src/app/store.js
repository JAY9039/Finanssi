import { configureStore } from '@reduxjs/toolkit';
import { stockNewsApi } from '../services/stockNewsApi';
import { stockApi } from '../services/stockApi';
import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
  reducer: {
   
    [stockApi.reducerPath]: stockApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [stockNewsApi.reducerPath]: stockNewsApi.reducer,
    

  },
  
});