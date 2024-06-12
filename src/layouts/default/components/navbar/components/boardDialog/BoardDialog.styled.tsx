import styled from "styled-components";

export const BoardDialogWrapper = styled.div`
    position: absolute;
    top: 0;
    height: calc(100dvh);
    width: 100dvw;
    left: 0;
    z-index: 150;

    &.closing {
        .background-touchable {
            animation: hide 0.3s ease forwards normal;

            @keyframes hide {
                0% {
                    opacity: 0.5;
                }
                100% {
                    opacity: 0;
                }
            }
        }

        .dialog {
            animation: slideOut 0.3s ease forwards normal;

            @keyframes slideOut {
                0% {
                    top: 80px;
                }
                100% {
                    top: -100%;
                }
            }
        }
    }

    .background-touchable {
        position: absolute;
        background-color: ${({ theme }) => theme.palette.common.black};
        opacity: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: 0;
        left: 0;

        animation: show 0.3s ease forwards normal;

        @keyframes show {
            100% {
                opacity: 0.5;
            }
        }
    }

    .dialog {
        padding-block: 16px;
        padding-inline: 0 24px;
        background-color: ${({ theme }) => theme.dialog.background};
        border-radius: 8px;
        width: 264px;
        position: absolute;
        top: -100%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 10px 20px 0 rgba(54, 78, 126, 0.25);
        animation: slideIn 0.3s ease forwards normal;

        @keyframes slideIn {
            100% {
                top: 80px;
            }
        }
    }
`;
