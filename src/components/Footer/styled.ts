import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 10px;
  right: 20px;

  svg {
    transition: 1s;
  }

  @media only screen and (max-width: 600px) {
    & {
      right: 10px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
