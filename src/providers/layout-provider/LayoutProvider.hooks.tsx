import { useState } from "react";


export const useInitLayoutProvider = () => {
    const [boardDialogOpen, setBoardDialogOpen] = useState(false);
    const [moreDialogOpen, setMoreDialogOpen] = useState(false);

    const boardDialogToggle = () => setBoardDialogOpen(!boardDialogOpen)
    const moreDialogToggle = () => setMoreDialogOpen(!moreDialogOpen)

    return { boardDialogOpen, boardDialogToggle, moreDialogOpen, moreDialogToggle }
}