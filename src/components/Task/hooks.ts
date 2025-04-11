import { useCallback } from "react";

import { SimpleTask, useTasksStore } from "@/store";

export function useTask() {
  const changeIndividualProp = useTasksStore(
    (state) => state.changeIndividualProp
  );

  const removeTask = useTasksStore((state) => state.removeTask);

  const changeProp = useCallback(
    (id: string, prop: keyof SimpleTask, value: string | boolean) => {
      changeIndividualProp({
        id,
        change: { prop, value },
      });
    },
    [changeIndividualProp]
  );

  const deleteTask = useCallback(
    (id: string) => {
      removeTask(id);
    },
    [removeTask]
  );

  return { changeProp, deleteTask };
}
