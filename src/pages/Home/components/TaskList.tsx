import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { Task as TaskType } from "../../../actions/tasks";
import { selectCurrentUserTasks } from "../../../actions/tasks";
import { useAppSelector } from "../../../app/hooks";
import Task from "../../../components/Task";
import { EmptyText, StyledList } from "../styled";

export default function TasksList() {
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
