import { BoardIcon } from "@/assets/icons/BoardIcon";
import { BoardDialogWrapper } from "./BoardDialog.styled";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";

const BoardDialog = () => {
    return (
        <BoardDialogWrapper>
            <div className="dialog">
                <h3 className="text-xs font-bold">ALL BOARDS (3)</h3>
                <div className="boards">
                    <div className="board selected">
                        <BoardIcon color="#FFF"/>
                        <h5>Platform Launch</h5>
                    </div>
                    <div className="board">
                        <BoardIcon />
                        <h5>Marketing Plan</h5>
                    </div>
                    <div className="add-board">
                        <BoardIcon color="#635FC7"/>
                        <h5>+ Create New Board</h5>
                    </div>
                </div>
                <div className="theme-toggle mt-4 ml-6">
                    <ThemeToggle />
                </div>
            </div>
            <div className="background-touchable" />
        </BoardDialogWrapper>
    );
};

export default BoardDialog;
