import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { coinsApi } from "../services/coinsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
});
