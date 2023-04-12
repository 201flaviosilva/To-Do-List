import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../ENUMS";

export type User = {
  id: number | string;
  userId: string;
  password: string;
};

interface UsersState {
  users: User[];
}

const DEFAULT_USERS = [
  { id: "G", userId: "Guest", password: "" },
  { id: "A", userId: "Admin", password: "123" },
];

const initialState: UsersState = {
  users: localStorage.getItem(LOCAL_STORAGE.USERS)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.USERS) as string)
    : DEFAULT_USERS,
};

function generateUniqueId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "");
}

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(
      state,
      action: PayloadAction<{ userId: string; password: string }>
    ) {
      if (!state.users.find((u) => u.userId === action.payload.userId)) {
        state.users.push({
          ...action.payload,
          id: generateUniqueId(),
        });
        localStorage.setItem(LOCAL_STORAGE.USERS, JSON.stringify(state.users));
        return state;
      }
    },

    login(state, action: PayloadAction<{ userId: string; password: string }>) {
      const foundUser = state.users.find(
        (u) => u.userId === action.payload.userId
      );

      if (
        foundUser &&
        foundUser.userId === action.payload.userId &&
        foundUser.password === action.payload.password
      ) {
        localStorage.setItem(
          LOCAL_STORAGE.CURRENT_USER,
          JSON.stringify(foundUser.id)
        );
        return state;
      }
    },
  },
});

export const { createUser, login } = counterSlice.actions;
export default counterSlice.reducer;
