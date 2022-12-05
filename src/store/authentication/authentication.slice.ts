import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATION_KEY } from "./authentication.constants";

import { AuthenticationState } from "./authentication.types";

const initialState: AuthenticationState = {
  user: null,
  loading: false,
};

const authenticationSlice = createSlice({
  name: AUTHENTICATION_KEY,
  initialState,
  reducers: {
    login: (state) => {
      state.user = { username: "Андрей Такой Сякой" };
    },
  },
});

const { reducer, actions } = authenticationSlice;
export default reducer;
export const authenticationActions = actions;
