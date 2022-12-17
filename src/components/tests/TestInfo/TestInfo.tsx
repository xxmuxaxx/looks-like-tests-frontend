import classNames from "classnames";

import { Cross, Done } from "components/icons";
import { Button } from "components/shared";

import "./TestInfo.scss";

type TestInfoProps = {
  testId: number;
  attemps?: Array<{ status: string; rightAnswers: number; date: string }>;
};

const TestInfo = ({ testId, attemps }: TestInfoProps) => (
  <div className="test-info">
    {attemps?.length ? (
      <ul className="test-info__list">
        {attemps.map(({ status, rightAnswers, date }, index) => (
          <li
            key={`ittemp-${testId}-${index}`}
            className={classNames("test-info__list-item", status)}
          >
            <div className="test-info__list-icon">
              {status === "done" ? (
                <Done width="12" height="10" />
              ) : (
                <Cross width="10" height="10" />
              )}
            </div>

            <div className="test-info__list-text">
              <p className="test-info__list-count">
                {rightAnswers} верный ответ
              </p>
              <time className="test-info__list-time" dateTime={date}>
                {date}
              </time>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <>
        <p className="test-info__name">Попытка №1</p>
        <div className="test-info__description">
          Тестирование пока не проходилось
        </div>
      </>
    )}

    <div className="test-info__action">
      <Button>Начать тестирование</Button>
    </div>
  </div>
);

export default TestInfo;
