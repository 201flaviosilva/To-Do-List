import { useCallback, useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import type { Task as TaskType } from "../../actions/tasks";
import { addNewTask, selectCurrentUserTasks } from "../../actions/tasks";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
					placeholder="New Task"
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
	const searchValue: string = useAppSelector((state) => state.tasks.searchValue);
	const [filteredTasks, setFilteredTasks] = useState(tasks);


	useEffect(() => {
		// Filter By Search
		const filterByName = searchValue ? tasks.filter(({ title }) => title.toUpperCase().includes(searchValue.toUpperCase())) : tasks;

		// Sort By Favorite
		setFilteredTasks(filterByName.sort((a, b) => {
			if (a.isFavorite && !b.isFavorite) return -1;
			else if (!a.isFavorite && b.isFavorite) return 1;
			else return 0;
		}));
	}, [tasks, searchValue]);

	if (!filteredTasks.length) return <EmptyText>Empty tasks</EmptyText>;

	return (
		<StyledList>
			<ul>
				{filteredTasks.map((task: TaskType) => <Task key={task.id} {...task} />)}
			</ul>
		</StyledList>
	);
}
