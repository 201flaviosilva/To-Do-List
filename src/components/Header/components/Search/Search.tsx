import { useCallback, useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";

import { useTasksStore } from "@/store";

import { Input, SearchWrapper } from "../../styled";

export function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTask, setSearchTask] = useState("");

  const setSearchValue = useTasksStore((state) => state.setSearchValue);

  const handleSearchIconClick = useCallback(() => {
    setIsSearchOpen(true);
    inputRef.current?.focus();
  }, [inputRef]);

  useEffect(() => {
    setSearchValue(searchTask);
  }, [setSearchValue, searchTask]);

  return (
    <SearchWrapper>
      {!isSearchOpen && !searchTask && (
        <GoSearch onClick={handleSearchIconClick} size={28} />
      )}
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
