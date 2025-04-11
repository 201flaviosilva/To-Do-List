import styled from "styled-components";

import { BaseColors, BaseColorsNames } from "@/types";

export const Wrapper = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

interface ActionButtonsOpenToggleProps {
  isOpen: boolean;
}
interface ActionButtonsSectionProps {
  color?: BaseColorsNames;
}
const TRANSACTION_TIME = "0.5s";
export const ActionsButtonsStyles = {
  Wrapper: styled.aside<ActionButtonsOpenToggleProps>`
    position: absolute; // Relative to the StyledMain component
    top: 0;
    left: 0;

    width: 100%;
    max-width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${({ isOpen }) => (isOpen ? 4 : 0)}px;
    padding: 4px;

    border: 1px solid;
    border-radius: 4px;

    background-color: #242424;
    transition: gap ${TRANSACTION_TIME} ease-out;
    z-index: 1;

    @media only screen and (max-width: 1024px) {
      & {
        top: auto;
        bottom: 0;
        padding: 0;
        max-width: 64px;
      }
    }
  `,

  Toggle: styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Accordion: styled.div<ActionButtonsOpenToggleProps & { height: number }>`
    width: 100%;
    max-height: ${({ isOpen, height }) => (isOpen ? height : "0")}px;
    overflow: hidden;
    transition: ${TRANSACTION_TIME} ease-out;
  `,

  Section: styled.section<ActionButtonsSectionProps>`
    width: 100%;
    border: 1px solid;
    border-radius: 4px;
    padding: 4px;
    background-color: ${({ color }) => (color ? BaseColors[color] : "dark")};
  `,

  SectionTitle: styled.h3`
    text-align: center;
  `,

  ButtonsGroup: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;

    @media only screen and (max-width: 1024px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  `,

  Button: styled.button`
    border: 1px solid;
    border-radius: 4px;
  `,
};

export const CreateTask = {
  Form: styled.form`
    display: flex;
    width: 50%;
    align-items: center;
    gap: 8px;

    @media only screen and (max-width: 768px) {
      & {
        width: 75%;
      }
    }

    @media only screen and (max-width: 425px) {
      & {
        width: 90%;
      }
    }
  `,

  Input: styled.input`
    flex: 1;
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid;
    text-align: center;
    transition: 0.5s;

    &:focus {
      transform: scale(1.02);
      border: 1px solid #ccc;
      font-weight: bold;
    }
  `,

  Button: styled.button`
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
      border: 1px solid #ccc;
    }

    &:active {
      opacity: 0.75;
      transform: scale(0.95);
    }
  `,
};

export const EmptyText = styled.p``;

export const StyledList = styled.div`
  width: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;

  @media only screen and (max-width: 768px) {
    & {
      width: 75%;
    }
  }

  @media only screen and (max-width: 425px) {
    & {
      width: 100%;
      padding: 4px 8px;
      margin-bottom: 32px;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
