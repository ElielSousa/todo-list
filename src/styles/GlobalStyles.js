import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    body{
      font-family: "Inter", sans-serif;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default GlobalStyles;
