import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: inherit;
        text-decoration: none;
        user-select: none;
    }
    ul, li {
        list-style: none;
    }
    img{
        vertical-align: middle;
    }
`;

export default GlobalStyle;
