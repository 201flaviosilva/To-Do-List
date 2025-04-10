import { useEffect } from "react";
import { useSelector } from "react-redux";

import { TasksList } from ".";
import { selectCurrentUserTasks } from "../../../actions/tasks";

export default {
	title: "Pages / Home / TasksList",
	component: TasksList,
};

export const Default = () => {
	const tasks = useSelector(selectCurrentUserTasks);
	useEffect(() => {
		if (!tasks.length) alert("Please add a task on (Pages/Home/Default) to see tasks.");
	}, [tasks.length]);

	return <TasksList />;
};

