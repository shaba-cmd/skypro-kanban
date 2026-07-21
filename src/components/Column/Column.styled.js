import styled from "styled-components";

export const SColumn = styled.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`;

export const Title = styled.div`
    padding: 0 10px;
    margin: 15px 0;

    & p {
        color: #94A6BE;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }
`;

export const Cards = styled.div`
    min-height: 78vh;
    display: block;
    position: relative;
    transition: background 0.2s;
    ${({ $isOver }) => $isOver && `
        background: rgba(86, 94, 239, 0.1);
        border-radius: 8px; 
    `}

    @media screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
        min-height: 100px;
        scrollbar-width: none;
        -ms-overflow-style: none;
        
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;