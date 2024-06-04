import { FC } from "react";
import { NavbarWrapper } from "./Navbar.styled";
import logo from "@/assets/static/logo-small.svg";
import { useScreen } from "@/hooks/useScreen";
import Button from "@/components/button/Button";
import dots from '@/assets/icons/dots.svg';
import BoardDialog from "./components/boardDialog/BoardDialog";
import { useLayout } from "@/hooks/useLayout";
import MoreDialog from "./components/moreDialog/MoreDialog";

const Navbar: FC = () => {
    const { isMobile } = useScreen();
    const { boardDialogOpen, boardDialogToggle, moreDialogOpen, moreDialogToggle } = useLayout();

    return (
        <NavbarWrapper>
            <div className="left flex items-center">
                <div className="logo flex gap-5">
                    <img src={logo} alt="logo" />
                    {!isMobile && <h1 className="text-2xl">kanban</h1>}
                </div>
                <div className="tab-name ml-4 flex gap-2 items-center" onClick={() => isMobile && boardDialogToggle()}>
                    <span className="text-lg font-bold">Platform Launch</span>
                    <span className="material-symbols-outlined text-base">keyboard_arrow_down</span>
                </div>
            </div>
            <div className="right flex items-center gap-4">
                <Button size="sm" className="w-12" disabled>
                    <span className="material-symbols-outlined text-base">add</span>
                </Button>
                <img src={dots} alt="more" className="dots h-4" onClick={moreDialogToggle}/>
            </div>
            {boardDialogOpen && <BoardDialog />}
            {moreDialogOpen && <MoreDialog />}
            {/* <MoreDialog /> */}
        </NavbarWrapper>
    );
};

export default Navbar;
