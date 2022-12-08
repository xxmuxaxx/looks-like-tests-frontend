import { TestCard } from "components/tests";

import "./TeacherTestItem.scss";

export type TeacherTestItemProps = {
  testId: number;
  title: string;
  description: string;
  info: Array<{ name: string; value: string }>;
};

const TeacherTestItem = ({
  testId,
  title,
  description,
  info,
}: TeacherTestItemProps) => (
  <li className="teacher-test-item">
    <TestCard {...{ testId, title, description, info }} />
  </li>
);

export default TeacherTestItem;
