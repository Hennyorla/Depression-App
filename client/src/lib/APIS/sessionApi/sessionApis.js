import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;
} else {
  baseUrl = process.env.REACT_APP_API_PROD_BASE_URL;
}

export const sessionApis = createApi({
  reducerPath: "sessionApis",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    createSession: builder.mutation({
      query: (payload) => ({
        url: "/sessions",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),

    getAllSessions: builder.mutation({
      query: () => ({
        url: "/sessions",
        method: "GET",
        credentials: "include",
      }),
    }),

    getASession: builder.mutation({
      query: (payload) => ({
        url: `/sessions/${payload}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateSessionMutation,
  useGetAllSessionsMutation,
  useGetASessionMutation,
} = sessionApis;
