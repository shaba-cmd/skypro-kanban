import { Link } from "react-router-dom";
import styled from "styled-components";

export const SHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${({theme}) => theme === 'light' ? '#FFFFFF' : '#20202C'};
`;

export const Block = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;

export const Logo = styled(Link)`
    & img {
        width: 85px;
    }
`;

export const Nav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled(Link)`
    width: 178px;
    padding: 6.5px 0;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
    margin-right: 20px;
    text-align: center;

    &:hover{background-color: #33399b;}

    & a {
        color: #FFFFFF;
    }

    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        line-height: 1.8;
        border-radius: 4px;
        margin-right: 0;
    }
`;

export const User = styled.p`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${({theme}) => theme === 'light' ? '#565EEF' : '#FFFFFF'};
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid ${({theme}) => theme === 'light' ? '#565EEF' : '#FFFFFF'};
        border-bottom: 1.9px solid ${({theme}) => theme === 'light' ? '#565EEF' : '#FFFFFF'};
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }

    &:hover {color: #33399b;}
`;