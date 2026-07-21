import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPopExit = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.8)'};
`;

export const Block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({theme}) => theme === 'light' ? '#FFFFFF' : '#20202C'};
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid ${({theme}) => theme === 'light' ? '#D4DBE5' : '#4E5566'};
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

   @media only screen and (max-width: 375px) {
        padding: 50px 20px;
    }
`;

export const Titile = styled.div`
    & h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.4px;
        margin-bottom: 20px;
    }
`;

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 375px) {
        display: block;
    }
`;

export const ExitYes = styled.button`
    width: 153px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    margin-right: 10px;
    transition: all .1s ease-in-out;

    &:hover{background-color: #33399b;}

    & p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

export const ExitNo = styled(Link)`
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid ${({theme}) => theme === 'light' ? 'var(--palette-navy-60, #565EEF)' : 'var(--palette-navy-60, #FFFFFF)'};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: ${({theme}) => theme === 'light' ? '#565EEF' : 'var(--palette-navy-60, #FFFFFF)'};
    transition: all .1s ease-in-out;

    &:hover{
        background-color: #33399b;
        color: #FFFFFF;
    }

    & p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
    }
`;