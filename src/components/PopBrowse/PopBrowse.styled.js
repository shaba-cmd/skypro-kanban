import styled, { css } from "styled-components";

export const Browse = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
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
    background: ${({ theme }) => theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.8)'};

    @media screen and (max-width: 660px) {
        padding: 20px 16px 40px;
        justify-content: flex-start;
    }
`

export const Block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ theme }) => theme === 'light' ? '#FFFFFF' : '#20202C'};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid ${({ theme }) => theme === 'light' ? '#D4DBE5' : '#4E5566'};
    position: relative;

    @media screen and (max-width: 660px) {
        border-radius: 0;
        max-width: 100%;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`

export const Content = styled.div`
    display: block;
    text-align: left;

    & ._mb {     
        margin-bottom: 14px;    
    }

    & .pop-browse__btn-browse, .pop-browse__btn-edit {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
    }

    @media screen and (max-width: 495px) {
        & .pop-browse__btn-browse a {
            width: 100%;
        }
    }
`

export const TopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;

    @media screen and (max-width: 495px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`

export const Status = styled.div`
    margin-bottom: 11px;

    & > p {
        margin-bottom: 14px;
    }
`

export const Themes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Theme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;

    & p {
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
    }

    @media screen and (max-width: 495px) {
        padding: 8px 12px;
        margin-right: 5px;
        margin-bottom: 5px;

        & p {
            font-size: 12px;
        }
    }
`

export const Ttl = styled.h3`
    color: ${({ theme }) => theme === 'light' ? '#000' : '#fff'};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;

    @media screen and (max-width: 495px) {
        font-size: 18px;
        line-height: 22px;
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

export const CatP = styled.p`
    margin-bottom: 14px;
`

export const CatTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;

    & p {
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      white-space: nowrap;
    }

    @media screen and (max-width: 495px) {
        height: 26px;
        padding: 6px 14px;

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

    & .form-browse__block {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 660px) {
        max-width: 100%;
        margin-bottom: 16px;
    }

    @media screen and (max-width: 495px) {
        max-width: 100%;
    }
`

export const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const Textarea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: ${({ theme }) => theme === 'light' ? '#EAEEF6' : '#151419'};
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;
    color: ${({ theme }) => theme === 'dark' ? '#fff' : 'inherit'};

    &::placeholder, &::-moz-placeholder {
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
        max-width: 100%;
        height: 100px;
    }
`

export const Button = styled.button`
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
    border-radius: 4px;

    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
    }

    &.active {
        ${({ $type }) => !$type 
            ? css`
                background-color: ${({ theme }) => theme === 'light' ? '#dddddd' : '#151419'};
                color: gray;
                border: 0.7px solid gray;
                cursor: default;
            `
            : css`
                border-radius: 4px;
                border: 0.7px solid var(--palette-navy-60, #565EEF);
                outline: none;
                background: transparent;
                color: #565EEF;
                
                &:hover {
                    background-color: #33399b;
                    color: #FFFFFF;
                }
            `
        }
    }

    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
        margin-right: 0px;
        margin-bottom: 8px;
    }
`

export const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    @media screen and (max-width: 495px) {
        width: 100%;
        flex-direction: column;
        gap: 0;
    }
`

export const Error = styled.p`
    color: red;
    font-size: 14px;
`