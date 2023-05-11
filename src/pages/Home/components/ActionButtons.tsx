import { useState, useRef, useEffect } from "react";
import { GiNuclearBomb } from "react-icons/gi";
import { GoChevronDown, GoChevronUp, GoChecklist } from "react-icons/go";
import { HiDocumentDuplicate } from "react-icons/hi";
import { removeAllTasks, removeCompletedTasks, removeDuplicatedTasks } from "../../../actions/tasks";
import { useAppDispatch } from "../../../app/hooks";
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


function SectionDelete() {
	const dispatch = useAppDispatch();

	function handleClickDuplicated() {
		dispatch(removeDuplicatedTasks());
	}

	function handleClickCompleted() {
		dispatch(removeCompletedTasks());
	}

	function handleClickRemoveAll() {
		dispatch(removeAllTasks());
	}

	return (
		<Styles.Section color="danger">
			<Styles.SectionTitle>Delete</Styles.SectionTitle>
			<Styles.ButtonsGroup>
				<Styles.Button title="Remove All Repeated Tasks" onClick={handleClickDuplicated}><HiDocumentDuplicate size={ICON_SIZE} /></Styles.Button>
				<Styles.Button title="Remove All Completed Tasks" onClick={handleClickCompleted}><GoChecklist size={ICON_SIZE} /></Styles.Button>
				<Styles.Button title="Remove All Tasks" onClick={handleClickRemoveAll}><GiNuclearBomb size={ICON_SIZE} /></Styles.Button>
			</Styles.ButtonsGroup>
		</Styles.Section>
	);
}
