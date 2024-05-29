import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const BoardDialogWrapper = styled.div`
    position: absolute;
    top: 100%;
    height: calc(100dvh - 64px);
    width: 100dvw;
    left: 0;

    .background-touchable {
        position: absolute;
        background-color: ${({ theme }) => theme.palette.common.black};
        opacity: 0.5;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: 0;
        left: 0;
    }

    .dialog {
        padding-block: 16px;
        padding-inline: 0 24px;
        background-color: ${({ theme }) => theme.dialog.background};
        border-radius: 8px;
        width: 264px;
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 10px 20px 0 rgba(54, 78, 126, 0.25);

        h3 {
            margin-inline: 24px;
            letter-spacing: 2.4px;
            text-align: left;
            color: #828fa3;
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

                h5 {
                    font-weight: bold;
                    font-size: 15px;
                }
            }

            .add-board h5 {
                color: ${({ theme }) => theme.dialog.textTertiary}
            }

            .board {
                h5 {
                    color: ${({ theme }) => theme.dialog.textPrimary};
                }

                &.selected {
                    background-color: ${({ theme }) =>
                        theme.dialog.highlightBackground};

                    h5 {
                        color: ${({ theme }) => theme.dialog.textSecondary};
                    }

                    img {
                        fill: white;
                    }
                }
            }
        }
    }
`;
