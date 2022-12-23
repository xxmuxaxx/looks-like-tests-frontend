import { Empty, List, SectionTitle } from "components/shared";
import { TestCard, TestInfo } from "components/tests";
import { useGetTestsQuery } from "services/testsApi";
import { useTests } from "store/tests";
import { findProgressId } from "utils/helpers";

import "./TestsPage.scss";

const TestsPage = () => {
  const { isLoading } = useGetTestsQuery();
  const { tests, progress } = useTests();

  return (
    <section>
      <SectionTitle>Ваши тесты</SectionTitle>

      {isLoading && <SectionTitle>Идет загрузка...</SectionTitle>}

      {tests?.length ? (
        <List
          className="student-test-list"
          items={tests}
          renderItem={(item) => (
            <li key={item.id} className="student-test-item">
              <TestCard
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
              />
              <TestInfo
                testId={item.id}
                testProgressId={findProgressId(item.id, progress)}
                attemps={item.results}
              />
            </li>
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
};

export default TestsPage;
