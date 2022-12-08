import { Roles } from "services/authApi";
import { useProtectedAuth } from "store/auth";
import StudentTests from "../StudentTests/StudentTests";
import TeacherTests from "../TeacherTests/TeacherTests";

const TestsPage = () => {
  const { userHasRole } = useProtectedAuth();

  if (userHasRole(Roles.teacher)) {
    return <TeacherTests />;
  }

  if (userHasRole(Roles.student)) {
    return <StudentTests />;
  }

  return null;
};

export default TestsPage;
