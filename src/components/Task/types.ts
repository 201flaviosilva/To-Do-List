import type { SimpleTask } from "../../actions/tasks";

export type TaskProps = SimpleTask & {
  id: string;
};
