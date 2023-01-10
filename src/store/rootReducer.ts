import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "services/authApi";
import { testsApi } from "services/testsApi";
import { usersApi } from "services/usersApi";
import { authReducer } from "./auth";
import { testsReducer } from "./tests";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [testsApi.reducerPath]: testsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  authentication: authReducer,
  tests: testsReducer,
  users: usersReducer,
});

export default rootReducer;
