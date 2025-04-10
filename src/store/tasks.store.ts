import { create } from "zustand";
import { persist } from "zustand/middleware";

import { generateUniqueId, removeDuplicates } from "@/utils";

import { useUsersStore } from ".";
import { getTasksListByUserID } from "./utils";

export type SimpleTask = {
  title: string;
  isFavorite: boolean;
  isCompleted: boolean;
};

export type Task = SimpleTask & {
  id: string;
  userID: string;
};

export interface TasksState {
  tasks: Task[];
  searchValue: string;
  status: string | null;
}

export type ChangeIndividualPropProps = {
  id: string;
  change: {
    prop: keyof SimpleTask;
    value: string | boolean;
  };
};

export interface TasksStateStore extends TasksState {
  addNewTask: (newTask: SimpleTask) => void;
  changeIndividualProp: (props: ChangeIndividualPropProps) => void;
  removeTask: (id: string) => void;
  removeDuplicatedTasks: () => void;
  removeCompletedTasks: () => void;
  removeAllTasks: () => void;
  setSearchValue: (value: string) => void;
  clearStatus: () => void;
}

export const tasksInitialState: TasksState = {
  // Private all tasks
  tasks: [],
  searchValue: "",
  status: null,
};

export const useTasksStore = create<TasksStateStore>()(
  persist(
    (set) => ({
      ...tasksInitialState,
      addNewTask: (newSimpleTask: SimpleTask) =>
        set((state) => {
          const currentUserId = useUsersStore.getState().currentUserId;
          const newTask = {
            ...newSimpleTask,
            id: generateUniqueId(),
            userID: currentUserId,
          };

          return {
            tasks: [...state.tasks, newTask],
          };
        }),
      changeIndividualProp: (props: ChangeIndividualPropProps) =>
        set((state) => {
          const {
            id: taskId,
            change: { prop, value },
          } = props;

          return {
            tasks: state.tasks.map((task) =>
              task.id === taskId ? { ...task, [prop]: value } : task
            ),
          };
        }),
      removeTask: (id: string) =>
        set((state) => {
          return {
            tasks: state.tasks.filter((t) => t.id !== id),
          };
        }),
      removeDuplicatedTasks: () =>
        set((state) => {
          const currentUserId = useUsersStore.getState().currentUserId;
          const userTasks = getTasksListByUserID(state.tasks, currentUserId);
          return {
            tasks: removeDuplicates(userTasks, "title"),
          };
        }),
      removeCompletedTasks: () =>
        set((state) => {
          const currentUserId = useUsersStore.getState().currentUserId;
          return {
            tasks: state.tasks.filter(
              ({ isCompleted, userID }) =>
                !isCompleted && userID === currentUserId
            ),
          };
        }),
      removeAllTasks: () =>
        set((state) => {
          const currentUserId = useUsersStore.getState().currentUserId;
          const userTasks = getTasksListByUserID(state.tasks, currentUserId);

          return {
            tasks: state.tasks.filter(
              ({ id }) => !userTasks.some((task) => task.id === id)
            ),
          };
        }),
      setSearchValue: (value: string) => set({ searchValue: value }),
      clearStatus: () => set({ status: null }),
    }),
    { name: "tasks-store" }
  )
);
