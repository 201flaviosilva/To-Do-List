import styled, { css } from "styled-components";

import { BaseColors } from "@/types";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: ${BaseColors.gray900};

  @media only screen and (max-width: 768px) {
    & {
      padding: 4px 0;
      width: 100%;
      flex-direction: column;
    }
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const inputIsActive = css`
  flex: 1;
  visibility: visible;
`;
const inputIsNotActive = css`
  width: 0;
  visibility: hidden;
`;
interface InputProps {
  isActive: boolean;
}
export const Input = styled.input<InputProps>`
  ${({ isActive }) => (isActive ? inputIsActive : inputIsNotActive)}

  font-size: 16px;
  padding: 4px 8px;
  transition: 0.5s;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
