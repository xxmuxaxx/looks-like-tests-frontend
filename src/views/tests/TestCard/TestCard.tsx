import { FC } from "react";

import { Button } from "components/shared";
import { Title } from "components/typography";

import "./TestCard.scss";
import classNames from "classnames";
import { Cross, Done } from "components/icons";

type TestCardProps = {
  id: number;
  title: string;
  description: string;
  info: Array<{ name: string; value: string }>;
  attemps?: Array<{ status: string; rightAnswers: number; date: string }>;
};

const TestCard: FC<TestCardProps> = ({
  id,
  title,
  description,
  info,
  attemps,
}) => (
  <li className="tests-item">
    <div className="tests-info">
      <Title className="tests-info__title" variant="h6">
        {title}
      </Title>

      <div className="tests-info__description">{description}</div>

      <ul className="tests-info__list">
        {info.map(({ name, value }, index) => (
          <li key={`info-${id}-${index}`} className="tests-info__list-item">
            <p className="tests-info__list-name">{name}</p>
            <p className="tests-info__list-value">{value}</p>
          </li>
        ))}
      </ul>
    </div>

    <div className="tests-aside">
      {attemps ? (
        <ul className="tests-aside__list">
          {attemps.map(({ status, rightAnswers, date }, index) => (
            <li
              key={`ittemp-${id}-${index}`}
              className={classNames("tests-aside__list-item", status)}
            >
              <div className="tests-aside__list-icon">
                {status === "done" ? (
                  <Done width="12" height="10" />
                ) : (
                  <Cross width="10" height="10" />
                )}
              </div>

              <div className="tests-aside__list-text">
                <p className="tests-aside__list-count">
                  {rightAnswers} верный ответ
                </p>
                <time className="tests-aside__list-time" dateTime={date}>
                  {date}
                </time>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p className="tests-aside__name">Попытка №1</p>
          <div className="tests-aside__description">
            Тестирование пока не проходилось
          </div>
        </>
      )}

      <div className="tests-aside__action">
        <Button>Начать тестирование</Button>
      </div>
    </div>
  </li>
);

export default TestCard;
