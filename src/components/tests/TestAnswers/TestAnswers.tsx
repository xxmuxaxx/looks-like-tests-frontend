import { List } from "components/shared";

import "./TestAnswers.scss";

type TestAnswersProps = {
  type: "radio" | "checkbox";
  items: Array<{ id: number; name: string }>;
  activeIds: number[];
  setActiveIds: React.Dispatch<React.SetStateAction<number[]>>;
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
            type={type}
            checked={activeIds.includes(id)}
            onChange={() => {
              setActiveIds((currentIds) => {
                if (type === "checkbox") {
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
