import { ActionButtons, SectionDelete } from ".";

export default {
	title: "Pages / Home / ActionButtons",
	subcomponents: { SectionDelete },
	tags: ["autodocs"],
	component: ActionButtons,
	decorators: [],
};

export const FullComponent = {};

export const OnlySectionDelete = () => {
	return (
		<>
			<SectionDelete />
		</>
	);
};
