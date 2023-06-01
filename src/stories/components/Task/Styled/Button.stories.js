import { Button } from "../../../../components/Task/styled";

const meta = {
	title: "components/Task/Styled/Button",
	component: Button,
	tags: ["autodocs"],
	args: {
		children: "",
	},
	argTypes: {
		isActive: { type: "boolean", },
	},
};

export default meta;

export const Default = {
	args: { isActive: false },
};

export const Active = {
	args: { isActive: true },
};

