import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import type { SimpleUser, UsersStateStore } from "@/store";
import { useUsersStore } from "@/store";
import { PAGES } from "@/types/enums";

import { Input } from "./Components";
import { HTTPCodesMessage } from "./HTTPCodesMessage";
import { Form, FormsContainer, Wrapper } from "./styled";

export default function Account() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ name: "", username: "", password: "" } as SimpleUser);

	const status = useUsersStore((state: UsersStateStore) => state.status);

	const createUser = useUsersStore((state: UsersStateStore) => state.create);
	const login = useUsersStore((state: UsersStateStore) => state.login);
	const clearStatus = useUsersStore((state: UsersStateStore) => state.clearStatus);

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

		return clearStatus;
	}, [clearStatus, navigate, status]);

	const onSubmitLogin = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		login(user);
	}, [login, user]);

	const onSubmitSingUp = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createUser({ ...user });
	}, [createUser, user]);

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
						state={user}
						setState={setUser}
					/>

					<Input
						type="password"
						label="Password"
						title="Password"
						placeholder="Password"
						property="password"
						state={user}
						setState={setUser}
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
						state={user}
						setState={setUser}
					/>

					<Input
						label="Username"
						title="Username"
						placeholder="Username"
						property="username"
						state={user}
						setState={setUser}
					/>

					<Input
						type="password"
						label="Password"
						title="Password"
						placeholder="Password"
						property="password"
						state={user}
						setState={setUser}
					/>

					<button>Create</button>
				</Form>
			</FormsContainer>
		</Wrapper>
	);
}
