import { useState } from "react";

import { CompletedIcon, DeleteIcon, FavoriteIcon } from "./components";
import { Button, Div, Wrapper } from "./styled";

import { useTask } from "./hooks";
import type { TaskProps } from "./types";

export function Task({ id, title, isFavorite, isCompleted }: TaskProps) {
  const [isHouver, setIsHouver] = useState(false);
  const { changeProp, deleteTask } = useTask();

  function handleChangeTitleDoubleClick() {
    const newTitle = prompt("New task title", title) || title;
    if (newTitle !== title) changeProp(id, "title", newTitle);
  }

  return (
    <Wrapper>
      <Div isLeft={true}>
        <Button
          isActive={isFavorite}
          onClick={() => changeProp(id, "isFavorite", !isFavorite)}
        >
          <FavoriteIcon isFavorite={isFavorite} />
        </Button>
        <span
          className={isCompleted ? "completed" : ""}
          title="Double click to change task title"
          onDoubleClick={handleChangeTitleDoubleClick}
        >
          {title}
        </span>
      </Div>

      <Div>
        <Button onClick={() => changeProp(id, "isCompleted", !isCompleted)}>
          <CompletedIcon isCompleted={isCompleted} />
        </Button>
        <Button
          title="Delete task"
          isActive={isHouver}
          onClick={() => deleteTask(id)}
          onMouseEnter={() => setIsHouver(true)}
          onMouseLeave={() => setIsHouver(false)}
        >
          <DeleteIcon isHouver={isHouver} />
        </Button>
      </Div>
    </Wrapper>
  );
}

Task.displayName = "Task";
