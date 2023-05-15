import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  min-height: 32px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 4px 8px;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.5s;

  &:nth-child(odd) {
    background-color: var(--lt-color-gray-800);
  }

  &:nth-child(even) {
    background-color: var(--lt-color-gray-700);
  }

  &:hover {
    transform: scale(1.025);
    background-color: var(--lt-color-gray-900);
    border: 1px solid white;

    * {
      color: white;
    }
  }

  @media only screen and (max-width: 425px) {
    & {
      padding: 2px 4px;
    }
  }
`;

interface DivProps {
  isLeft?: boolean;
}
export const Div = styled.div<DivProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: ${({ isLeft }) => isLeft && 1};

  span {
    flex: 1;
    font-size: 16px;
    word-break: break-word;
    cursor: pointer;

    &.completed {
      text-decoration: line-through;
    }
  }
`;

interface ButtonProps {
  isActive?: boolean;
}
export const Button = styled.button<ButtonProps>`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 4px;
  transition: 0.5s;

  background-color: ${({ isActive }) => isActive && "red"};

  &:hover {
    transform: scale(1.1);
  }
`;
