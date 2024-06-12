import { useState } from "react";


export const useInitLayoutProvider = () => {
    const [boardDialogOpen, setBoardDialogOpen] = useState(false);
    const [moreDialogOpen, setMoreDialogOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const boardDialogToggle = () => setBoardDialogOpen(!boardDialogOpen);
    const moreDialogToggle = () => setMoreDialogOpen(!moreDialogOpen);
    const sidebarToggle = () => setSidebarOpen(!sidebarOpen);

    return { boardDialogOpen, boardDialogToggle, moreDialogOpen, moreDialogToggle, sidebarOpen, sidebarToggle }
}