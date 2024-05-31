import { BoardIcon } from "@/assets/icons/BoardIcon";
import { BoardDialogWrapper } from "./BoardDialog.styled";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import { useScreen } from "@/hooks/useScreen";
import { FC, useRef } from "react";
import { useLayout } from "@/hooks/useLayout";

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
                <h3 className="text-xs font-bold">ALL BOARDS (3)</h3>
                <div className="boards">
                    <div className="board selected">
                        <BoardIcon color="#FFF" />
                        <h5>Platform Launch</h5>
                    </div>
                    <div className="board">
                        <BoardIcon />
                        <h5>Marketing Plan</h5>
                    </div>
                    <div className="add-board">
                        <BoardIcon color="#635FC7" />
                        <h5>+ Create New Board</h5>
                    </div>
                </div>
                <div className="theme-toggle mt-4 ml-6">
                    <ThemeToggle />
                </div>
            </div>
            <div className="background-touchable" onClick={closeDialog} />
        </BoardDialogWrapper>
    );
};

export default BoardDialog;
