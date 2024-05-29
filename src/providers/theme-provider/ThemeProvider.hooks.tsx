import { useEffect, useState } from "react";
import darkTheme from "@/styles/themes/Dark";
import lightTheme from "@/styles/themes/Light";

const defaultTheme = darkTheme;

export const useInitThemeProvider = () => {
    const [currentTheme, setCurrentTheme] = useState(defaultTheme);

    useEffect(() => {
        const isSystemLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
        const storageTheme = localStorage.getItem("theme");

        if (storageTheme === "light" || isSystemLightMode) {
            setCurrentTheme(lightTheme);
        }
    }, []);

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => {
            const selectedTheme = prevTheme.type === "dark" ? lightTheme : darkTheme;
            localStorage.setItem("theme", selectedTheme.type);
            return selectedTheme;
        });
    };

    return { currentTheme, toggleTheme }
}