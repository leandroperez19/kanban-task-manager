import styled from "styled-components";

export const TextareaWrapper = styled.div`
    display: grid;
    gap: 8px;

    span.label {
        color: ${({ theme }) => theme.input.label};
    }

    textarea {
        width: 100%;
        padding: 8px 16px;
        min-height: 112px;
        border: 1px solid ${({ theme }) => theme.input.border};
        border-radius: 4px;
        color: ${({ theme }) => theme.input.color};
        font-size: 13px;
        background-color: transparent;
        resize: none;

        &::placeholder {
            color: ${({ theme }) => theme.input.color};
            opacity: 0.25;
            font-size: 13px;
            line-height: 1.77;
        }
    }
`;
