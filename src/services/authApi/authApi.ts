import { createApi } from "@reduxjs/toolkit/query/react";

import { authActions } from "store/auth";
import { baseQuery } from "../baseQuery";
import { IToken, IUser, LoginDTO } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    authenticate: builder.mutation<IToken, LoginDTO>({
      query: (data) => ({
        url: "authenticate",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(authActions.setToken(data));
        await dispatch(authApi.endpoints.getUser.initiate());
      },
    }),
    getUser: builder.mutation<IUser, void>({
      query: () => ({
        url: "user",
        method: "GET",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(authActions.setUser(data));
      },
    }),
  }),
});

export const { useAuthenticateMutation, useGetUserMutation } = authApi;
