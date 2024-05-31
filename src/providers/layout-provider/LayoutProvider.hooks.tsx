import { useState } from "react";


export const useInitLayoutProvider = () => {
    const [boardDialogOpen, setBoardDialogOpen] = useState(false);

    const boardDialogToggle = () => setBoardDialogOpen(!boardDialogOpen)

    return { boardDialogOpen, boardDialogToggle }
}