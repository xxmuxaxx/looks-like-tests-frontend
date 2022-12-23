import { Empty, List, SectionTitle } from "components/shared";
import { TestCard } from "components/tests";

import "./TestsCheckPage.scss";

const TestsCheckPage = () => (
  <section>
    <SectionTitle>Проверка тестов</SectionTitle>

    {mockTests.length ? (
      <List
        className="teacher-test-list"
        items={mockTests}
        renderItem={({ testId, title, description, info }) => (
          <li className="teacher-test-item">
            <TestCard {...{ testId, title, description, info }} />
          </li>
        )}
      />
    ) : (
      <Empty
        className="teacher-test-empty"
        text="Пока еще нет ни одного теста"
      />
    )}
  </section>
);

const mockTests: any[] = [
  {
    testId: 1,
    title: "Тестирование на знание методов оценки",
    description:
      "Вам предстоит изучить и ответить на ряд вопрсосов и знании криетриев оценки и подсчета статистики",
    info: [
      { name: "Нужно верных ответов", value: "15" },
      { name: "Вопросов в тесте", value: "30" },
      { name: "Времени на попытку", value: "45" },
    ],
  },
  {
    testId: 2,
    title: "Тестирование на знание методов оценки",
    description:
      "Вам предстоит изучить и ответить на ряд вопрсосов и знании криетриев оценки и подсчета статистики",
    info: [
      { name: "Нужно верных ответов", value: "10" },
      { name: "Вопросов в тесте", value: "20" },
      { name: "Времени на попытку", value: "30" },
    ],
  },
];

export default TestsCheckPage;
