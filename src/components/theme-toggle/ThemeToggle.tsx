import { FC } from "react";
import { ThemeToggleWrapper } from "./ThemeToggle.styled";
import moon from "@/assets/icons/moon.svg";
import sun from "@/assets/icons/sun.svg";
import Toggle from "../toggle/Toggle";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle: FC = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <ThemeToggleWrapper onClick={toggleTheme}>
            <img src={sun} alt="sun" />
            <Toggle toggled={theme.type === "dark"} />
            <img src={moon} alt="moon" />
        </ThemeToggleWrapper>
    );
};

export default ThemeToggle;
