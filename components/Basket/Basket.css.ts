import styled from "styled-components";

export const Content = styled.div<{ $active?: boolean }>`
    position: fixed;
    top: 85px;
    right: 15px;

    height: calc(100% - 85px - 15px);
    width: ${({ $active }) => ($active ? "20dvw" : "0")};
    overflow: hidden;

    transition: all .3s ease;
    will-change: width, opacity;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    padding: 10px;
    background: #ffffff;
`;
