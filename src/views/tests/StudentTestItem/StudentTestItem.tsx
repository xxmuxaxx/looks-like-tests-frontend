import { TestCard, TestInfo } from "components/tests";

import "./StudentTestItem.scss";

export type StudentTestItemProps = {
  testId: number;
  title: string;
  description: string;
  info: Array<{ name: string; value: string | number }>;
  attemps?: Array<{ status: string; rightAnswers: number; date: string }>;
  testProgressId?: number;
};

const StudentTestItem = ({
  testId,
  title,
  description,
  info,
  attemps,
  testProgressId,
}: StudentTestItemProps) => (
  <li className="student-test-item">
    <TestCard {...{ testId, title, description, info }} />
    <TestInfo {...{ testProgressId, testId, attemps }} />
  </li>
);

export default StudentTestItem;
