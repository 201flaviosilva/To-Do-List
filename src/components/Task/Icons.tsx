import { GoCheck, GoTrashcan, GoAlert, GoDash } from "react-icons/go";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const ICON_SIZE = 18;

export function CompletedIcon({ isCompleted }: { isCompleted: boolean }) {
	return isCompleted ? <GoCheck size={ICON_SIZE} /> : <GoDash size={ICON_SIZE} />;
}

export function FavoriteIcon({ isFavorite }: { isFavorite: boolean }) {
	return isFavorite ? <MdFavorite size={ICON_SIZE} /> : <MdOutlineFavoriteBorder size={ICON_SIZE} />;
}

export function DeleteIcon({ isHouver }: { isHouver: boolean }) {
	return isHouver ? <GoAlert size={ICON_SIZE} /> : <GoTrashcan size={ICON_SIZE} />;
}
