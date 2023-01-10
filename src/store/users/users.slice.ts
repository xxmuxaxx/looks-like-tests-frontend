import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TUsers } from "./users.types";

type UsersState = {
  users: TUsers | null;
};

const initialState: UsersState = {
  users: null,
};

const USERS_KEY = "users";

const usersSlice = createSlice({
  name: USERS_KEY,
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<TUsers>) => {
      state.users = action.payload;
    },
    resetUsers: () => initialState,
  },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;
