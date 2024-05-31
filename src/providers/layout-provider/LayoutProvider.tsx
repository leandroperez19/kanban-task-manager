import { FC, ReactNode } from "react";
import LayoutContext from "@/contexts/LayoutContext";
import { useInitLayoutProvider } from "./LayoutProvider.hooks";

const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
    const { boardDialogOpen, boardDialogToggle } = useInitLayoutProvider();

    return (
        <LayoutContext.Provider value={{ boardDialogOpen, boardDialogToggle }}>
                {children}
        </LayoutContext.Provider>
    );
};

type LayoutProviderProps = {
    children: ReactNode;
}

export default LayoutProvider;