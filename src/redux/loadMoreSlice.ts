import { createSlice } from "@reduxjs/toolkit";

interface LoadMoreState {
  limit: number;
}

const initialState: LoadMoreState = {
  limit: 8,
};

export const loadMoreSlice = createSlice({
  name: "loadMore",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.limit += 8;
    },
  },
});

export const { loadMore } = loadMoreSlice.actions;
export default loadMoreSlice.reducer;
