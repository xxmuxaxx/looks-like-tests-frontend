import { List } from "components/shared";
import { Title } from "components/typography";

import "./TestCard.scss";

type TestCardProps = {
  testId: number;
  title: string;
  description: string;
  info: Array<{ name: string; value: string | number }>;
};

const TestCard = ({ testId, title, description, info }: TestCardProps) => (
  <div className="test-card">
    <Title className="test-card__title" variant="h6">
      {title}
    </Title>

    <div className="test-card__description">{description}</div>

    <List
      className="test-card__list"
      items={info}
      renderItem={(item, index) => (
        <li key={`info-${testId}-${index}`} className="test-card__list-item">
          <p className="test-card__list-name">{item.name}</p>
          <p className="test-card__list-value">{item.value}</p>
        </li>
      )}
    />
  </div>
);

export default TestCard;
