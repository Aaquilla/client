import styled from "styled-components";

export const Catalog = styled.div<{ $active?: boolean }>`
    width: 100%;
    height: ${(props) => (props.$active ? "40dvh" : "0")};

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 30px;

    opacity: ${(props) => (props.$active ? 1 : 0)};

    transition: all .3s ease;
`;

export const Categories = styled.ul`
    margin-top: 10px;
    height: calc(100% - 10px);
    
    overflow-y: auto;
`;
export const Category = styled.li<{ $active?: boolean }>`
    height: 40px;
    width: 100%;
    
    button {
        width: 100%;
        height: 100%;
        border-radius: 0;

        background: ${(params) => (params.$active ? params.theme.colors.primary : "unset")};
        color: ${(params) => (params.$active ? "#ffffff" : "unset")};
    }

    &:nth-child(1) button {
        border-radius: 10px 10px 0 0;
    }
    &:nth-last-child(1) button {
        border-radius: 0 0 10px 10px;
    }
    &:not(:nth-child(1)) button {
        border-top: none;
    }
    &:hover button {
        background: ${(props) => props.theme.colors.primary};
        color: #ffffff;
    }
`;

export const SubCategories = styled.div`
    margin-top: 10px;
    height: calc(100% - 10px);
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 240px;
    gap: 30px;

    overflow-y: auto;
`;
export const SubCategory = styled.button`
    border-color: ${(props) => props.theme.colors.secondary};

    &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: #ffffff;
    }
`;
