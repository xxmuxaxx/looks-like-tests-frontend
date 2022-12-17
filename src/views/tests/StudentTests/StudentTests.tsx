import { Empty, List, SectionTitle } from "components/shared";
import { TTestWithResults } from "store/tests";
import StudentTestItem from "../StudentTestItem/StudentTestItem";

import "./StudentTests.scss";

type StudentTestsProps = {
  tests: TTestWithResults[] | null;
  isLoading?: boolean;
};

const StudentTests = ({ tests, isLoading }: StudentTestsProps) => (
  <section>
    <SectionTitle>Ваши тесты</SectionTitle>
    {isLoading && <SectionTitle>Идет загрузка...</SectionTitle>}
    {tests?.length ? (
      <List
        className="student-test-list"
        items={tests}
        renderItem={(item) => (
          <StudentTestItem
            key={item.id}
            testId={item.id}
            title={item.name}
            description={item.description}
            info={[
              {
                name: "Надо верных ответов",
                value: item.minRightAnswers,
              },
              {
                name: "Вопросов в тесте",
                value: item.questions.length,
              },
              {
                name: "Осталось попыток",
                value: `${item.attempts - item.results.length} из ${
                  item.attempts
                }`,
              },
              {
                name: "Время на попытку",
                value: item.duration,
              },
            ]}
            attemps={item.results}
          />
        )}
      />
    ) : null}
    {!isLoading && (!tests || !tests.length) && (
      <Empty
        className="student-test-empty"
        text="Здесь будет отображена информация о новых тестах"
        link={{ text: "История тестов", to: "/history" }}
      />
    )}
  </section>
);

export default StudentTests;
