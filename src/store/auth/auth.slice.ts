import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IToken, IUser } from "services/authApi";

type AuthenticationState = {
  user: IUser | null;
  token: string | null;
};

const initialState: AuthenticationState = {
  user: null,
  token: null,
};

const AUTHENTICATION_KEY = "authentication";

const authSlice = createSlice({
  name: AUTHENTICATION_KEY,
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<IToken>) => {
      state.token = payload.value;
    },
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    logout: () => initialState,
  },
});

const { reducer, actions } = authSlice;
export default reducer;
export const authActions = actions;
