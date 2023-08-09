import { CompletedIcon } from "../Icons";

const meta = {
	title: "Components / Task / Completed Icon",
	component: CompletedIcon,
	tags: ["autodocs"],
	argTypes: {
		isCompleted: { type: "boolean" },
	},
};

export default meta;

export const Incomplete = {
	args: { isCompleted: false, },
};

export const IsCompleted = {
	args: {
		isCompleted: true,
	},
};

