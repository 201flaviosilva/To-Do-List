import { useCallback, useState } from "react";
import { GoPlus } from "react-icons/go";
import { addNewTask } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";
import ActionButtons from "./components/ActionButtons";
import TasksList from "./components/TasksList";
import { CreateTask, Wrapper } from "./styled";

export default function Home() {
	const dispatch = useAppDispatch();
	const [title, setTitle] = useState("");

	const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(addNewTask({
			title: title || "Untitled",
			isCompleted: false,
			isFavorite: false,
		}));
		setTitle("");
	}, [dispatch, title]);

	return (
		<Wrapper>
			<ActionButtons />

			<CreateTask.Form onSubmit={onSubmit}>
				<CreateTask.Input
					placeholder="New Task"
					maxLength={50}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<CreateTask.Button type="submit"><GoPlus /></CreateTask.Button>
			</CreateTask.Form>

			<TasksList />
		</Wrapper >
	);
}


