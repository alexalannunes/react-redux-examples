import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface ITodo {
  id: string;
  value: string;
  doned: boolean;
}

const initialState: ITodo[] = [];

const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.push(action.payload);
      },
      prepare: (value: string) => {
        return {
          payload: {
            value,
            id: Date.now().toString(16),
            doned: false,
          },
        };
      },
    },
  },
});

export const { addTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todosSlice.reducer;
