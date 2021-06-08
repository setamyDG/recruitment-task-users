import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
  }

  body {
    overflow-x: hidden;
    overscroll-behavior: none;
  }

  a {
    transition: .5s;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 3rem;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.lightGray};
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    line-height: 24px;
  }

  h3 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 98%;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
  }

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  li {
    margin-left: 20px;
  }

  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }

  figcaption {
    text-align: center;
    font-style: italic;
    font-size: 0.75rem;
    margin-top: 10px;
  }

  p {
    line-height: 24px;
  }

  li {
    line-height: 1.6;
  }

  strong {
    font-size: inherit;
  }

  b {
    font-size: inherit;
  }

  .Toastify__toast-container {
    top: 70px;
  }

  .Toastify__toast {
    width: fit-content;
    padding: 0;
    padding-right: 18px;
    border-radius: 0;
    min-height: 0;
    display: flex;
    align-items: center;
    margin-left: auto;

  }

  .Toastify__toast-body {
    padding: 0;
  }
`;
