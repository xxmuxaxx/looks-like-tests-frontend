import { Empty, List, SectionTitle } from "components/shared";
import StudentTestItem from "../StudentTestItem/StudentTestItem";
import { mockTests } from "./StudentTests.data";

import "./StudentTests.scss";

const StudentTests = () => (
  <section>
    <SectionTitle>Ваши тесты</SectionTitle>
    {mockTests.length ? (
      <List
        className="student-test-list"
        items={mockTests}
        renderItem={(item) => <StudentTestItem key={item.testId} {...item} />}
      />
    ) : (
      <Empty
        className="student-test-empty"
        text="Здесь будет отображена информация о новых тестах"
        link={{ text: "История тестов", to: "/history" }}
      />
    )}
  </section>
);

export default StudentTests;
