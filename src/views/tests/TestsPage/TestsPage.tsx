import { SectionTitle } from "components/shared";
import TestList from "../TestList/TestList";
import { mockTests } from "./TestsPage.data";

import "./TestsPage.scss";

const TestsPage = () => {
  return (
    <>
      <SectionTitle>Ваши тесты</SectionTitle>
      <section className="tests-section">
        <TestList items={mockTests} />
      </section>
    </>
  );
};

export default TestsPage;
