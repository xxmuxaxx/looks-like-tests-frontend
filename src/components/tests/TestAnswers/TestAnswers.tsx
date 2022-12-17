import { List } from "components/shared";
import { IAnswer, QuestionTypes } from "services/testsApi";

import "./TestAnswers.scss";

type TestAnswersProps = {
  type: QuestionTypes;
  items: IAnswer[];
  activeIds: number[];
  setActiveIds: React.Dispatch<React.SetStateAction<number[]>>;
};

const htmlTypes = {
  [QuestionTypes.OPTIONS_MULTIPLY]: "checkbox",
  [QuestionTypes.OPTIONS]: "radio",
  [QuestionTypes.WRITING]: "radio",
};

const TestAnswers = ({
  type,
  items,
  activeIds,
  setActiveIds,
}: TestAnswersProps) => (
  <List
    className="test-answers"
    items={items}
    renderItem={({ id, name }, index) => (
      <li key={`answer-${id}-${index}`} className="test-answers__item">
        <label className="test-answers__label">
          <input
            className="test-answers__input"
            type={htmlTypes[type]}
            checked={activeIds.includes(id)}
            onChange={() => {
              setActiveIds((currentIds) => {
                if (type === QuestionTypes.OPTIONS_MULTIPLY) {
                  return currentIds.includes(id)
                    ? currentIds.filter((i) => i !== id)
                    : [...currentIds, id];
                }

                return [id];
              });
            }}
          />
          <p className="test-answers__text">{name}</p>
        </label>
      </li>
    )}
  />
);

export default TestAnswers;
