import { TProgress } from "store/tests";

export const findProgressId = (
  testId: number,
  progress?: TProgress
): number | undefined => {
  if (!progress) return;
  for (const testProgressId in progress) {
    if (progress[testProgressId].test.id === testId) {
      return +testProgressId;
    }
  }
};
