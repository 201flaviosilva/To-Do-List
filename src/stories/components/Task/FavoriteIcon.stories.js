import { FavoriteIcon } from "../../../components/Task/Task";

const meta = {
	title: "components/Task/Favorite Icon",
	component: FavoriteIcon,
	tags: ["autodocs"],
	argTypes: {
		isFavorite: { type: "boolean" },
	},
};

export default meta;

export const NotFavorite = {
	args: { isFavorite: false, },
};

export const IsFavorite = {
	args: { isFavorite: true, },
};

