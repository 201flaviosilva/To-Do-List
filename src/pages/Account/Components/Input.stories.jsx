import { useState } from "react";
import { Input } from ".";

export default {
	title: "Pages / Account / Input",
	component: Input,
	decorators: [],
};

export const Default = (args) => {

	const [state, setState] = useState({ name: "", username: "", password: "" });

	console.log(state);

	return (
		<Input
			label="Name"
			property="name"
			state={state}
			setState={setState}
			{...args}
		/>
	);
};
