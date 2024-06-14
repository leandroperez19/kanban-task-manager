import { FC } from "react";
import { DefaultLayoutWrapper } from "./DefaultLayout.styled";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useLayout } from "@/hooks/useLayout";
import { useScreen } from "@/hooks/useScreen";
import SidebarToggle from "./components/sidebarToggle/SidebarToggle";

const DefaultLayout: FC = () => {
    const { sidebarOpen } = useLayout()
    const { isMobile } = useScreen()

    return (
        <DefaultLayoutWrapper $sidebarOpen={sidebarOpen}>
            <Navbar />
            {!isMobile && <SidebarToggle />}
            <div className="x-axis">
                {!isMobile && <Sidebar />}
                <main>
                    <Outlet />
                </main>
            </div>
        </DefaultLayoutWrapper>
    );
};

export default DefaultLayout;
