import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";
import postsSlice from "./postsSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    header: headerSlice,
  },
});

export { store };
