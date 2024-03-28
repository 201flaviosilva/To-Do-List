import { useEffect } from "react";
import { TasksList } from ".";

export default {
	title: "Pages / Home / TasksList",
	component: TasksList,
	decorators: [],
};

export const Default = () => {
	useEffect(() => {
		alert("Please add a task on (Pages/Home) to see the list working.");
	}, []);

	return (
		<TasksList />
	);
};

