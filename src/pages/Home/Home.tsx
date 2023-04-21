import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import type { Task as TaskType } from "../../actions/tasks";
import { addNewTask, selectCurrentUserTasks } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";
import Task from "../../components/Task";

export default function Home() {
	const dispatch = useAppDispatch();
	const tasks = useSelector(selectCurrentUserTasks);
	const [title, setTitle] = useState("");

	function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		dispatch(addNewTask({ title, isCompleted: false, isFavorite: false }));
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button type="submit"><GoPlus /></button>
			</form>

			<ul>
				{tasks.length === 0 && <>
					<p>No tasks were</p>
				</>}
				{tasks.map((task: TaskType) => <Task key={task.id} {...task} />)}
			</ul>
		</div >
	);
}
