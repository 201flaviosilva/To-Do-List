import { useEffect, useRef, useState } from "react";
import { GiNuclearBomb } from "react-icons/gi";
import { GoChecklist, GoChevronDown, GoChevronUp } from "react-icons/go";
import { HiDocumentDuplicate } from "react-icons/hi";

import { useTasksStore } from "@/store";

import { ActionsButtonsStyles as Styles } from "../styled";

const ICON_SIZE = 24;

export default function ActionButtons() {
	const [isOpen, setIsOpen] = useState(false);
	const [maxHeight, setMaxHeight] = useState(0);
	const accordionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (accordionRef.current) setMaxHeight(accordionRef.current.scrollHeight || 0);
	}, []);

	return (
		<Styles.Wrapper isOpen={isOpen}>
			<Styles.Toggle
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ?
					<GoChevronDown size={ICON_SIZE} /> :
					<GoChevronUp size={ICON_SIZE} />
				}
			</Styles.Toggle>

			<Styles.Accordion
				ref={accordionRef}
				isOpen={isOpen}
				height={maxHeight}
			>
				<SectionDelete />
			</Styles.Accordion>
		</Styles.Wrapper>
	);
}


export function SectionDelete() {
	const removeAllTasks = useTasksStore(store => store.removeAllTasks);
	const removeCompletedTasks = useTasksStore(store => store.removeCompletedTasks);
	const removeDuplicatedTasks = useTasksStore(store => store.removeDuplicatedTasks);

	return (
		<Styles.Section color="danger">
			<Styles.SectionTitle>Delete</Styles.SectionTitle>
			<Styles.ButtonsGroup>
				<Styles.Button title="Remove All Repeated Tasks" onClick={removeDuplicatedTasks}><HiDocumentDuplicate size={ICON_SIZE} /></Styles.Button>
				<Styles.Button title="Remove All Completed Tasks" onClick={removeCompletedTasks}><GoChecklist size={ICON_SIZE} /></Styles.Button>
				<Styles.Button title="Remove All Tasks" onClick={removeAllTasks}><GiNuclearBomb size={ICON_SIZE} /></Styles.Button>
			</Styles.ButtonsGroup>
		</Styles.Section>
	);
}
