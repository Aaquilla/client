import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 30px;

    & .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        padding: 10px 30px;
        font-size: 26px;

        border-radius: 15px;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
    }
`;
