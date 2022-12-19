import { Button } from "components/shared";
import { useLocation, useNavigate } from "react-router-dom";
import "./TestContinueButton.scss";

type TestContinueButtonProps = {
  testProgressId: number;
};

const TestContinueButton = (props: TestContinueButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button
      onClick={() =>
        navigate(`/tests/progress/${props.testProgressId}`, {
          state: { from: location },
        })
      }
    >
      Продолжить тестирование
    </Button>
  );
};

export default TestContinueButton;
