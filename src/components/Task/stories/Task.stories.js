import Task from "../Task";

const meta = {
	title: "Components / Task / Task",
	component: Task,
	tags: ["autodocs"],
	argTypes: {
		id: { type: "string" },
		title: { type: "string" },
		isFavorite: { type: "boolean" },
		isCompleted: { type: "boolean" },
	},
};

export default meta;

export const Default = {
	args: {
		id: "1",
		title: "My Task",
		isFavorite: false,
		isCompleted: false,
	},
};

