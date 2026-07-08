import styled from "styled-components";

export const Browse= styled.div `
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`

export const Container= styled.div `
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }
`

export const Block= styled.div `
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;

    @media screen and (max-width: 660px) {
        border-radius: 0;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`

export const Content= styled.div `
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

export const TopBlock= styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`

export const Status= styled.div `
    margin-bottom: 11px;

    & > p {
        margin-bottom: 14px;
    }
`

export const Themes= styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Theme= styled.div `
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
`

export const Ttl= styled.h3 `
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`

export const Wrap= styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`

export const CatP= styled.p `
    margin-bottom: 14px;
`

export const CatTheme= styled.div `
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
`

export const Form = styled.form `
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    & .form-browse__block {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 495px) {
        max-width: 100%;
    }
`

export const FormBlock = styled.div `
    display: flex;
    flex-direction: column;
`

export const Textarea= styled.textarea `
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: #EAEEF6;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;

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
        max-width: 100%;
        height: 34px;
    }
`

export const Button = styled.button `
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
        ${({$type}) => !$type 
            ? ` background-color: #dddddd;
                color: gray;
                border: 0.7px solid gray;
                cursor: default;`

            : ` border-radius: 4px;
                border: 0.7px solid var(--palette-navy-60, #565EEF);
                outline: none;
                background: transparent;
                color: #565EEF;
                
                &:hover {
                    background-color: #33399b;
                    color: #FFFFFF;
                }`
        }
    }

    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
        margin-right: 0px;
    }
`

export const Group = styled.div `
    @media screen and (max-width: 495px) {
        width: 100%;
    }
`

export const Error = styled.p `
    color: red;
    font-size: 14px;
`