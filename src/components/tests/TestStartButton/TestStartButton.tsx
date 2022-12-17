import { Navigate, useLocation } from "react-router-dom";

import { Button } from "components/shared";
import { useStartTestMutation } from "services/testsApi";

import "./TestStartButton.scss";

type TestStartButtonProps = {
  testId: number;
};

const TestStartButton = (props: TestStartButtonProps) => {
  const location = useLocation();
  const [startTest, { isLoading, isSuccess, data }] = useStartTestMutation();

  if (!isLoading && isSuccess && data?.id) {
    return (
      <Navigate to={`/tests/progress/${data.id}`} state={{ from: location }} />
    );
  }

  return (
    <Button disabled={isLoading} onClick={() => startTest(props.testId)}>
      Начать тестирование
    </Button>
  );
};

export default TestStartButton;
