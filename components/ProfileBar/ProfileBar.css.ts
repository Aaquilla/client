import styled from "styled-components";

export const Content = styled.div`
    width: 340px;
`;

export const Items = styled.ul`
    width: 100%;
    height: 100%;

    display: grid;
    grid-auto-rows: 55px;
    gap: 8px;
`;

export const Item = styled.li<{ $active?: boolean }>`
    width: 100%;
    height: 100%;

    & button {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: start;
        gap: 15px;

        border-radius: 15px;
        border-color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.secondary)};
    }
`;
