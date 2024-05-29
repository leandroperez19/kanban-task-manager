import ThemeContext from "@/contexts/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('useTheme must be used within an ThemesProvider')
    }
    return context;
}