import { create } from "zustand";
import { persist } from "zustand/middleware";

import { DEFAULT_USERS_IDS } from "@/types/enums";
import { generateUniqueId } from "@/utils";

export type User = {
  id: string;
  name?: string;
  username: string;
  password: string;
};

export type SimpleUser = Omit<User, "id">;
export type OutputUser = Omit<User, "password">;

export interface UsersState {
  users: User[];
  currentUserId: User["id"];
  status?: string | null;
}

export interface UsersStateStore extends UsersState {
  create: (newUser: SimpleUser) => void;
  login: (user: SimpleUser) => void;
  logOut: () => void;
  getUserData: (id?: string) => OutputUser | undefined;
  clearStatus: () => void;
}

const DEFAULT_USERS = [
  { id: DEFAULT_USERS_IDS.GUEST, username: "Guest", password: "" },
  { id: DEFAULT_USERS_IDS.ADMIN, username: "Admin", password: "123" },
];

export const usersInitialState: UsersState = {
  users: DEFAULT_USERS,
  currentUserId: DEFAULT_USERS_IDS.GUEST,
  status: null,
};

export const useUsersStore = create<UsersStateStore>()(
  persist(
    (set, get) => ({
      ...usersInitialState,

      create: (newUser: SimpleUser) =>
        set((state) => {
          if (!state.users.find((u) => u.username === newUser.username)) {
            state.users.push({
              ...newUser,
              id: generateUniqueId(),
            });

            state.status = "201"; // Created - User created
          } else state.status = "409"; // Conflict - User already exists
          return state;
        }),

      login: (user: SimpleUser) =>
        set((state) => {
          const foundUser = state.users.find(
            (u) => u.username === user.username
          );

          if (
            foundUser?.username === user.username &&
            foundUser?.password === user.password
          ) {
            state.currentUserId = foundUser.id;
            state.status = "200"; // OK - Successfully Logged In
            return state;
          }

          state.status = "401"; // Unauthorized - User not found or incorrect password
          return state;
        }),

      getUserData: (id: string = get().currentUserId) =>
        get().users.find((u) => u.id === id),
      logOut: () => set({ currentUserId: DEFAULT_USERS_IDS.GUEST }),
      clearStatus: () => set({ status: null }),
    }),
    { name: "users-store" }
  )
);
