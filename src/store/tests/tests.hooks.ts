import { useAppDispatch, useAppSelector } from "store";

export const useTests = () => {
  // const dispatch = useAppDispatch();

  const tests = useAppSelector((store) => store.tests.tests);

  return { tests };
};
