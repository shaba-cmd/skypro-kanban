import styled from "styled-components";

export const SCalendar = styled.div`
    width: 182px;
    margin-bottom: 20px;

    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;

        &.date-create {
            display: none;
            margin-bottom: 7px;
        }
    }

    @media screen and (max-width: 495px) {
        width: 100%;
    }
`

export const Ttl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`

export const Block = styled.div`
    display: block;
`

export const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`

export const Month = styled.div`
    color: #94A6BE;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;

    @media screen and (max-width: 495px) {
        font-size: 16px;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`

export const Action = styled.div`
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        fill: #94A6BE;
    }

    @media screen and (max-width: 495px) {
        width: 24px;
        height: 32px;

        & svg {
            width: 16px;
            height: 16px;
        }
    }
`

export const Content = styled.div`
    margin-bottom: 12px;

    @media screen and (max-width: 495px) {
        margin-bottom: 16px;
    }
`

export const DaysNames = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }

    @media screen and (max-width: 495px) {
        margin: 10px 0;
    }
`

export const DayName = styled.div`
    color: #94A6BE;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;

    @media screen and (max-width: 660px) {
        font-size: 14px;
    }

    @media screen and (max-width: 495px) {
        font-size: 12px;
    }

    @media screen and (max-width: 375px) {
        font-size: 10px;
    }
`

export const Cells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 660px) {
        width: 344px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    @media screen and (max-width: 495px) {
        width: 100%;
        justify-content: flex-start;
        gap: 4px;
    }

    @media screen and (max-width: 375px) {
        gap: 2px;
        justify-content: space-between;
    }
`

export const Cell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;

    @media screen and (max-width: 660px) {
        width: 42px;
        height: 42px;
        font-size: 14px;
    }

    @media screen and (max-width: 495px) {
        width: 36px;
        height: 36px;
        font-size: 13px;
        margin: 0;
    }

    @media screen and (max-width: 375px) {
        width: 32px;
        height: 32px;
        font-size: 12px;
    }

    &:hover {
        background-color: ${({theme}) => theme === 'light' ? '#EAEEF6' : '#151419'};
    }

    &.active {
        background-color: #94A6BE;
        color: ${({theme}) => theme === 'light' ? '#FFFFFF' : '#151419'};
    }

    &.current {
        font-weight: 700;
    }

    &.other-month {
        opacity: 0;
    }
`

export const Period = styled.div`
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`

export const Text = styled.p`
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;

    & span {
        color: ${({theme}) => theme === 'light' ? '#000000' : '#FFFFFF'};
    }

    @media screen and (max-width: 660px) {
        font-size: 14px;
    }

    @media screen and (max-width: 495px) {
        font-size: 12px;
    }
`