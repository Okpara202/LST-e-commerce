import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { storeProducts } from "../types/productType";

export const productApiSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query<storeProducts, { limit: number }>({
        query: ({ limit }) => `/products?limit=${limit}`,
      }),
    };
  },
});

export const { useGetProductsQuery } = productApiSlice;
