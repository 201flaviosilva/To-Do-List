import { useCallback, useState } from "react";
import { GoPlus } from "react-icons/go";

import { useTasksStore } from "@/store";

import { ActionButtons, TasksList } from "./components";
import { CreateTask, Wrapper } from "./styled";

export function Home() {
  const [title, setTitle] = useState("");

  const addNewTask = useTasksStore((store) => store.addNewTask);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addNewTask({
        title: title || "Untitled",
        isCompleted: false,
        isFavorite: false,
      });
      setTitle("");
    },
    [addNewTask, title]
  );

  return (
    <Wrapper>
      <ActionButtons />

      <CreateTask.Form onSubmit={onSubmit}>
        <CreateTask.Input
          placeholder="New Task"
          maxLength={50}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CreateTask.Button type="submit">
          <GoPlus />
        </CreateTask.Button>
      </CreateTask.Form>

      <TasksList />
    </Wrapper>
  );
}
