import Countdown from "react-countdown";

import "./TestStatus.scss";

type TestStatusProps = {
  answersGiven: number;
  totalQuestions: number;
  timeLeft: number;
  onTimeEnd?: () => void;
};

const TestStatus = ({
  answersGiven,
  totalQuestions,
  timeLeft,
  onTimeEnd,
}: TestStatusProps) => (
  <div className="test-status">
    <div className="test-status__row">
      <p className="test-status__name">Дано ответов</p>
      <p className="test-status__value">{answersGiven}</p>
    </div>
    <div className="test-status__row">
      <p className="test-status__name">Вопросов в тесте</p>
      <p className="test-status__value">{totalQuestions}</p>
    </div>
    <div className="test-status__row">
      <p className="test-status__name">Осталось времени</p>
      <p className="test-status__value">
        <Countdown
          date={Date.now() + timeLeft * 1000}
          renderer={({ formatted }) =>
            `${formatted.minutes}:${formatted.seconds}`
          }
          onComplete={onTimeEnd}
        />
      </p>
    </div>
  </div>
);

export default TestStatus;
