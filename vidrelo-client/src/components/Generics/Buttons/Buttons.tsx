import { InputHTMLAttributes } from "react"
import { Link } from "react-router-dom";
import "./Style/Buttons.scss"

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    text: string,
    id: any
}

export default function Buttons({id, text}: ButtonProps){
    
    return(
        <>
            <button className="btn" id={id} type="submit">{text}</button>
        </>
    )
}