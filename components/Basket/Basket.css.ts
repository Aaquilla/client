import styled from "styled-components";

export const Content = styled.div<{ $active?: boolean }>`
    position: fixed;
    top: 85px;
    right: 15px;

    height: calc(100% - 85px - 15px);
    width: ${({ $active }) => ($active ? "20dvw" : "0")};
    pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
    overflow: hidden;

    transition: all .3s ease;
    will-change: width, opacity;
    z-index: 100000;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    padding: 10px;
    background: #ffffff;
`;
