import { HTMLAttributes, forwardRef } from "react";
import { TextareaWrapper } from "./Textarea.styled";

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
    label?: string
    placeholder?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, placeholder }, ref) => {
        return(
            <TextareaWrapper>
                {label && <span className="label block text-xs font-bold">{label}</span>}
                <textarea placeholder={placeholder} ref={ref} />
            </TextareaWrapper>
        )
    }
)

export default Textarea;