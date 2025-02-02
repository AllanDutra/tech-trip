import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
    */

    :root{
        --main-color: #2BCB9A;
    }
    
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    * {
    margin: 0;
    }

    body {
    line-height: 160%;
    
    -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
    display: block;

    max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
    font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    overflow-wrap: break-word;
    }

    #root,
    #__next {
    isolation: isolate;
    }
`;
