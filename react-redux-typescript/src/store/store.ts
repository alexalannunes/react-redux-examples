import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import todosSlice from "../features/todosSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store };
