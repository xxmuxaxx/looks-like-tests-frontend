import TestCard from "../TestCard/TestCard";
import TestInfo from "../TestInfo/TestInfo";

import "./StudentTestItem.scss";

export type StudentTestItemProps = {
  testId: number;
  title: string;
  description: string;
  info: Array<{ name: string; value: string }>;
  attemps?: Array<{ status: string; rightAnswers: number; date: string }>;
};

const StudentTestItem = ({
  testId,
  title,
  description,
  info,
  attemps,
}: StudentTestItemProps) => (
  <li className="student-test-item">
    <TestCard {...{ testId, title, description, info }} />
    <TestInfo {...{ testId, attemps }} />
  </li>
);

export default StudentTestItem;
