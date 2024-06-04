import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const MoreDialogWrapper = styled.div`
    width: 192px;
    height: 94px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 10px 20px 0 rgba(54, 78, 126, 0.25);
    background-color: ${({ theme }) => theme.dialog.secondaryBackground};
    position: absolute;
    right: -100%;
    top: 95%;
    ${flex("unset", "space-between", "column")}

    animation: slideInX .3s ease normal forwards;

    @keyframes slideInX {
        100% {
            right: 16px;
        }
    }

    &.closing {
        animation: slideOutX 0.3s ease normal forwards;

        @keyframes slideOutX {
            0% {
                right: 16px;
            }
            100% {
                right: -100%;
            }
        }
    }

    span {
        display: block;
        font-size: 13px;
        line-height: 1.77;
        font-weight: 500;
        color: ${({ theme }) => theme.dialog.textPrimary};
        ${flex("center", "start")}
        flex-basis: 50%;

        &:last-of-type {
            color: ${({ theme }) => theme.dialog.textDanger};
        }
    }
`;
