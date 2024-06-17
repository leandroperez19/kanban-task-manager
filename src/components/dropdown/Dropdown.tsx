import { FC } from "react";
import { DropdownWrapper } from "./Dropdown.styled";

type DropdownProps = {
    label?: string,
}

const Dropdown: FC<DropdownProps> = ({ label }) => {
  return (
    <DropdownWrapper>
        <div className="top">
            {label && <span className="label block text-xs font-bold">{label}</span>}
            <div className="selected-option">
                <h5 className="text-xs-plus">Doing</h5>
                <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
            </div>
        </div>
        <div className="options">
            <div className="option">Todo</div>
            <div className="option">Doing</div>
            <div className="option">Done</div>
        </div>
    </DropdownWrapper>
  )
}

export default Dropdown;