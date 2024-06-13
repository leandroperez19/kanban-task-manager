import { flex } from "@/styles/Mixins";
import styled from "styled-components";

type NavbarWrapperProps = {
    $sidebarOpen: boolean
}

export const NavbarWrapper = styled.nav<NavbarWrapperProps>`
    height: 64px;
    ${flex('center', 'space-between')}
    padding-inline: 16px;
    background-color: ${({ theme }) => theme.navbar.background};
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 100;

    @media (768px <= width) {
        height: 80px;
        padding-inline: 24px;
        border-bottom: 1px solid ${({ theme }) => theme.navbar.border};
    }

    .left {
        .tab-name {
            .material-symbols-outlined {
                color: ${({ theme }) => theme.navbar.icons};
            }
        }

        .logo {
            @media (768px <= width) {
                transition: padding-right .3s ease;
                padding-right: ${({ $sidebarOpen }) => $sidebarOpen ? '92px' : '24px'};
                border-right: 1px solid ${({ theme }) => theme.navbar.border};
            }

            @media (1024px <= width) {
                padding-right: ${({ $sidebarOpen }) => $sidebarOpen ? '132px' : '24px'};
            }
        }
    }
`