import { useMemo, useState } from "react";

import { ContentWrapper, Progress, SectionTitle } from "components/shared";
import { TestAnswers, TestProgressButton, TestStatus } from "components/tests";
import { Title } from "components/typography";
import { ITest } from "services/testsApi";
import { TAnswer } from "store/tests";

import "./TestProgress.scss";

type TestProgressProps = {
  testProgressId: number;
  activeQuestionIndex: number;
  answers: TAnswer[];
  test: ITest;
};

const TestProgress = ({
  testProgressId,
  activeQuestionIndex,
  answers,
  test,
}: TestProgressProps) => {
  const [activeAnswerIds, setActiveAnswerIds] = useState<number[]>([]);

  const activeQuestion = useMemo(() => {
    return test.questions[activeQuestionIndex];
  }, [test, activeQuestionIndex]);

  const isLastQuestion = useMemo(() => {
    return activeQuestionIndex === test.questions.length - 1;
  }, [test, activeQuestionIndex]);

  const answer = useMemo(() => {
    return {
      questionId: activeQuestion.id,
      optionIds: activeAnswerIds,
    };
  }, [activeAnswerIds, activeQuestion.id]);

  return (
    <>
      <SectionTitle>{test.name}</SectionTitle>
      <ContentWrapper
        aside={
          <TestStatus
            answersGiven={activeQuestionIndex}
            totalQuestions={test.questions.length}
            timeLeft={+test.duration}
            onTimeEnd={() => console.log("time end")}
          />
        }
      >
        <section className="test-section">
          <Progress
            className="test-progress"
            percent={(activeQuestionIndex * 100) / test.questions.length}
          />

          <Title className="test-title" variant="h2">
            {activeQuestion.name}
          </Title>

          {/* <TestImages items={activeQuestion.images} /> */}

          <TestAnswers
            type={activeQuestion.type}
            items={activeQuestion.answers}
            activeIds={activeAnswerIds}
            setActiveIds={setActiveAnswerIds}
          />

          <div className="test-actions">
            <TestProgressButton
              {...{
                testProgressId,
                answers,
                answer,
                isLastQuestion,
                activeAnswerIds,
                setActiveAnswerIds,
              }}
            />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default TestProgress;
