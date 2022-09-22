import { User } from "phosphor-react";
import { forwardRef, InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
}


const Input = forwardRef<HTMLInputElement, InputProps>(({error, ...props}: InputProps, ref) => {
    return (
        <InputContainer htmlFor={props.id}>
            <User size={18} color="#887777" />
            <input ref={ref}  {...props} />
        </InputContainer>
    )
})

export { Input as InputComponent }