import { GoHome } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { PAGES } from "../../types/enums";
import { Search, UserHomePageIcon } from "./components";
import { StyledHeader } from "./styled";

export default function Header() {
	const localization = useLocation();

	console.log(localization.pathname);


	return (
		<StyledHeader>
			<h1>To Do List</h1>

			{localization.pathname === PAGES.HOME && (
				<>
					<Search />
					<UserHomePageIcon />
				</>
			)}

			{localization.pathname === PAGES.ACCOUNT && (
				<>
					<Link to={PAGES.HOME}><GoHome size={32} /></Link>
				</>
			)}

		</StyledHeader>
	);
}
