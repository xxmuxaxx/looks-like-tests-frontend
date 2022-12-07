import { bindActionCreators } from "@reduxjs/toolkit";

import { getFullName } from "utils/helpers";
import { useAppDispatch, useAppSelector } from "../index";
import { authActions } from "./auth.slice";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.authentication.user);
  const token = useAppSelector((state) => state.authentication.token);

  const fullName = getFullName(
    user?.firstName,
    user?.lastName,
    user?.middleName
  );

  const actions = bindActionCreators({ ...authActions }, dispatch);

  return { user, token, fullName, ...actions };
};

export { useAuth };
