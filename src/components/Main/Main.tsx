import { ReactNode } from "react";
import { StyledMain } from "./styled";

export default function Main({ children }: { children: ReactNode }) {
	return (<StyledMain>{children}</StyledMain>);
}
