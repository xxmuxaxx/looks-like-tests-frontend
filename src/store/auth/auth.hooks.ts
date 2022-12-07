import { bindActionCreators } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../index";
import { authActions } from "./auth.slice";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.authentication.user);
  const token = useAppSelector((state) => state.authentication.token);

  const actions = bindActionCreators({ ...authActions }, dispatch);

  return { user, token, ...actions };
};

export { useAuth };
