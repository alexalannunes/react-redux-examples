import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "../features/stock/stockSlice";

export const store = configureStore({
  reducer: {
    stock: stockSlice,
  },
});
