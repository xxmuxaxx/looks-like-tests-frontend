import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITest } from "services/testsApi";
import { TAnswer, TProgress, TTestWithResults } from "./tests.types";

type TestsState = {
  tests: TTestWithResults[] | null;
  history: any[] | null;
  progress?: TProgress;
};

const initialState: TestsState = {
  tests: null,
  history: null,
};

const TESTS_KEY = "tests";

const testsSlice = createSlice({
  name: TESTS_KEY,
  initialState,
  reducers: {
    setTests: (state, action: PayloadAction<TTestWithResults[]>) => {
      state.tests = action.payload;
    },
    addProgress: (
      state,
      action: PayloadAction<{ testProgressId: number; test: ITest }>
    ) => {
      const { testProgressId, test } = action.payload;
      state.progress = {
        ...state.progress,
        [testProgressId]: { test, activeQuestionIndex: 0, answers: [] },
      };
    },
    addProgressAnswer: (
      state,
      action: PayloadAction<{ testProgressId: number; answer: TAnswer }>
    ) => {
      const { testProgressId, answer } = action.payload;
      if (!state.progress?.[testProgressId]) return;
      state.progress[testProgressId].answers.push(answer);
      if (
        state.progress[testProgressId].activeQuestionIndex <
        state.progress[testProgressId].test.questions.length - 1
      ) {
        state.progress[testProgressId].activeQuestionIndex++;
      }
    },
    deleteProgress: (state, action: PayloadAction<number>) => {
      delete state.progress?.[action.payload];
    },
  },
});

export const testsReducer = testsSlice.reducer;
export const testsActions = testsSlice.actions;
