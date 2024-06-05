import { FC } from "react";
import { NavbarWrapper } from "./Navbar.styled";
import logo from "@/assets/static/logo-small.svg";
import { useScreen } from "@/hooks/useScreen";
import Button from "@/components/button/Button";
import dots from '@/assets/icons/dots.svg';
import BoardDialog from "./components/boardDialog/BoardDialog";
import { useLayout } from "@/hooks/useLayout";
import MoreDialog from "./components/moreDialog/MoreDialog";
import kanban from '@/assets/static/kanban.svg'
import kanbanBlack from '@/assets/static/kanban-black.svg'
import { useTheme } from "@/hooks/useTheme";

const Navbar: FC = () => {
    const { isMobile } = useScreen();
    const { boardDialogOpen, boardDialogToggle, moreDialogOpen, moreDialogToggle } = useLayout();
    const { theme } = useTheme()

    return (
        <NavbarWrapper>
            <div className="left flex items-center h-full">
                <div className="logo flex gap-4 h-full items-center">
                    <img src={logo} alt="logo" className="h-6"/>
                    {!isMobile && <img src={theme.type === 'dark' ? kanban : kanbanBlack} alt="kanban" className="kanban h-6"/>}
                </div>
                <div className="tab-name ml-4 flex gap-2 items-center md:gap-0 md:ml-6" onClick={() => isMobile && boardDialogToggle()}>
                    <span className="text-lg font-bold md:text-xl">Platform Launch</span>
                    {isMobile && <span className="material-symbols-outlined text-base">keyboard_arrow_down</span>}
                </div>
            </div>
            <div className="right flex items-center gap-4 md:gap-6">
                <Button size={isMobile ? "sm" : "lg"} className="w-12 md:w-full md:px-6" disabled>
                    <span className="material-symbols-outlined text-base md:mt-1">add</span>
                    {!isMobile && <span>Add New Task</span>}
                </Button>
                <img src={dots} alt="more" className="dots h-4 md:h-5" onClick={moreDialogToggle}/>
            </div>
            {boardDialogOpen && <BoardDialog />}
            {moreDialogOpen && <MoreDialog />}
        </NavbarWrapper>
    );
};

export default Navbar;
