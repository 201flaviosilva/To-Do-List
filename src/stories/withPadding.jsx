import styled from "styled-components";

const Wrapper = styled.div`
    margin: 16px;
`;

export const withPadding = (Story) => {
    return (
        <Wrapper>
            <Story />
        </Wrapper>
    );
};
