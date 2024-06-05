import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    height: 64px;
    ${flex('center', 'space-between')}
    padding-inline: 16px;
    background-color: ${({ theme }) => theme.navbar.background};
    position: relative;
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
                padding-right: 24px;
                border-right: 1px solid ${({ theme }) => theme.navbar.border};
            }
        }
    }
`