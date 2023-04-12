import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../actions/users";
import counterReducer from "../components/Counter/state";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
