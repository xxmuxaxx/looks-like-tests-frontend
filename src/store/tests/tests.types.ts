import { ITest } from "services/testsApi";

export type TTestWithResults = ITest & {
  results: any[]; // TODO
};
