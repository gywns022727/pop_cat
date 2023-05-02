import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: inherit;
        text-decoration: none;
        font-family: "cat";
    }

    img{
        vertical-align: middle;
    }
    @font-face {
        font-family: "cat";
        src: url(".subset-Nunito-Black.4fb0eeff.woff2") format("woff2");
    }
`;

export default GlobalStyle;
