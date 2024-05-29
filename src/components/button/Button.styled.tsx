import styled from "styled-components";
import { buttonStatic } from "./Button";
import { flexCenter } from "@/styles/Mixins";

type ButtonWrapperProps = {
    $size: buttonStatic["size"];
    $color: buttonStatic["color"];
};

const getSize = (size: ButtonWrapperProps["$size"]) => {
    const map = {
        sm: { mobile: "32px", desktop: "35px" },
        regular: { mobile: "40px", desktop: "45px" },
        lg: { mobile: "47px", desktop: "55px" },
    } as const;
    return map[size] ?? { mobile: "40px", desktop: "45px" };
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    height: ${({ $size }) => getSize($size).mobile};
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
