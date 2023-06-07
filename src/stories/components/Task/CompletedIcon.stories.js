import { CompletedIcon } from "../../../components/Task/Icons";

const meta = {
	title: "components/Task/Completed Icon",
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

