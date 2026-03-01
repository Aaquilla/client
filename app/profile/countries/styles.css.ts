import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    overflow: hidden;
`;
