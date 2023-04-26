import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_USERS_IDS, LOCAL_STORAGE } from "../ENUMS";
import { generateUniqueId } from "../utils";

export type TaskProp = {
  title: string;
  isFavorite: boolean;
  isCompleted: boolean;
};

export type Task = TaskProp & {
  id: string;
  userID: string;
};

interface UsersState {
  _tasks: Task[];
  status: string | null;
}

const initialState: UsersState = {
  // Private all tasks
  _tasks: localStorage.getItem(LOCAL_STORAGE.TASKS)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.TASKS) as string)
    : [],
  status: null,
};

// Setup local storage
localStorage.setItem(LOCAL_STORAGE.TASKS, JSON.stringify(initialState._tasks));

const tasksSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<TaskProp>) {
      state._tasks.push({
        id: generateUniqueId(),
        userID: JSON.parse(
          localStorage.getItem(LOCAL_STORAGE.CURRENT_USER) as string
        ),
        ...action.payload,
      });

      localStorage.setItem(LOCAL_STORAGE.TASKS, JSON.stringify(state._tasks));
    },

    changeIndividualProp(
      state,
      action: PayloadAction<{
        id: string;
        change: {
          prop: keyof TaskProp;
          value: string | boolean;
        };
      }>
    ) {
      const {
        id: taskId,
        change: { prop, value },
      } = action.payload;
      const task = state._tasks.find(({ id }) => id === taskId);

      if (task) {
        // eslint-disable-next-line no-unused-vars
        (task as { [_ in keyof TaskProp]: string | boolean })[prop] = value; // Same as: task[prop] = value;

        localStorage.setItem(LOCAL_STORAGE.TASKS, JSON.stringify(state._tasks));
      }
    },

    clearStatus(state) {
      state.status = null;
    },
  },
});

// Utils
export const selectCurrentUserTasks = createSelector(
  (state: { tasks: { _tasks: Task[] } }) => state.tasks._tasks,
  () => JSON.parse(localStorage.getItem(LOCAL_STORAGE.CURRENT_USER) as string),
  (tasks, currentUserID) =>
    currentUserID === DEFAULT_USERS_IDS.ADMIN
      ? tasks
      : tasks.filter((task) => task.userID === currentUserID)
);

export const { addNewTask, clearStatus, changeIndividualProp } =
  tasksSlice.actions;
export default tasksSlice.reducer;
