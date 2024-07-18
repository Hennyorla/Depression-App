import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../lib/APIS/authApis/authApis";
import { userApi } from "../lib/APIS/userApis/userApi";
import { professionalApis } from "../lib/APIS/professionalApis/professionalApis";
import { sessionApis } from "../lib/APIS/sessionApi/sessionApis";
import userSlice from "../lib/APIS/userApis/redux/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [professionalApis.reducerPath]: professionalApis.reducer,
    [sessionApis.reducerPath]: sessionApis.reducer,
    userState: userSlice,
  },

  devTools: process.env.NODE_ENV !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      professionalApis.middleware,
      sessionApis.middleware
    ),
});

setupListeners(store.dispatch);
