import { createApi } from "@reduxjs/toolkit/query/react";

import { authActions } from "store/auth/auth.slice";
import { baseQuery } from "../baseQuery";
import { IToken, IUser, LoginDTO } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    authenticate: builder.mutation<IToken, LoginDTO>({
      query: (data) => ({
        url: "authenticate",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(authActions.setToken(data));
          // await dispatch(authApi.endpoints.getUser.initiate(null));
        } catch (error) {}
      },
    }),
    getUser: builder.mutation<IUser, void>({
      query: () => ({
        url: "user",
        method: "GET",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(authActions.setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useAuthenticateMutation, useGetUserMutation } = authApi;
