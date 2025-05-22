import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "./productApiSlice";
import loadMoreReducer from "./loadMoreSlice";

export const store = configureStore({
  reducer: {
    loadMore: loadMoreReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
