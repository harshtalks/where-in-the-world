import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
  }
  body{
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bg};
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
