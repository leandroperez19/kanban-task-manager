import styled from "styled-components";
import { buttonStatic } from "./Button";
import { flexCenter } from "@/styles/Mixins";

type ButtonWrapperProps = {
    $size: buttonStatic["size"];
    $color: buttonStatic["color"];
};

const getSize = (size: ButtonWrapperProps["$size"]) => {
    const map = {
        sm: "32px",
        regular: "40px",
        lg: "48px",
    } as const;
    return map[size] ?? "40px";
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    height: ${({ $size }) => getSize($size)};
    background-color: ${({ theme, $color }) => theme.buttons[$color].background};
    color: ${({ theme, $color }) => theme.buttons[$color].color};
    border-radius: 24px;
    ${flexCenter()}
    border: none;
    outline: none;

    &:disabled {
        opacity: .25;

        @media (hover: hover) {
            &:hover {
                cursor: not-allowed;
            }
        }
    }
`;
