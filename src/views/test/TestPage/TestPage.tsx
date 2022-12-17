import { useParams } from "react-router-dom";

import { useTests } from "store/tests";
import TestProgress from "../TestProgress/TestProgress";

import "./TestPage.scss";

const TestPage = () => {
  const params = useParams();
  const testProgressId = Number(params["testProgressId"]);
  const { activeQuestionIndex, answers, test } = useTests(testProgressId);

  if (!test || activeQuestionIndex === undefined || !answers) {
    return null;
    // return <Navigate to=".." relative="path" replace />;
  }

  return (
    <TestProgress {...{ testProgressId, activeQuestionIndex, answers, test }} />
  );
};

export default TestPage;
