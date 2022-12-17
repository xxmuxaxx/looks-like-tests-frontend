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

export interface IQuestion {
  readonly id: number;
  readonly name: string;
  readonly type: "OPTIONS";
  readonly answers: IAnswer[];
}

export interface IAnswer {
  readonly id: number;
  readonly name: string;
}

export type TTestsResponse = {
  tests: ITest[];
};
