import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    height: 64px;
    ${flex('center', 'space-between')}
    padding-inline: 16px;
    background-color: ${({ theme }) => theme.navbar.background};
    position: relative;

    .left {
        .tab-name {
            .material-symbols-outlined {
                color: ${({ theme }) => theme.navbar.icons};
            }
        }
    }
`