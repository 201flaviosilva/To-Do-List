import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../ENUMS";

export type UserProp = {
  name?: string;
  username: string;
  password: string;
};

export type User = UserProp & {
  id: number | string;
};

interface UsersState {
  users: User[];
  status: string | null;
}

const DEFAULT_USERS = [
  { id: "G", username: "Guest", password: "" },
  { id: "A", username: "Admin", password: "123" },
];

const initialState: UsersState = {
  users: localStorage.getItem(LOCAL_STORAGE.USERS)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.USERS) as string)
    : DEFAULT_USERS,
  status: null,
};
localStorage.setItem(LOCAL_STORAGE.USERS, JSON.stringify(initialState.users));

function generateUniqueId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "");
}

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<UserProp>) {
      if (!state.users.find((u) => u.username === action.payload.username)) {
        state.users.push({
          ...action.payload,
          id: generateUniqueId(),
        });
        localStorage.setItem(LOCAL_STORAGE.USERS, JSON.stringify(state.users));
        state.status = "201"; // Created - User created
        return state;
      }

      state.status = "409"; // Conflict - User already exists
    },

    login(state, action: PayloadAction<UserProp>) {
      const foundUser = state.users.find(
        (u) => u.username === action.payload.username
      );

      if (
        foundUser &&
        foundUser.username === action.payload.username &&
        foundUser.password === action.payload.password
      ) {
        localStorage.setItem(
          LOCAL_STORAGE.CURRENT_USER,
          JSON.stringify(foundUser.id)
        );
        state.status = "200"; // OK - Successfully Logged In
        return state;
      }

      state.status = "401"; // Unauthorized - User not found or incorrect password
    },

    clearStatus(state) {
      state.status = null;
    },
  },
});

export const { createUser, login, clearStatus } = counterSlice.actions;
export default counterSlice.reducer;
