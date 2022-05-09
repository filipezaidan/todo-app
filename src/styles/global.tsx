import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    #root{
        --color-background-light: hsl(0, 0%, 98%);
        --color-primary-light: hsl(236, 33%, 92%);
        --color-background-dark: hsl(235, 21%, 11%);
        --color-primary-dark: hsl(235, 24%, 19%);
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    body {
        height: 100vh;
        background: ${({ theme }) => theme.colors.background}
        /* background: var(--color-background-light) */
    } 
`



