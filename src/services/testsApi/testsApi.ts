import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQuery } from "services/baseQuery";
import { testsActions, TTestWithResults } from "store/tests";
import { TTestsResponse } from "./types";

const TESTS_API_KEY = "testsApi";

export const testsApi = createApi({
  reducerPath: TESTS_API_KEY,
  baseQuery,
  endpoints: (builder) => ({
    getTests: builder.query<TTestsResponse, void>({
      query: () => "tests",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const testsWithResults: TTestWithResults[] = data.tests.map((test) => ({
          ...test,
          results: [],
        }));
        dispatch(testsActions.setTests(testsWithResults));
      },
    }),
  }),
});

export const { useGetTestsQuery } = testsApi;
