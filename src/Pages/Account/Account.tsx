import { createUser, login } from "../../actions/users";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function Account() {
	const users = useAppSelector((state) => state.users.users);
	const dispatch = useAppDispatch();

	return (
		<>
			<div>Account</div>
			<button onClick={() => dispatch(createUser({ userId: "Beep", password: "" }))}>Create</button>
			<button onClick={() => dispatch(login({ userId: "Guest", password: "" }))}>login</button>
		</>
	);
}
