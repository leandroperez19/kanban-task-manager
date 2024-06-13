import { flexCenter } from "@/styles/Mixins";
import styled from "styled-components";

export const HomeWrapper = styled.div`
    ${flexCenter()}
    padding-inline: 16px;
    min-height: calc(100dvh - 64px);
    top: 64px;
    position: relative;

    @media (768px <= width) {
        min-height: calc(100dvh - 80px);
        top: 80px;
    }
`;

export const EmptyBoardWrapper = styled.div`
    ${flexCenter("column")}
    gap: 25px;

    @media (1024px <= width) {
        gap: 32px;
    }

    h4 {
        max-width: 343px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: ${({ theme }) => theme.palette.text.secondary};

        @media (1024px <= width) {
            max-width: unset;
            width: fit-content;
        }
    }
`;
