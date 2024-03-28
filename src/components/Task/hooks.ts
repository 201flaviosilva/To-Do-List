import { useCallback } from "react";
import type { SimpleTask } from "../../actions/tasks";
import { changeIndividualProp, removeTask } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";

/**
 * Hook to change an individual property of a task.
 * @returns {Object} An object containing the `changeProp` function.
 */
export function useChangeProp() {
  const dispatch = useAppDispatch();

  /**
   * Change an individual property of a task.
   * @param {string} id - The ID of the task.
   * @param {string} prop - The property to change.
   * @param {string|boolean} value - The new value of the property.
   */
  const changeProp = useCallback(
    (id: string, prop: keyof SimpleTask, value: string | boolean) => {
      dispatch(
        changeIndividualProp({
          id,
          change: { prop, value },
        })
      );
    },
    [dispatch]
  );

  return { changeProp };
}

/**
 * Hook to delete a task.
 * @returns {Object} An object containing the `deleteTask` function.
 */
export function useDeleteTask() {
  const dispatch = useAppDispatch();

  /**
   * Delete a task.
   * @param {string} id - The ID of the task to delete.
   */
  const deleteTask = useCallback(
    (id: string) => {
      dispatch(removeTask({ id }));
    },
    [dispatch]
  );

  return { deleteTask };
}
