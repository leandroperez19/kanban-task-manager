import { BoardIcon } from "@/assets/icons/BoardIcon";
import { FC } from "react";
import { BoardsWrapper } from "./Boards.styled";

const Boards: FC = () => {
    return (
        <BoardsWrapper>
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
        </BoardsWrapper>
    );
};

export default Boards;
