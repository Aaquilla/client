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

    & a {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: start;
        gap: 15px;

        padding: 0 20px;

        border-radius: 15px;
        border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.secondary)};

        font-weight: ${({ $active }) => ($active ? 500 : 400)};

        & span {
            color: ${({ $active, theme }) => ($active ? "#ffffff" : theme.colors.primary)};
            background: ${({ $active, theme }) => ($active ? theme.colors.primary : "unset")};
        }
    }
`;

export const ItemIcon = styled.span`
    width: max-content;
    height: max-content;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
`;
