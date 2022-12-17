import { Dispatch, SetStateAction } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Button } from "components/shared";
import { useFinishTestMutation } from "services/testsApi";
import { TAnswer, useTests } from "store/tests";

import "./TestProgressButton.scss";

type TestProgressButtonProps = {
  testProgressId: number;
  answers: TAnswer[];
  answer: TAnswer;
  isLastQuestion: boolean;
  activeAnswerIds: number[];
  setActiveAnswerIds: Dispatch<SetStateAction<number[]>>;
};

const TestProgressButton = ({
  testProgressId,
  answers,
  answer,
  isLastQuestion,
  activeAnswerIds,
  setActiveAnswerIds,
}: TestProgressButtonProps) => {
  const location = useLocation();
  const [finish, { isError, isLoading }] = useFinishTestMutation();
  const { addProgressAnswer } = useTests();
  const from = location.state?.from?.pathname || "/";

  console.log(from);

  const handleNext = () => {
    addProgressAnswer({ testProgressId, answer });
    setActiveAnswerIds([]);
  };

  const handleSubmit = () => {
    handleNext();
    finish({ testProgressId, answers });
  };

  if (isError || isLoading) {
    return <Navigate to={from} />;
  }

  return (
    <Button
      modifiers={["auto-width"]}
      disabled={!activeAnswerIds.length}
      onClick={isLastQuestion ? handleSubmit : handleNext}
    >
      {isLastQuestion ? "Закончить тест" : "Следующий вопрос"}
    </Button>
  );
};

export default TestProgressButton;
