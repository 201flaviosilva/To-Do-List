import { useState } from "react";
import { Input } from ".";

export default {
	title: "Pages / Account / Input",
	component: Input,
};

export const Default = (args) => {
	const [state, setState] = useState({ name: "", username: "", password: "" });

	console.info(state);

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
