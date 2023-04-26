import { useCallback, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import type { Task as TaskType } from "../../actions/tasks";
import { addNewTask, selectCurrentUserTasks } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";
import Task from "../../components/Task";

export default function Home() {
	const dispatch = useAppDispatch();
	const [title, setTitle] = useState("");

	const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(addNewTask({
			title: title || "Untitled",
			isCompleted: false,
			isFavorite: false,
		}));
		setTitle("");
	}, [dispatch, title]);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button type="submit"><GoPlus /></button>
			</form>

			<TasksList />

		</div >
	);
}

function TasksList() {
	const tasks = useSelector(selectCurrentUserTasks);

	if (!tasks.length) return <p>Empty tasks</p>;

	return (
		<ul>
			{tasks.map((task: TaskType) => <Task key={task.id} {...task} />)}
		</ul>
	);
}
