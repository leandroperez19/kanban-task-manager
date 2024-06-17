import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: color, background 0.2s ease-in-out;
        font-family: "Plus Jakarta Sans", sans-serif;


        &::-webkit-scrollbar {
            background-color: ${({ theme }) => theme.page.background};
            width: 0.5rem;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.page.background};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.page.scrollbarThumb};
            border-radius: 0.25rem;
        }
    }

    html,
    body {
        color-scheme: ${({ theme }) => theme.type};
        max-width: 100dvw;
        min-height: 100dvh;
        overflow-x: hidden;
    }

    body {
        color: ${({ theme }) => theme.palette.text.primary};
        background: ${({ theme }) => theme.page.background}
    }

    .material-symbols-outlined {
        max-width: 20px;
        overflow: hidden;
    }

    /* extra classes */

    .text-danger {
        color: ${({ theme }) => theme.palette.text.danger};
    }

    .text-secondary {
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    .text-primary {
        color: ${({ theme }) => theme.palette.text.primary};
    }

    .text-xs-plus {
        font-size: 13px;
    }
`;

export default GlobalStyles;
