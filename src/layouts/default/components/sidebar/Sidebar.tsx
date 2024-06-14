import { FC, useRef } from "react";
import { SidebarWrapper } from "./Sidebar.styled";
import logo from "@/assets/static/logo-small.svg";
import kanban from "@/assets/static/kanban.svg";
import kanbanBlack from "@/assets/static/kanban-black.svg";
import { useScreen } from "@/hooks/useScreen";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import eye from '@/assets/icons/eye-slash.svg';
import Boards from "@/components/boards/Boards";
import { useLayout } from "@/hooks/useLayout";

const Sidebar: FC = () => {
    const { isMobile } = useScreen();
    const { theme } = useTheme();
    const { sidebarToggle, sidebarOpen } = useLayout()
    const ref = useRef<HTMLDivElement | null>(null)

    const closeSidebar = () => {
        // ref.current?.classList.add('closing');
        sidebarToggle()
    }

    if (isMobile) return;

    return (
        <SidebarWrapper ref={ref} className={sidebarOpen ? 'open' : 'closing'}>
            <div className="logo flex gap-4 items-center ml-6 min-w-52 lg:ml-8">
                <img src={logo} alt="logo" className="h-6" />
                {!isMobile && (
                    <img
                        src={theme.type === "dark" ? kanban : kanbanBlack}
                        alt="kanban"
                        className="kanban h-6"
                    />
                )}
            </div>
            <div className="mt-14">
                <Boards />
            </div>
            <div className="bottom absolute bottom-8 w-full flex flex-col gap-4">
                <div className="theme-toggle mx-3 min-w-52 lg:mx-6">
                    <ThemeToggle />
                </div>
                <div className="hide-sidebar h-12 flex gap-2.5 items-center mr-6 min-w-52 pl-6 lg:pl-8" onClick={closeSidebar}>
                    <img src={eye} alt="eye" />
                    <span>Hide Sidebar</span>
                </div>
            </div>
        </SidebarWrapper>
    );
};

export default Sidebar;
