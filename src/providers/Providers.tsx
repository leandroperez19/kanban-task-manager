import { FC, ReactNode } from "react";
import ThemesProvider from "./theme-provider/ThemeProvider";
import LayoutProvider from "./layout-provider/LayoutProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemesProvider>
            <LayoutProvider>
                {children}
            </LayoutProvider>
        </ThemesProvider>
    );
}

type ProvidersProps = {
    children: ReactNode;
}

export default Providers;