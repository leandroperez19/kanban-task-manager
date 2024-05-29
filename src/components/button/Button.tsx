import { ReactNode } from "react"
import { HTMLAttributes, forwardRef } from "react";
import { ButtonWrapper } from "./Button.styled";

export interface buttonStatic {
    size: 'sm' | 'regular' | 'lg',
    color: 'primary' | 'secondary'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode | string;
    size?: buttonStatic['size'];
    color?: buttonStatic['color'];
    disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, size = 'regular', color = 'primary', disabled = false , ...props }, ref) => {
        return(
            <ButtonWrapper $size={size}  $color={color} disabled={disabled}  ref={ref} { ...props }>
                { children }
            </ButtonWrapper>
        )
    }
)

export default Button;
