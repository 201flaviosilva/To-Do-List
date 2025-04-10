import { useCallback, useState } from "react";
import { GoPerson, GoSignIn, GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";

import type { UsersStateStore } from "@/store";
import { useUsersStore } from "@/store";
import { DEFAULT_USERS_IDS, PAGES } from "@/types/enums";

import { IconWrapper } from "../styled";

export default function UserHomePageIcon() {
	const [isHouver, setIsHouver] = useState(false);

	const getUserData = useUsersStore((state: UsersStateStore) => state.getUserData);
	const logOut = useUsersStore((state: UsersStateStore) => state.logOut);

	const currentUser = getUserData();

	const Icon = useCallback((props: { size: number }) => {
		if (isHouver && currentUser) {
			if (currentUser.id !== DEFAULT_USERS_IDS.GUEST)
				return <GoSignOut
					onClick={logOut}
					title="Log Out"
					{...props}
				/>;

			else return <GoSignIn title="Log In" {...props} />;
		} else return <GoPerson {...props} />;
	}, [currentUser, logOut, isHouver]);

	return (
		<Link
			to={PAGES.ACCOUNT}
			onMouseEnter={() => setIsHouver(true)}
			onMouseLeave={() => setIsHouver(false)}>
			<IconWrapper>
				<Icon size={32} />
				{currentUser && <p>{currentUser.username}</p>}
			</IconWrapper>
		</Link>
	);
}
