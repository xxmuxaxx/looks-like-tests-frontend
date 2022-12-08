import { useMemo, useState } from "react";

import {
  Button,
  ContentWrapper,
  Progress,
  SectionTitle,
} from "components/shared";
import { TestAnswers, TestImages, TestStatus } from "components/tests";
import { Title } from "components/typography";
import { Answers, mockTest } from "./TestPage.data";

import "./TestPage.scss";

const TestPage = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeAnswerIds, setActiveAnswerIds] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Answers>([]);

  const activeQuestion = useMemo(() => {
    return mockTest.questions[activeQuestionIndex];
  }, [activeQuestionIndex]);

  const isLastQuestion = useMemo(() => {
    return activeQuestionIndex === mockTest.questions.length - 1;
  }, [activeQuestionIndex]);

  const handleNext = () => {
    setAnswers((currentAnswers) => [
      ...currentAnswers,
      { questionId: activeQuestion.id, answerIds: activeAnswerIds },
    ]);
    setActiveAnswerIds([]);
    setActiveQuestionIndex(activeQuestionIndex + 1);
  };

  const handleSubmit = () => {
    console.log([
      ...answers,
      { questionId: activeQuestion.id, answerIds: activeAnswerIds },
    ]);
  };

  return (
    <>
      <SectionTitle>{mockTest.name}</SectionTitle>
      <ContentWrapper
        aside={
          <TestStatus
            answersGiven={activeQuestionIndex}
            totalQuestions={mockTest.questions.length}
            timeLeft={mockTest.duration}
            onTimeEnd={() => console.log("time end")}
          />
        }
      >
        <section className="test-section">
          <Progress
            className="test-progress"
            percent={(activeQuestionIndex * 100) / mockTest.questions.length}
          />

          <Title className="test-title" variant="h2">
            {activeQuestion.name}
          </Title>

          <TestImages items={activeQuestion.images} />

          <TestAnswers
            type={activeQuestion.type as "checkbox" | "radio"}
            items={activeQuestion.answers}
            activeIds={activeAnswerIds}
            setActiveIds={setActiveAnswerIds}
          />

          <div className="test-actions">
            <Button
              modifiers={["auto-width"]}
              disabled={!activeAnswerIds.length}
              onClick={isLastQuestion ? handleSubmit : handleNext}
            >
              {isLastQuestion ? "Закончить тест" : "Следующий вопрос"}
            </Button>
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default TestPage;
