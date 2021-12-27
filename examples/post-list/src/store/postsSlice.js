import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    populate: (state, action) => {
      postsAdapter.upsertMany(state, action.payload);
    },
    updateOne: {
      reducer: (state, action) => {
        postsAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      },
      prepare: (item) => {
        return {
          payload: {
            ...item,
            count: item.count + 1,
          },
        };
      },
    },
  },
});

export const { selectAll } = postsAdapter.getSelectors((state) => state.posts);

export const selectAllPosts = createSelector([selectAll], (posts) => posts);

export const { populate, updateOne } = postsSlice.actions;
export default postsSlice.reducer;
