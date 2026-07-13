import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewCard = styled.div`
    width: 100%;
    min-width: 320px;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.8)'};

    @media screen and (max-width: 660px) {
        padding: 20px 16px 40px;
        justify-content: flex-start;
    }
`

export const Block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({theme}) => theme === 'light' ? '#FFFFFF' : '#20202C'};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid ${({theme}) => theme === 'light' ? '#D4DBE5' : '#4E5566'};
    position: relative; 
    ${({theme}) => theme === 'dark' && 'box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);'}

    @media screen and (max-width: 660px) {
        max-width: 100%;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`

export const Content = styled.div`
    display: block;
    text-align: left;
`

export const Ttl = styled.h3`
    color: ${({theme}) => theme === 'light' ? '#000' : '#FFF'};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 16px;
    }
`

export const Close = styled(Link)`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:hover {
        color: ${({theme}) => theme === 'light' ? '#000000' : '#FFFFFF'};
    }

    @media screen and (max-width: 495px) {
        top: 16px;
        right: 16px;
    }
`

export const Wrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`

export const Categories = styled.div`
    margin-bottom: 20px;
`

export const CatP = styled.p`
    margin-bottom: 14px;
`

export const Themes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width: 495px) {
        flex-wrap: wrap;
        gap: 8px;
    }
`

export const Theme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    cursor: pointer;

    & p {
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      white-space: nowrap;
    }

    @media screen and (max-width: 495px) {
        height: 26px;
        padding: 6px 14px;
        margin-right: 0;

        & p {
            font-size: 12px;
            line-height: 12px;
        }
    }
`

export const Form = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 660px) {
        max-width: 100%;
        margin-bottom: 16px;
    }
`

export const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 20px 0;
    color: ${({theme}) => theme === 'dark' ? '#FFFFFF' : 'inherit'};

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    @media screen and (max-width: 495px) {
        padding: 12px;
        margin: 16px 0;
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    color: ${({theme}) => theme === 'dark' ? '#FFFFFF' : 'inherit'};

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    @media screen and (max-width: 660px) {
        max-width: 100%;
    }

    @media screen and (max-width: 495px) {
        height: 100px;
        margin-top: 10px;
    }
`

export const Create = styled(Link)`
    width: 132px;
    padding: 8px 0;
    background-color: #565EEF;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1;
    color: #FFFFFF;
    float: right;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in-out;

    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
        float: none;
        margin-top: 16px;
    }
`

export const Error = styled.p`
    color: red;
    font-size: 14px;
`