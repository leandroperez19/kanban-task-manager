/* eslint-disable react-refresh/only-export-components */
import { css } from "styled-components";

export const flex = (
    align = "initial",
    justify = "initial",
    direction = "row",
    important: boolean = true
) => css`
    ${important ? `display: flex !important;` : `display: flex;`}
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
`;

export const flexCenter = (direction: string = "row") => css`
    ${flex("center", "center", direction)}
`;

export const square = (value: string, important = false) => css`
    ${important && `${value}: ${value} !important;`}
    height: ${value};
    width: ${value};
`;

export const circle = (value: string, important = false) => css`
    ${square(value, important)}
    border-radius: 100%;
`;

export const fullSize = () => css`
    ${square("100%")}
`;

export const truncateText = (lines: number, breakWord: boolean = false) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    ${breakWord && "word-break: break-all"}
`;
