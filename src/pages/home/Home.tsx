import { FC } from "react";
import { EmptyBoardWrapper, HomeWrapper } from "./Home.styled";
import Button from "@/components/button/Button";
import Modal from "@/components/modal/Modal";
import Input from "@/components/input/Input";
import Textarea from "@/components/textarea/Textarea";
import Dropdown from "@/components/dropdown/Dropdown";

const Home: FC = () => {
    return (
        <>
            <HomeWrapper>
                <EmptyBoard />
            </HomeWrapper>
            {/* <AddTaskModal /> */}
        </>
    );
};

const EmptyBoard: FC = () => {
    return (
        <EmptyBoardWrapper>
            <h4>This board is empty. Create a new column to get started.</h4>
            <Button size="lg" className="w-fit px-4">
                <span className="material-symbols-outlined text-base mt-1">
                    add
                </span>{" "}
                <span className="font-bold text-base">Add New Board</span>
            </Button>
        </EmptyBoardWrapper>
    );
};

export const DeleteTaskModal: FC = () => {
    return (
        <Modal close={() => ""}>
            <div className="modal-content flex gap-6 flex-col">
                <h5 className="text-danger text-lg font-bold">
                    Delete this task?
                </h5>
                <p className="text-secondary text-xs-plus">
                    Are you sure you want to delete the ‘Build settings UI’ task
                    and its subtasks? This action cannot be reversed.
                </p>
                <div className="buttons flex gap-4 flex-col">
                    <Button color="danger">
                        <span className="text-xs-plus font-bold">Delete</span>
                    </Button>
                    <Button color="secondary">
                        <span className="text-xs-plus font-bold">Cancel</span>
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export const AddTaskModal: FC = () => {
    return (
        <Modal close={() => ""}>
            <div className="modal-content flex gap-6 flex-col">
                <h5 className="text-primary text-lg font-bold">Add New Task</h5>
                <Input label="Title" placeholder="e.g. Take coffee break" />
                <Textarea
                
                    label="Description"
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
                />
                <Dropdown />
            </div>
        </Modal>
    );
};

export default Home;
