import { Button } from "../styled";

const meta = {
	title: "Components / Task / Styled/Button",
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

