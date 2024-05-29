import { FC } from "react";
import { NavbarWrapper } from "./Navbar.styled";
import logo from "@/assets/static/logo-small.svg";
import { useScreen } from "@/hooks/useScreen";
import Button from "@/components/button/Button";
import dots from '@/assets/icons/dots.svg';
import BoardDialog from "./components/boardDialog/BoardDialog";

const Navbar: FC = () => {
    const { isMobile } = useScreen(768);

    return (
        <NavbarWrapper>
            <div className="left flex items-center">
                <div className="logo flex gap-5">
                    <img src={logo} alt="logo" />
                    {!isMobile && <h1 className="text-2xl">kanban</h1>}
                </div>
                <div className="tab-name ml-4 flex gap-2 items-center">
                    <span className="text-lg font-bold">Platform Launch</span>
                    <span className="material-symbols-outlined text-base">keyboard_arrow_down</span>
                </div>
            </div>
            <div className="right flex items-center gap-4">
                <Button size="sm" className="w-12" disabled>
                    <span className="material-symbols-outlined text-base">add</span>
                </Button>
                <img src={dots} alt="more" className="h-4"/>
            </div>
            <BoardDialog />
        </NavbarWrapper>
    );
};

export default Navbar;
