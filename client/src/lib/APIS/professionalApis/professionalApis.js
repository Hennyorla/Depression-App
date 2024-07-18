import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;
} else {
  baseUrl = process.env.REACT_APP_API_PROD_BASE_URL;
}

export const professionalApis = createApi({
  reducerPath: "professionalApis",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    applyForProfessional: builder.mutation({
      query: (payload) => ({
        url: "/professionals/apply",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),

    getApplications: builder.mutation({
      query: () => ({
        url: "/professionals/applications",
        method: "GET",
        credentials: "include",
      }),
    }),

    createProfessional: builder.mutation({
      query: (payload) => ({
        url: `/professionals/${payload}`,
        method: "POST",
        credentials: "include",
      }),
    }),

    getAllProfessionals: builder.mutation({
      query: () => ({
        url: "/professionals",
        method: "GET",
        credentials: "include",
      }),
    }),

    getProfessional: builder.mutation({
      query: (payload) => ({
        url: `/professionals/${payload}`,
        method: "GET",
        body: payload,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useApplyForProfessionalMutation,
  useCreateProfessionalMutation,
  useGetAllProfessionalsMutation,
  useGetProfessionalMutation,
  useGetApplicationsMutation,
} = professionalApis;
