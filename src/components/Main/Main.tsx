import { ReactNode } from "react";

import { StyledMain } from "./styled";

export type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}
