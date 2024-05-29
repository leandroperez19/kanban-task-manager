import { square } from "@/styles/Mixins";
import styled from "styled-components";

type ToggleWrapperProps = {
    $toggled: boolean
}

export const ToggleWrapper = styled.div<ToggleWrapperProps>`
    background-color: ${({ theme }) => theme.palette.common.purple};
    border-radius: 12px;
    width: 40px;
    height: 20px;
    padding: 3px;

    .ball {
        ${square('14px')}
        background-color: ${({ theme }) => theme.palette.common.white};
        border-radius: 50%;
        transform: translateX(${({ $toggled }) => $toggled ? 'calc(100% + 4px)' : '2px'});
        transition: all .3s ease;
    }
`