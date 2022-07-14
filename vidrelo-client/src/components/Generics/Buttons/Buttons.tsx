import { ButtonHTMLAttributes, InputHTMLAttributes } from "react"
import { Link } from "react-router-dom";
//import "./Style/Buttons.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    id: any
}

export default function Buttons({id, text, ...rest}: ButtonProps){
    
    return(
        <>
            <button {...rest} id={id} type="submit">{text}</button>
        </>
    )
}