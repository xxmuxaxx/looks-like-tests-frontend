import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQuery } from "../baseQuery";
import { UsersResponse } from "./types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, undefined>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
