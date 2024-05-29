import { createContext } from "react";

const LayoutContext = createContext<LayoutContextProps | null>(null);

export type LayoutContextProps = {
    boardDialogOpen: boolean;
    boardDialogToggle: () => void;
}

export default LayoutContext;