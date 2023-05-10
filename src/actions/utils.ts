import type { Task } from "./tasks";
import { DEFAULT_USERS_IDS, LOCAL_STORAGE } from "../types";

export function getTasksListByUserID(tasks: Task[], currentUserID: string) {
  return currentUserID === DEFAULT_USERS_IDS.ADMIN
    ? tasks
    : tasks.filter((task) => task.userID === currentUserID);
}

export function getCurrentUserLS() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.CURRENT_USER) as string);
}
