import styled from "styled-components";

export const SMain = styled.main`
    width: 100%;
`;

export const Block = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`;


export const Empty = styled.p`
    text-align: center;
    margin-top: 80px;
    font-size: 22px;
`;