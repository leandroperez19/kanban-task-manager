import { fullSize } from "@/styles/Mixins";
import styled from "styled-components";

type DefaultLayoutWrapperProps = {
    $sidebarOpen: boolean
}

export const DefaultLayoutWrapper = styled.div<DefaultLayoutWrapperProps>`
    .x-axis {
        @media (768px <= width) {
            display: grid;
            transition: all .3s ease;
            grid-template-columns: ${({ $sidebarOpen }) => $sidebarOpen ? '260px 1fr' : '0 1fr'};

            main {
                ${fullSize()}
            }
        }
    }
`;
