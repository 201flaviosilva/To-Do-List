import { useState, useCallback } from "react";
import { GoPerson, GoSignOut, GoSignIn } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { User, logOut, getCurrentUserData } from "../../../actions/users";
import { useAppDispatch } from "../../../app/hooks";
import { PAGES, DEFAULT_USERS_IDS } from "../../../ENUMS";
import { IconWrapper } from "../styled";

export function UserHomePageIcon() {
	const currentUser: User | undefined = useSelector(getCurrentUserData);
	const [isHouver, setIsHouver] = useState(false);
	const dispatch = useAppDispatch();

	const Icon = useCallback((props: { size: number }) => {
		if (isHouver && currentUser) {
			if (currentUser.id !== DEFAULT_USERS_IDS.GUEST)
				return <GoSignOut
					onClick={() => dispatch(logOut())}
					title="Log Out"
					{...props}
				/>;

			else return <GoSignIn title="Log In" {...props} />;
		} else return <GoPerson {...props} />;
	}, [currentUser, dispatch, isHouver]);

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
