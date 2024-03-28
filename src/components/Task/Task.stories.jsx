import { withPadding } from "../../stories/withPadding";
import Task from ".";

export default {
	title: "Components / Task",
	component: Task,
	tags: ["autodocs"],
	decorators: [withPadding,],
};

export const Default = {
	args: {
		id: "1",
		title: "My Task",
		isFavorite: false,
		isCompleted: false,
	},
};

export const Favorite = {
	args: {
		id: "2",
		title: "My Task - Favorite",
		isFavorite: true,
		isCompleted: false,
	},
};

export const Completed = {
	args: {
		id: "3",
		title: "My Task - Completed",
		isFavorite: false,
		isCompleted: true,
	},
};


