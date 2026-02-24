import styled from "styled-components";

export const Content = styled.div<{ $active?: boolean; $basket?: boolean }>`
    position: absolute;
    left: 15px;
    top: 85px;

    width: ${({ $basket }) => ($basket ? "calc(100% - 30px - 20dvw - 15px)" : "calc(100% - 30px)")};
    height: ${(props) => (props.$active ? "40dvh" : "0")};
    opacity: ${(props) => (props.$active ? 1 : 0)};

    transition: all .3s ease;
    will-change: height, opacity;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 30px;
    
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background: #ffffff;

`;

export const Categories = styled.ul`
    height: 100%;

    display: grid;
    grid-auto-rows: 40px;
    
    overflow-y: auto;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
`;
export const Category = styled.li<{ $active?: boolean }>`
    width: 100%;
    
    button {
        width: 100%;
        height: 100%;
        border-radius: 0;

        background: ${(params) => (params.$active ? params.theme.colors.primary : "unset")};
        border: none;
        color: ${(params) => (params.$active ? "#ffffff" : "unset")};
    }

    &:hover button {
        background: ${(props) => props.theme.colors.primary};
        color: #ffffff;
    }
`;

export const SubCategories = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: calc(50% - 15px);
    gap: 30px;

    overflow-y: auto;
`;
export const SubCategory = styled.button<{ $active?: boolean }>`
    height: 100%;

    color: ${(params) => (params.$active ? "#ffffff" : "unset")};
    border-color: ${({ $active, theme }) => ($active ? "none" : theme.colors.secondary)};
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : "unset")};

    &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: #ffffff;
    }
`;
