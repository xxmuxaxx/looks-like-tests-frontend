import { Empty, List } from "components/shared";
import StudentTestItem from "../StudentTestItem/StudentTestItem";
import type { StudentTestItemProps } from "../StudentTestItem/StudentTestItem";

import "./StudentTestList.scss";

type StudentTestItems = StudentTestItemProps[];

type StudentTestListProps = {
  items: StudentTestItems;
};

const StudentTestList = ({ items }: StudentTestListProps) =>
  items.length ? (
    <List
      className="student-test-list"
      items={items}
      renderItem={(item) => <StudentTestItem key={item.testId} {...item} />}
    />
  ) : (
    <Empty
      className="student-test-empty"
      text="Здесь будет отображена информация о новых тестах"
      link={{ text: "История тестов", to: "/history" }}
    />
  );

export default StudentTestList;
