import { authApi } from "services/authApi";
import { testsApi } from "services/testsApi";
import { authReducer } from "./auth";
import { testsReducer } from "./tests";

const rootReducer = {
  [authApi.reducerPath]: authApi.reducer,
  [testsApi.reducerPath]: testsApi.reducer,
  authentication: authReducer,
  tests: testsReducer,
};

export default rootReducer;
