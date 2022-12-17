import { Roles } from "services/authApi";
import { useGetTestsQuery } from "services/testsApi";
import { useProtectedAuth } from "store/auth";
import { useTests } from "store/tests";
import StudentTests from "../StudentTests/StudentTests";
import TeacherTests from "../TeacherTests/TeacherTests";

const TestsPage = () => {
  const { isLoading } = useGetTestsQuery();
  const { tests } = useTests();
  const { userHasRole } = useProtectedAuth();

  if (userHasRole(Roles.teacher)) {
    return <TeacherTests />;
  }

  if (userHasRole(Roles.student)) {
    return <StudentTests {...{ tests, isLoading }} />;
  }

  return null;
};

export default TestsPage;
