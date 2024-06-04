import { FC, MouseEvent, useEffect, useRef } from "react";
import { MoreDialogWrapper } from "./MoreDialog.styled";
import { useLayout } from "@/hooks/useLayout";

const MoreDialog: FC = () => {
	const { moreDialogToggle } = useLayout();
	const dialog = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeDialog = (e: MouseEvent<HTMLElement> | globalThis.MouseEvent) => {
            const element = e.target as Element;
            if (element.closest(".more-dialog") || element.closest(".dots")) return;
			dialog.current?.classList.add('closing')
			setTimeout(() => {
				moreDialogToggle();
			}, 300)
        };
        document.body.addEventListener("click", (e) => closeDialog(e));
        return () => document.body.removeEventListener("click", closeDialog);
    }, [moreDialogToggle]);

    return (
        <MoreDialogWrapper className="more-dialog" ref={dialog}>
            <span>Edit Board</span>
            <span>Delete Board</span>
        </MoreDialogWrapper>
    );
};

export default MoreDialog;
