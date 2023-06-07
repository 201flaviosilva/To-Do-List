import { DeleteIcon } from "../../../components/Task/Icons";

const meta = {
	title: "components/Task/Delete Icon",
	component: DeleteIcon,
	tags: ["autodocs"],
	argTypes: {
		isHouver: { type: "boolean" },
	},
};

export default meta;

export const NotHouver = {
	args: { isHouver: false, },
};

export const IsHouver = {
	args: { isHouver: true, },
};

