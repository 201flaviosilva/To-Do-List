import Task from "../../../components/Task";

const meta = {
	title: "components/Task/Task",
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

