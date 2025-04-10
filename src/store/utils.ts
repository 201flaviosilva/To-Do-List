import { DEFAULT_USERS_IDS } from "@/types";

import type { Task } from "./tasks.store";

export function getTasksListByUserID(tasks: Task[], currentUserID: string) {
  return currentUserID === DEFAULT_USERS_IDS.ADMIN
    ? tasks
    : tasks.filter((task) => task.userID === currentUserID);
}
