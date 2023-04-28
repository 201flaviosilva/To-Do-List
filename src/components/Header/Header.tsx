import { useState, useRef, useCallback, useEffect } from "react";
import { GoPerson, GoSearch, GoHome } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { changeSearchValue } from "../../actions/tasks";
import { useAppDispatch } from "../../app/hooks";
import { PAGES } from "../../ENUMS";
import { Input, StyledHeader } from "./styled";

export default function Header() {
	const localization = useLocation();

	return (
		<StyledHeader>
			<h1>To Do List</h1>

			{localization.pathname === PAGES.HOME && (
				<>
					<Search />
					<Link to={PAGES.ACCOUNT}><GoPerson size={32} /></Link>
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

function Search() {
	const dispatch = useAppDispatch();

	const inputRef = useRef<HTMLInputElement>(null);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchTask, setSearchTask] = useState("");

	const handleSearchIconClick = useCallback(() => {
		setIsSearchOpen(true);
		inputRef.current?.focus();
	}, [inputRef]);

	useEffect(() => {
		dispatch(changeSearchValue({ value: searchTask }));
	}, [dispatch, searchTask]);

	return (
		<div>
			{!isSearchOpen && !searchTask && <GoSearch
				onClick={handleSearchIconClick}
				size={28}
			/>}
			<Input
				type="search"
				placeholder="Search for a task"
				ref={inputRef}
				isActive={isSearchOpen || !!searchTask}
				value={searchTask}
				onChange={(e) => setSearchTask(e.target.value)}
				onBlur={() => setIsSearchOpen(false)}
			/>
		</div>
	);
}
