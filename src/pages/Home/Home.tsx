import { useCallback, useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import type { Task as TaskType } from "../../actions/tasks";
import { addNewTask, selectCurrentUserTasks } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";
import Task from "../../components/Task";
import { CreateTask, EmptyText, StyledList, Wrapper } from "./styled";

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
		<Wrapper>
			<CreateTask.Form onSubmit={onSubmit}>
				<CreateTask.Input
					maxLength={50}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<CreateTask.Button type="submit"><GoPlus /></CreateTask.Button>
			</CreateTask.Form>

			<TasksList />
		</Wrapper >
	);
}

function TasksList() {
	const tasks = useSelector(selectCurrentUserTasks);
	const [filteredTasks, setFilteredTasks] = useState(tasks);

	useEffect(() => {
		setFilteredTasks([...tasks].sort((a, b) => {
			if (a.isFavorite && !b.isFavorite) return -1;
			else if (!a.isFavorite && b.isFavorite) return 1;
			else return 0;
		}));
	}, [tasks]);

	if (!filteredTasks.length) return <EmptyText>Empty tasks</EmptyText>;

	return (
		<StyledList>
			<ul>
				{filteredTasks.map((task: TaskType) => <Task key={task.id} {...task} />)}
			</ul>
		</StyledList>
	);
}
