import { useState } from "react";
import { GoCheck, GoTrashcan, GoAlert, GoDash } from "react-icons/go";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import type { TaskProp, Task as TaskType } from "../../actions/tasks";
import { changeIndividualProp } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";
import { Button, Div, Wrapper } from "./styled";

const ICON_SIZE = 18;

export default function Task({ id, title, isFavorite, isCompleted }: TaskType) {
	const [isHouver, setIsHouver] = useState(false);
	const dispatch = useAppDispatch();

	function changeProp(id: string, prop: keyof TaskProp, value: string | boolean) {
		dispatch(changeIndividualProp({
			id,
			change: { prop, value, }
		}));
	}

	function onChangeTitleDoubleClick() {
		const newTitle = prompt("New task title", title) || title;
		if (newTitle !== title) changeProp(id, "title", newTitle);
	}

	return (
		<Wrapper>
			<Div isLeft={true}>
				<Button
					isActive={isFavorite}
					onClick={() => changeProp(id, "isFavorite", !isFavorite)}>
					<FavoriteIcon isFavorite={isFavorite} />
				</Button>
				<span
					className={isCompleted ? "completed" : ""}
					title="Double click to change task title"
					onDoubleClick={onChangeTitleDoubleClick}>{title}</span>
			</Div>

			<Div>
				<Button onClick={() => changeProp(id, "isCompleted", !isCompleted)}>
					<CompletedIcon isCompleted={isCompleted} />
				</Button>
				<Button
					title="Delete task"
					isActive={isHouver}
					onMouseEnter={() => setIsHouver(true)}
					onMouseLeave={() => setIsHouver(false)}
				><DeleteIcon isHouver={isHouver} /></Button>
			</Div>
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
