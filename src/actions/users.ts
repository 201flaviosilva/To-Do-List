import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_USERS_IDS, LOCAL_STORAGE } from "../ENUMS";
import { generateUniqueId } from "../utils";

export type UserProp = {
  name?: string;
  username: string;
  password: string;
};

export type User = UserProp & {
  id: string;
};

interface UsersState {
  users: User[];
  currentUser: string | number;
  status: string | null;
}

const DEFAULT_USERS = [
  { id: DEFAULT_USERS_IDS.GUEST, username: "Guest", password: "" },
  { id: DEFAULT_USERS_IDS.ADMIN, username: "Admin", password: "123" },
];

const initialState: UsersState = {
  users: localStorage.getItem(LOCAL_STORAGE.USERS)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.USERS) as string)
    : DEFAULT_USERS,
  currentUser: localStorage.getItem(LOCAL_STORAGE.CURRENT_USER)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.CURRENT_USER) as string)
    : DEFAULT_USERS_IDS.GUEST,
  status: null,
};

// Setup local storage
localStorage.setItem(LOCAL_STORAGE.USERS, JSON.stringify(initialState.users));
localStorage.setItem(
  LOCAL_STORAGE.CURRENT_USER,
  JSON.stringify(initialState.currentUser)
);

const usersSlice = createSlice({
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
        state.currentUser = foundUser.id;
        localStorage.setItem(
          LOCAL_STORAGE.CURRENT_USER,
          JSON.stringify(foundUser.id)
        );
        state.status = "200"; // OK - Successfully Logged In
        return state;
      }

      state.status = "401"; // Unauthorized - User not found or incorrect password
    },

    logOut(state) {
      state.currentUser = DEFAULT_USERS_IDS.GUEST;
      localStorage.setItem(
        LOCAL_STORAGE.CURRENT_USER,
        JSON.stringify(DEFAULT_USERS_IDS.GUEST)
      );
    },

    clearStatus(state) {
      state.status = null;
    },
  },
});

export const { createUser, login, clearStatus } = usersSlice.actions;
export default usersSlice.reducer;
