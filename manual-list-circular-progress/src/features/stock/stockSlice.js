import { createAction, createSlice } from "@reduxjs/toolkit";

export const fetchLS = createAction("stock/fetchLS");

const stock = createSlice({
  name: "stock",
  initialState: [],
  reducers: {
    addStock: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, value) => {
        return {
          payload: {
            name,
            value: +value,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLS, (state, action) => {
      return action.payload;
    });
  },
});

export const selectTotal = (state) =>
  state.stock.reduce((acc, item) => acc + item.value, 0).toFixed(2);

export const selectPercentageStock = (state, value) => {
  return +((value * 100) / selectTotal(state)).toFixed(2);
};
export const { addStock } = stock.actions;
export default stock.reducer;
