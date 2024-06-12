import { FC } from "react";
import { SidebarToggleWrapper } from "./SidebarToggle.styled";
import eye from '@/assets/icons/eye.svg';
import { useLayout } from "@/hooks/useLayout";

const SidebarToggle: FC = () => {
    const { sidebarToggle, sidebarOpen } = useLayout();

    return (
        <SidebarToggleWrapper onClick={sidebarToggle} $sidebarOpen={sidebarOpen}>
            <img src={eye} alt="eye" />
        </SidebarToggleWrapper>
    );
};

export default SidebarToggle;
