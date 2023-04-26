import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const CreateTask = {
  Form: styled.form`
    display: flex;
    width: 50%;
    align-items: center;
    gap: 8px;
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

  @media only screen and (max-width: 600px) {
    & {
      width: 90%;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
