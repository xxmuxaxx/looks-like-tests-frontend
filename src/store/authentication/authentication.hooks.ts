import { bindActionCreators } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../hooks";
import { authenticationActions } from "./authentication.slice";

const useAuthentication = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.authentication.user);
  const token = useAppSelector((state) => state.authentication.token);
  const loading = useAppSelector((state) => state.authentication.loading);
  const error = useAppSelector((state) => state.authentication.error);

  const actions = bindActionCreators({ ...authenticationActions }, dispatch);

  return { user, token, loading, error, ...actions };
};

export default useAuthentication;
