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
    color: #000000;
    background-color: #EAEEF6;
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
    background-color: #33399b;
    color: #FFFFFF;
  }

  ._hover03:hover a {
    color: #FFFFFF;
  }

  ._orange {
    background-color: #FFE4C2;
    color: #FF6D00;
  }

  ._green {
      background-color: #B4FDD1;
      color: #06B16E;
  }

  ._purple {
      background-color: #E9D4FF;
      color: #9A48F1;
  }

  ._gray {
      background: #94A6BE;
      color: #FFFFFF;
  }

  .subttl {
    color: #000;
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
    color: #FFFFFF;
  }

  ._current {
    font-weight: 700;
  }

  ._btn-bor {
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    background: transparent;
    color: #565EEF;
  }
  
  ._btn-bor a {
    color: #565EEF;
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

  ._hide {
    display: none;
  }

  ._dark {
    display: none;
  }
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