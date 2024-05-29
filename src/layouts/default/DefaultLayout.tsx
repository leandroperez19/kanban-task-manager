import { FC } from "react";
import { DefaultLayoutWrapper } from "./DefaultLayout.styled";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const DefaultLayout: FC = () => {
    return (
        <DefaultLayoutWrapper>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </DefaultLayoutWrapper>
    );
};

export default DefaultLayout;
