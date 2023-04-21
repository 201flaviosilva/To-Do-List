import { useState } from "react";
import { GoCheck, GoTrashcan, GoAlert, GoDash } from "react-icons/go";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import type { Task as TaskType } from "../../actions/tasks";
import { toggleFavorite } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";
import { Button, Wrapper } from "./styled";

const ICON_SIZE = 18;

export default function Task({ id, title, isFavorite, isCompleted }: TaskType) {
	const [isHouver, setIsHouver] = useState(false);
	const dispatch = useAppDispatch();

	function onClick(id: string) {
		dispatch(toggleFavorite({ id }));
	}

	return (
		<Wrapper>
			<Button
				isActive={isFavorite}
				onClick={() => onClick(id)}>
				<FavoriteIcon isFavorite={isFavorite} />
			</Button>
			<span>{title}</span>
			<Button>
				<CompletedIcon isCompleted={isCompleted} />
			</Button>
			<Button
				title="Delete task"
				isActive={isHouver}
				onMouseEnter={() => setIsHouver(true)}
				onMouseLeave={() => setIsHouver(false)}
			><DeleteIcon isHouver={isHouver} /></Button>
		</Wrapper >
	);
}

function CompletedIcon({ isCompleted }: { isCompleted: boolean }) {
	return isCompleted ? <GoCheck size={ICON_SIZE} /> : <GoDash size={ICON_SIZE} />;
}

function FavoriteIcon({ isFavorite }: { isFavorite: boolean }) {
	return isFavorite ? <MdFavorite size={ICON_SIZE} /> : <MdOutlineFavoriteBorder size={ICON_SIZE} />;
}

function DeleteIcon({ isHouver }: { isHouver: boolean }) {
	return isHouver ? <GoAlert size={ICON_SIZE} /> : <GoTrashcan size={ICON_SIZE} />;
}
