import { useCallback } from "react";

import { SimpleTask, useTasksStore } from "@/store";

/**
 * Hook to change an individual property of a task.
 * @returns {Object} An object containing the `changeProp` function.
 */
export function useChangeProp() {
  const changeIndividualProp = useTasksStore(
    (state) => state.changeIndividualProp
  );

  /**
   * Change an individual property of a task.
   * @param {string} id - The ID of the task.
   * @param {string} prop - The property to change.
   * @param {string|boolean} value - The new value of the property.
   */
  const changeProp = useCallback(
    (id: string, prop: keyof SimpleTask, value: string | boolean) => {
      changeIndividualProp({
        id,
        change: { prop, value },
      });
    },
    [changeIndividualProp]
  );

  return { changeProp };
}

/**
 * Hook to delete a task.
 * @returns {Object} An object containing the `deleteTask` function.
 */
export function useDeleteTask() {
  const removeTask = useTasksStore((state) => state.removeTask);

  /**
   * Delete a task.
   * @param {string} id - The ID of the task to delete.
   */
  const deleteTask = useCallback(
    (id: string) => {
      removeTask(id);
    },
    [removeTask]
  );

  return { deleteTask };
}
