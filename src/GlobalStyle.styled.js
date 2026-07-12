import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: ${({theme}) => theme === 'light' ? '#000' : '#fff'};
    background-color: ${({theme}) => theme === 'light' ? '#EAEEF6' : '#151419'};
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ._hover01:hover {
    background-color: #33399b;
  }

  ._hover02:hover, .header__user:hover {
    color: #33399b;
  }

  ._hover02:hover::after, 
  .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }

  ._hover03:hover {
    background-color: ${({theme}) => theme === 'light' ? '#EAEEF6' : '#33399b'};
    color: #FFFFFF;
    ${({theme}) => theme === 'dark' && 'border-color: #565EEF'};
  }

  ._hover03:hover a {
    color: #FFFFFF;
  }

  ._orange {
    background-color: ${({theme}) => theme === 'light' ? '#FFE4C2' : '#FF6D00'};
    color: ${({theme}) => theme === 'light' ? '#FF6D00' : '#FFE4C2'};
  }

  ._green {
      background-color: ${({theme}) => theme === 'light' ? '#B4FDD1' : '#06B16E'};
      color: ${({theme}) => theme === 'light' ? '#06B16E' : '#B4FDD1'};
  }

  ._purple {
      background-color: ${({theme}) => theme === 'light' ? '#E9D4FF' : '#9A48F1'};
      color: ${({theme}) => theme === 'light' ? '#9A48F1' : '#E9D4FF'};
  }

  ._gray {
      background: #94A6BE;
      color: #FFFFFF;
  }

  .subttl {
    color: ${({theme}) => theme === 'light' ? '#000' : '#fff'};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  ._active-category {
    opacity: 1 !important;
  }

  ._other-month {
    opacity: 0;
  }

  ._cell-day:hover {
    color: #94A6BE;
    background-color: #EAEEF6;
  }

  ._active-day {
    background-color: #94A6BE;
    color: ${({theme}) => theme === 'light' ? '#FFFFFF' : '#151419'} !important;
  }

  ._current {
    font-weight: 700;
  }

  ._btn-bor {
    border-radius: 4px;
    border: 0.7px solid ${({theme}) => theme === 'light' ? 'var(--palette-navy-60, #565EEF)' : 'var(--palette-navy-60, #FFFFFF)'};
    outline: none;
    background: transparent;
    color: ${({theme}) => theme === 'light' ? '#565EEF' : '#FFFFFF'};
  }

  ._btn-bg {
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
  }

  ._btn-bg a {
    color: #FFFFFF;
  }

  ._dark {
    display: none ${({theme}) => theme === 'light' ? 'none' : 'block'};
  }
`;

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;