import { FC } from "react";
import { EmptyBoardWrapper, HomeWrapper } from "./Home.styled";
import Button from "@/components/button/Button";

const Home: FC = () => {
    return (
        <HomeWrapper>
            <EmptyBoard />
        </HomeWrapper>
    );
};

const EmptyBoard: FC = () => {
    return (
        <EmptyBoardWrapper>
            <h4>This board is empty. Create a new column to get started.</h4>
            <Button size="lg" className="w-fit px-4">
                <span className="material-symbols-outlined text-base mt-1">add</span>{" "}
                <span className="font-bold text-base">Add New Board</span>
            </Button>
        </EmptyBoardWrapper>
    );
};

export default Home;
