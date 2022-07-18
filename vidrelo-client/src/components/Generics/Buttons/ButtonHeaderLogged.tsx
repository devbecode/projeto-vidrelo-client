import { ButtonHTMLAttributes, InputHTMLAttributes } from "react"
import { Link } from "react-router-dom";
import "./Style/Buttons.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: any,
}

export default function ButtonHeaderLogged({ id, ...rest }: ButtonProps) {

    return (
        <>
            <button {...rest} id={id}></button>
        </>
    )
}