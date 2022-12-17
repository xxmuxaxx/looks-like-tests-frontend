import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TTestWithResults } from "./tests.types";

type TestsState = {
  tests: TTestWithResults[] | null;
  history: any[] | null;
  activeTest: any | null;
};

const initialState: TestsState = {
  tests: null,
  history: null,
  activeTest: null,
};

const TESTS_KEY = "tests";

const testsSlice = createSlice({
  name: TESTS_KEY,
  initialState,
  reducers: {
    setTests: (state, action: PayloadAction<TTestWithResults[]>) => {
      state.tests = action.payload;
    },
  },
});

export const testsReducer = testsSlice.reducer;
export const testsActions = testsSlice.actions;
