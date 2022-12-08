import { Roles } from "services/authApi";
import { useProtectedAuth } from "store/auth";
import StudentTests from "../StudentTests/StudentTests";

const TestsPage = () => {
  const { userHasRole } = useProtectedAuth();

  return userHasRole(Roles.student) ? (
    <div>teacher Tests</div>
  ) : (
    <StudentTests />
  );
};

export default TestsPage;
