import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import type { UserProp } from "../../actions/users";
import { clearStatus, createUser, login } from "../../actions/users";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PAGES } from "../../types/enums";
import { Input } from "./Components";
import { HTTPCodesMessage } from "./HTTPCodesMessage";
import { Form, FormsContainer, Wrapper } from "./styled";

export default function Account() {
	const navigate = useNavigate();
	const [state, setState] = useState({ name: "", username: "", password: "" } as UserProp);

	const status: string | null = useAppSelector((state) => state.users.status);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (status) {
			const output = HTTPCodesMessage(status);
			Swal.fire({
				icon: output?.type,
				title: output?.title,
				text: output?.message,
			}).then(() => {
				if (status === "200") navigate(PAGES.HOME);
			});
		}

		return () => { dispatch(clearStatus()); };
	}, [dispatch, navigate, status]);

	const onSubmitLogin = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(login({ ...state }));
	}, [dispatch, state]);

	const onSubmitSingUp = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(createUser({ ...state }));
	}, [dispatch, state]);

	return (
		<Wrapper>
			<h2>Account</h2>
			<FormsContainer>
				<Form onSubmit={onSubmitLogin}>
					<h3>Login</h3>

					<Input
						label="Username"
						title="Username"
						placeholder="Username"
						property="username"
						state={state}
						setState={setState}
					/>

					<Input
						type="password"
						label="Password"
						title="Password"
						placeholder="Password"
						property="password"
						state={state}
						setState={setState}
					/>

					<button>Login</button>
				</Form>

				<Form onSubmit={onSubmitSingUp}>
					<h3>Sign Up</h3>

					<Input
						label="User Name"
						title="User Name"
						placeholder="Name"
						property="name"
						state={state}
						setState={setState}
					/>

					<Input
						label="Username"
						title="Username"
						placeholder="Username"
						property="username"
						state={state}
						setState={setState}
					/>

					<Input
						type="password"
						label="Password"
						title="Password"
						placeholder="Password"
						property="password"
						state={state}
						setState={setState}
					/>

					<button>Create</button>
				</Form>
			</FormsContainer>
		</Wrapper>
	);
}
