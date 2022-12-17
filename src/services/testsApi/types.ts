import { IUser } from "services/authApi";

export interface ITest {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  // Задается в секундах.
  // Если 0 - тест не ограничен по времени
  // Временно string. Будет number
  readonly duration: string;
  readonly minRightAnswers: number;
  readonly attempts: number;
  readonly isNeedVerify: boolean;
  readonly questions: IQuestion[];
}

export enum QuestionTypes {
  OPTIONS = "OPTIONS",
  OPTIONS_MULTIPLY = "OPTIONS_MULTIPLY",
  WRITING = "WRITING",
}

export interface IQuestion {
  readonly id: number;
  readonly name: string;
  readonly type: QuestionTypes;
  readonly answers: IAnswer[];
}

export interface IAnswer {
  readonly id: number;
  readonly name: string;
}

export interface IProgressResponse {
  readonly id: number;
  readonly user: IUser;
  readonly test: ITest;
  readonly dateStarted: string;
  readonly dateFinished: string;
}

export type TTestsResponse = {
  tests: ITest[];
};

export type TAnswersDTO = {
  testProgressId: number;
  answers: {
    questionId: number;
    // взаимоисключающие поля
    optionIds?: number[];
    textAnswer?: string;
  }[];
};
