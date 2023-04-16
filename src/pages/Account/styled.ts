import styled from "styled-components";

const WHITE = "white";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormsContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

export const Form = styled.form`
  width: 40%;
  height: 50%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 16px;
  box-shadow: 0 0 4px ${WHITE}, 0 0 16px ${WHITE}, 0 0 8px ${WHITE} inset;
  border: 1px solid ${WHITE};
  border-radius: 4px;
  transition: 1s;

  @media only screen and (max-width: 768px) {
    & {
      width: 45%;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 90%;
    }
  }

  &:hover {
    background-color: black;
    transform: scale(1.05);
  }

  h3 {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;

    span {
      margin-left: 4px;
    }

    input {
      padding: 4px;
      font-size: 20px;
      border: 1px solid ${WHITE};
      border-radius: 4px;
      transition: 0.5s;

      &:focus {
        transform: scale(1.025);
      }
    }
  }

  button {
    border: 1px solid ${WHITE};
    border-radius: 4px;
    font-size: 24px;
    transition: 0.5s;

    &:hover {
      background-color: black;
      transform: scale(1.025);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
