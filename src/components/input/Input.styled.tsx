import styled from "styled-components";

export const InputWrapper = styled.div`
    display: grid;
    gap: 8px;

    span.label {
        color: ${({ theme }) => theme.input.label};
    }

    input {
        width: 100%;
        padding: 8px 16px;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.input.border};
        border-radius: 4px;
        color: ${({ theme }) => theme.input.color};
        font-size: 13px;
        background-color: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.input.color};
            opacity: .25;
            font-size: 13px;
        }
    }
`