import { createApi } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

import { authActions } from "store/auth";
import { baseQuery } from "../baseQuery";
import { IToken, IUser, LoginDTO, RegistrationDTO, Roles } from "./types";

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
    registration: builder.mutation<
      IUser,
      Omit<RegistrationDTO, "authorities" | "username">
    >({
      query: (data) => ({
        url: "user",
        method: "POST",
        body: { ...data, username: data.email, authorities: [Roles.student] },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        await queryFulfilled;
        toast.success("Пользователь создан!");
      },
    }),
  }),
});

export const {
  useAuthenticateMutation,
  useGetUserMutation,
  useRegistrationMutation,
} = authApi;
