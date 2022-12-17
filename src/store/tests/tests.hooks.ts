import { bindActionCreators, createSelector } from "@reduxjs/toolkit";
import { RootState, useAppDispatch, useAppSelector } from "store";
import { testsActions } from "./tests.slice";

export const useTests = (testProgressId?: number) => {
  const dispatch = useAppDispatch();

  const actions = bindActionCreators({ ...testsActions }, dispatch);

  const selectProgress = (store: RootState) => store.tests.progress;
  const selectCurrentProgress = createSelector(selectProgress, (progress) => {
    if (!testProgressId || !progress) return null;
    return progress[testProgressId];
  });

  const tests = useAppSelector((store) => store.tests.tests);

  const activeQuestionIndex = useAppSelector(
    createSelector(
      selectCurrentProgress,
      (currentProgress) => currentProgress?.activeQuestionIndex
    )
  );
  const answers = useAppSelector(
    createSelector(
      selectCurrentProgress,
      (currentProgress) => currentProgress?.answers
    )
  );
  const test = useAppSelector(
    createSelector(
      selectCurrentProgress,
      (currentProgress) => currentProgress?.test
    )
  );

  return { tests, activeQuestionIndex, answers, test, ...actions };
};
