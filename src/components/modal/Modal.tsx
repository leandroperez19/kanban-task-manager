import { FC, ReactNode } from "react";
import { ModalWrapper } from "./Modal.styled";

type ModalProps = {
    children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
    return (
        <ModalWrapper>
            <div className="modal">{ children }</div>
            <div className="background-touchable" />
        </ModalWrapper>
    );
};

export default Modal;
