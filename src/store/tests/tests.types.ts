import { ITest } from "services/testsApi";

export type TTestWithResults = ITest & {
  readonly results: any[]; // TODO
};

export type TProgress = {
  [testProgressId: number]: TProgressItem;
};

export type TProgressItem = {
  readonly test: ITest;
  activeQuestionIndex: number;
  answers: TAnswer[];
};

export type TAnswer = { questionId: number; optionIds: number[] };
