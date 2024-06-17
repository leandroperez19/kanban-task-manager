import { FC, ReactNode } from "react";
import { ModalWrapper } from "./Modal.styled";

type ModalProps = {
    children: ReactNode;
    close: () => void
};

const Modal: FC<ModalProps> = ({ children, close }) => {
    return (
        <ModalWrapper>
            <div className="modal">{ children }</div>
            <div className="background-touchable" onClick={close} />
        </ModalWrapper>
    );
};

export default Modal;
