import { ReactNode } from "react";

import { StyledMain } from "./styled";

type MainProps = {
	children: ReactNode
};

export default function Main({ children }: MainProps) {
	return <StyledMain>{children}</StyledMain>;
}
