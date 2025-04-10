import { AiFillGithub } from "react-icons/ai";

import { StyledFooter } from "./styled";

export function Footer() {
  return (
    <StyledFooter>
      <a
        href="https://github.com/201flaviosilva/To-Do-List"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={32} />
      </a>
    </StyledFooter>
  );
}
