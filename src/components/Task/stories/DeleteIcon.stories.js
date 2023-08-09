import { DeleteIcon } from "../Icons";

const meta = {
	title: "Components / Task / Delete Icon",
	component: DeleteIcon,
	tags: ["autodocs"],
	argTypes: {
		isHouver: { type: "boolean" },
	},
};

export default meta;

export const Normal = {
	args: { isHouver: false, },
};

export const IsHouver = {
	args: { isHouver: true, },
};

