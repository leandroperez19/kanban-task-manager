import { flexCenter } from "@/styles/Mixins";
import styled from "styled-components";

type SidebarToggleWrapperProps = {
    $sidebarOpen: boolean;
}

export const SidebarToggleWrapper = styled.button<SidebarToggleWrapperProps>`
    position: absolute;
    left: 0;
    bottom: 32px;
    width: 56px;
    height: 48px;
    background-color: ${({ theme }) => theme.palette.common.purple};
    border-radius: 0 24px 24px 0;
    ${flexCenter()}
    border: none;
    outline: none;
    z-index: 120;
    transition: transform .3s .3s ease;

    transform: ${({ $sidebarOpen }) => $sidebarOpen ? 'translateX(-100%)' : 'translateX(0)'};
`;
