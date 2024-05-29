import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const ThemeToggleWrapper = styled.div`
    height: 48px;
    ${flex('center', 'center')};
    gap: 23px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.dialog.secondaryBackground};
`