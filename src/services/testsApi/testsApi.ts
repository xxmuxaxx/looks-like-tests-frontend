import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { baseQuery } from "services/baseQuery";
import { testsActions, TTestWithResults } from "store/tests";
import { IProgressResponse, TAnswersDTO, TTestsResponse } from "./types";

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
    startTest: builder.mutation<IProgressResponse, number>({
      query: (testId) => ({
        url: `tests/${testId}/starts`,
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          testsActions.addProgress({
            test: data.test,
            testProgressId: data.id,
          })
        );
      },
    }),
    finishTest: builder.mutation<any, TAnswersDTO>({
      query: ({ testProgressId, answers }) => ({
        url: `tests/progress/${testProgressId}/finishes`,
        method: "POST",
        body: { answers: answers },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(testsActions.deleteProgress(data.testProgress.id));
      },
    }),
  }),
});

export const { useGetTestsQuery, useStartTestMutation, useFinishTestMutation } =
  testsApi;
