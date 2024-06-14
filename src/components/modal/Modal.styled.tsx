import { flexCenter } from "@/styles/Mixins";
import styled from "styled-components";

export const ModalWrapper = styled.div`
    z-index: 250;
    width: 100dvw;
    height: 100dvh;
    position: absolute;
    top: 0;
    left: 0;

    ${flexCenter()}

    .background-touchable {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .modal {

    }
`