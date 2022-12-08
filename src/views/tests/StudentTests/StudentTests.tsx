import { SectionTitle } from "components/shared";
import { StudentTestList } from "components/tests";
import { mockTests } from "./StudentTests.data";

import "./StudentTests.scss";

const StudentTests = () => {
  return (
    <section>
      <SectionTitle>Ваши тесты</SectionTitle>
      <StudentTestList items={mockTests} />
    </section>
  );
};

export default StudentTests;
