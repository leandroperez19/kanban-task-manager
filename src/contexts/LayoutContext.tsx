import { createContext } from "react";

const LayoutContext = createContext<LayoutContextProps | null>(null);

export type LayoutContextProps = {
    boardDialogOpen: boolean;
    boardDialogToggle: () => void;
    moreDialogOpen: boolean;
    moreDialogToggle: () => void;
}

export default LayoutContext;