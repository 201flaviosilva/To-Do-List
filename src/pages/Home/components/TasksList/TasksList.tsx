import { useEffect, useState } from "react";

import { Task } from "@/components";
import { Task as TaskType, useTasksStore } from "@/store";

import { EmptyText, StyledList } from "../../styled";

export function TasksList() {
  const tasks = useTasksStore((store) => store.tasks);
  const searchValue = useTasksStore((store) => store.searchValue);

  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasks);

  useEffect(() => {
    // Filter By Search
    const filterByName = searchValue
      ? tasks.filter(({ title }) =>
          title.toUpperCase().includes(searchValue.toUpperCase())
        )
      : tasks;

    // Sort By Favorite
    setFilteredTasks(
      filterByName.sort((a, b) => {
        if (a.isFavorite && !b.isFavorite) return -1;
        else if (!a.isFavorite && b.isFavorite) return 1;
        else return 0;
      })
    );
  }, [tasks, searchValue]);

  if (!filteredTasks.length) return <EmptyText>Empty tasks</EmptyText>;

  return (
    <StyledList>
      <ul>
        {filteredTasks.map((task: TaskType) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </StyledList>
  );
}
