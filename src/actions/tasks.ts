import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_USERS_IDS, LOCAL_STORAGE } from "../types/enums";
import { generateUniqueId } from "../utils";
import { getTasksListByUserID } from "./utils";

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
  searchValue: string;
}

const initialState: UsersState = {
  // Private all tasks
  _tasks: localStorage.getItem(LOCAL_STORAGE.TASKS)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.TASKS) as string)
    : [],
  status: null,
  searchValue: "",
};

// Setup local storage
updateTasksStorage(initialState._tasks);
function updateTasksStorage(tasks: Task[]) {
  localStorage.setItem(LOCAL_STORAGE.TASKS, JSON.stringify(tasks));
}

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

        updateTasksStorage(state._tasks);
      }
    },

    changeSearchValue(state, action: PayloadAction<{ value: string }>) {
      state.searchValue = action.payload.value;
    },

    removeTask(state, action: PayloadAction<{ id: string }>) {
      const { id: taskId } = action.payload;

      state._tasks = state._tasks.filter(({ id }) => id !== taskId);
      updateTasksStorage(state._tasks);
    },

    removeAllTask(state) {
      const currentUserId = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE.CURRENT_USER) as string
      );

      const taskIdsList = getTasksListByUserID(state._tasks, currentUserId).map(
        (t) => t.id
      );

      state._tasks = state._tasks.filter(({ id }) => !taskIdsList.includes(id));
      updateTasksStorage(state._tasks);
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
  getTasksListByUserID
);

export const {
  addNewTask,
  changeIndividualProp,
  changeSearchValue,
  removeTask,
  removeAllTask,
  clearStatus,
} = tasksSlice.actions;
export default tasksSlice.reducer;
