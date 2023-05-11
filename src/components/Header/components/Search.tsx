import { useState, useRef, useCallback, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { changeSearchValue } from "../../../actions/tasks";
import { useAppDispatch } from "../../../app/hooks";
import { Input, SearchWrapper } from "../styled";

export function Search() {
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
		<SearchWrapper>
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
		</SearchWrapper>
	);
}
