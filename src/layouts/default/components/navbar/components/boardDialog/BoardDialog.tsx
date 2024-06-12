import { BoardDialogWrapper } from "./BoardDialog.styled";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import { useScreen } from "@/hooks/useScreen";
import { FC, useRef } from "react";
import { useLayout } from "@/hooks/useLayout";
import Boards from "@/components/boards/Boards";

const BoardDialog: FC = () => {
    const { isMobile } = useScreen();
    const { boardDialogToggle } = useLayout();
    const dialog = useRef<HTMLDivElement | null>(null);

    const closeDialog = () => {
        dialog.current?.classList.add("closing");
        setTimeout(() => {
            boardDialogToggle();
        }, 300);
    };

    if (!isMobile) return;

    return (
        <BoardDialogWrapper ref={dialog}>
            <div className="dialog">
                <Boards />
                <div className="theme-toggle mt-4 ml-6">
                    <ThemeToggle />
                </div>
            </div>
            <div className="background-touchable" onClick={closeDialog} />
        </BoardDialogWrapper>
    );
};

export default BoardDialog;
