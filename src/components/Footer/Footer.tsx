import { GoMarkGithub } from "react-icons/go";
import { StyledFooter } from "./styled";

export default function Footer() {
	return (
		<StyledFooter>
			<a
				href="https://github.com/201flaviosilva/To-Do-List"
				target="_blank"
				rel="noreferrer"
			>
				<GoMarkGithub size={32} />
			</a>
		</StyledFooter>
	);
}
