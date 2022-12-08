import { Empty, List, SectionTitle } from "components/shared";
import TeacherTestItem from "../TeacherTestItem/TeacherTestItem";
import { mockTests } from "./TeacherTests.data";

import "./TeacherTests.scss";

const TeacherTests = () => (
  <section>
    <SectionTitle>Тесты</SectionTitle>
    {mockTests.length ? (
      <List
        className="teacher-test-list"
        items={mockTests}
        renderItem={(item) => <TeacherTestItem key={item.testId} {...item} />}
      />
    ) : (
      <Empty
        className="teacher-test-empty"
        text="Пока еще нет ни одного теста"
      />
    )}
  </section>
);

export default TeacherTests;
