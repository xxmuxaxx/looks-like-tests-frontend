import { authApi } from "services/authApi";
import { authReducer } from "./auth";

const rootReducer = {
  [authApi.reducerPath]: authApi.reducer,
  authentication: authReducer,
};

export default rootReducer;
