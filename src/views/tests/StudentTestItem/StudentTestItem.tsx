import { TestCard, TestInfo } from "components/tests";

import "./StudentTestItem.scss";

export type StudentTestItemProps = {
  testId: number;
  title: string;
  description: string;
  info: Array<{ name: string; value: string | number }>;
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
