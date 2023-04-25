import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../actions/tasks";
import usersReducer from "../actions/users";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    tasks: tasksSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
