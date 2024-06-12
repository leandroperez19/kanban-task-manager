import styled from "styled-components";

export const SidebarWrapper = styled.div`
    height: 100dvh;
    background-color: ${({ theme }) => theme.navbar.background};
    border-right: 1px solid ${({ theme }) => theme.navbar.border};
    z-index: 150;
    padding-block: 32px;
    position: relative;
    overflow: hidden;

    &.closing {
        animation: sidebarClosing .3s ease forwards normal;

        @keyframes sidebarClosing {
            0% {
                width: 260px;
            }

            100% {
                width: 0;
                padding-right: 0;
            }
        }
    }

    &.open {
        animation: sidebarOpening .3s ease forwards normal;

        @keyframes sidebarOpening {
            0% {
                width: 0;
                padding-right: 0;
            }

            100% {
                width: 260px;
                padding-right: 20px;
            }
        }
    }

    .bottom {
        .hide-sidebar {
            color: ${({ theme }) => theme.palette.text.secondary};
            font-weight: bold;
        }
    }
`;
