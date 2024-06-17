import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;

    .top {
        span.label {
            color: ${({ theme }) => theme.dropdown.label};
        }

        .selected-option {
            width: 100%;
            padding: 8px 12px 8px 16px;
            height: 40px;
            border: 1px solid ${({ theme }) => theme.dropdown.border};
            border-radius: 4px;
            color: ${({ theme }) => theme.dropdown.color};
            background-color: transparent;
            ${flex('center', 'space-between')}

            span {
                color: ${({ theme }) => theme.palette.common.purple};
            }
        }
    }

    .options {
        position: absolute;
        background-color: ${({ theme }) => theme.dropdown.optionsBackground};
        top: calc(100% + 5px);
        width: 100%;
        left: 0;
        
    }
`;
