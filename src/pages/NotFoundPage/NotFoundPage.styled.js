import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Home = styled(Link) `
    color: ${({theme}) => theme === 'light' ? '#000' : '#FFF'};
    font-size: 13px;
    text-decoration: underline;
    margin-top: 15px;
    transition: all .1s ease-in-out;

    &:hover {
        color: #4173ff;
    }
`