import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const BoardsWrapper = styled.div`
    h3 {
        margin-inline: 24px;
        letter-spacing: 2.4px;
        text-align: left;
        color: #828fa3;
        min-width: 130px;

        @media (1024px <= width) {
            margin-inline: 32px;
        }
    }

    .boards {
        margin-top: 19px;

        .board,
        .add-board {
            ${flex("center")}
            gap: 12px;
            padding-inline: 24px;
            height: 48px;
            border-radius: 0 32px 32px 0;
            min-width: 240px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            @media (1024px <= width) {
                padding-inline: 32px;
            }

            h5 {
                font-weight: bold;
                font-size: 15px;
                transition: color 0.3s ease;
            }
        }

        .add-board h5 {
            color: ${({ theme }) => theme.dialog.textTertiary};
        }

        .board {
            h5 {
                color: ${({ theme }) => theme.dialog.textPrimary};
            }

            @media (hover: hover) {
                &:not(.selected):hover {
                    background-color: ${({ theme }) =>
                        theme.dialog.hoverBackground};

                    h5 {
                        color: ${({ theme }) => theme.dialog.textTertiary};
                    }

                    svg path {
                        fill: ${({ theme }) => theme.dialog.highlightBackground} !important;
                    }
                }
            }

            &.selected {
                background-color: ${({ theme }) =>
                    theme.dialog.highlightBackground};

                h5 {
                    color: ${({ theme }) => theme.dialog.textSecondary};
                }
            }
        }
    }
`;
