import styled from "styled-components";

interface ButtonProps {
  isActive?: boolean;
}

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
`;

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
