import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "./redux/userSlice";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;
} else {
  baseUrl = process.env.REACT_APP_API_PROD_BASE_URL;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.mutation({
      query: () => ({
        url: "/users/me",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data?.user));
        } catch (error) {}
      },
    }),

    getUserProfile: builder.mutation({
      query: (username) => ({
        url: `/user/${username}`,
        method: "GET",
      }),
    }),

    getUserProfileById: builder.mutation({
      query: (userId) => ({
        url: `/user/profile/${userId}`,
        method: "GET",
      }),
    }),

    uploadPicture: builder.mutation({
      query: (formData) => ({
        url: `/user/upload-image`,
        method: "PUT",
        body: formData,
        credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data?.data));
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useGetCurrentUserMutation,
  useGetUserProfileMutation,
  useUploadPictureMutation,
  useGetUserProfileByIdMutation,
} = userApi;
