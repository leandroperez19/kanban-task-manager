import { HTMLAttributes, forwardRef } from "react";
import { InputWrapper } from "./Input.styled";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, placeholder, ...props }, ref) => {
        return (
            <InputWrapper>
                {label && <span className="label block text-xs font-bold">{ label }</span>}
                <input type="text" ref={ref} placeholder={placeholder} {...props} />
            </InputWrapper>
        );
    }
);

export default Input;
